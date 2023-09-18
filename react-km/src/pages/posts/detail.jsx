import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "@/components/layout";
import Swal from "@/utils/swal";

export default function detail() {
  const [post, setPost] = useState({});
  const [isReady, setIsReady] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    // GET -> (url/endpoint, config)
    setIsReady(false);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id_post}`)
      .then((response) => {
        const { data } = response;
        setPost(data);
      })
      .catch((error) =>
        Swal.fire({
          title: "Failed",
          text: error.toString(),
          showCancelButton: false,
        })
      )
      .finally(() => setIsReady(true));
  }

  return (
    <Layout>
      {isReady ? (
        <>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading</p>
      )}
    </Layout>
  );
}
