import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "@/components/layout";

export default function Detail() {
  const { id } = useParams();

  useEffect(() => {
    findById();
  }, []);

  function findById() {
    const products = getProducts();
    const getItem = products.find((product) => product.id == id);
    console.log(getItem);
    // TODO: Save getItem into state and show it inside render function
  }

  function getProducts() {
    const getItem = localStorage.getItem("products");

    if (getItem) {
      const parseProducts = JSON.parse(getItem);
      return parseProducts;
    }

    return [];
  }

  return <Layout>detail</Layout>;
}
