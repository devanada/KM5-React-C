import { useState, useEffect } from "react";
import axios from "axios";

import { Input, TextArea } from "@/components/input";
import Layout from "@/components/layout";
import Button from "@/components/button";
import Table from "@/components/table";
import Swal from "@/utils/swal";
import { getPosts } from "@/utils/api/posts/api";

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");
  const [titlePost, setTitlePost] = useState("");
  const [bodyPost, setBodyPost] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // GET -> (url/endpoint, config)
    setIsReady(false);
    // -----===== CARA 1 =====-----
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const { data } = response;
        setPosts(data);
      })
      .catch((error) =>
        Swal.fire({
          title: "Failed",
          text: error.toString(),
          showCancelButton: false,
        })
      )
      .finally(() => setIsReady(true));

    // -----===== CARA 2 =====-----
    const response = await getPosts();
    console.log(response);
  }

  function isPostOrEdit(event) {
    if (isEdit) {
      handleEditPost(event);
    } else {
      handleSubmitPost(event);
    }
  }

  function handleSubmitPost(event) {
    // POST -> (url/endpoint, body, config)
    event.preventDefault();
    const body = {
      title: titlePost,
      body: bodyPost,
      userId: 1,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", body)
      .then((response) => {
        setTitlePost("");
        setBodyPost("");
        Swal.fire({
          title: "Success",
          text: "Berhasil menambahkan data",
          showCancelButton: false,
        });
      })
      .catch((error) =>
        Swal.fire({
          title: "Failed",
          text: error.toString(),
          showCancelButton: false,
        })
      );
  }

  function handleEditPost(event) {
    // PUT -> (url/endpoint, body, config)
    event.preventDefault();
    const body = {
      title: titlePost,
      body: bodyPost,
      userId: 1,
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${selectedPost}`, body)
      .then((response) => {
        setSelectedPost("");
        setTitlePost("");
        setBodyPost("");
        setIsEdit(false);
        Swal.fire({
          title: "Success",
          text: "Berhasil menambahkan data",
          showCancelButton: false,
        });
      })
      .catch((error) =>
        Swal.fire({
          title: "Failed",
          text: error.toString(),
          showCancelButton: false,
        })
      );
  }

  function handleDeletePost(id) {
    // DELETE -> (url/endpoint, config)
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Berhasil menghapus post",
          showCancelButton: false,
        });
      })
      .catch((error) =>
        Swal.fire({
          title: "Failed",
          text: error.toString(),
          showCancelButton: false,
        })
      );
  }

  return (
    <Layout>
      <form onSubmit={isPostOrEdit}>
        <Input
          label="Title"
          type="text"
          value={titlePost}
          onChange={(event) => setTitlePost(event.target.value)}
        />
        <TextArea
          label="Body"
          type="text"
          value={bodyPost}
          onChange={(event) => setBodyPost(event.target.value)}
        />
        <Button label="Submit" type="submit" />
      </form>
      <Table
        headers={["No", "Title", "Body"]}
        datas={posts}
        isReady={isReady}
        onEditClick={(data) => {
          setIsEdit(true);
          setTitlePost(data.title);
          setBodyPost(data.body);
          setSelectedPost(data.id);
        }}
        onDeleteClick={(data) =>
          Swal.fire({
            title: "Peringatan",
            text: `Apakah anda yakin untuk menghapus postingan dengan judul ${data.title}?`,
          }).then((result) => {
            if (result.isConfirmed) {
              handleDeletePost(data.id);
            }
          })
        }
      />
    </Layout>
  );
}
