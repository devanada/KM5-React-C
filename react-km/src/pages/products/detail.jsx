import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "@/components/layout";
import { getDetailProducts } from "@/utils/api/products/api";
import { LoadingSpinner } from "@/components/loading";
import Swal from "@/utils/swal";

export default function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailProducts(id);
      setProduct(result);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  return (
    <Layout>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <p>{product.productName}</p>
          <p>{product.productCategory}</p>
          <p>{product.productFreshness}</p>
          <p>{product.additionalDescription}</p>
          <p>{product.productPrice}</p>
        </div>
      )}
    </Layout>
  );
}
