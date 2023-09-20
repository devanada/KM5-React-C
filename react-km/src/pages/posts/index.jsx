import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";

import { Input, TextArea } from "@/components/input";
import Layout from "@/components/layout";
import Button from "@/components/button";
import Table from "@/components/table";
import Swal from "@/utils/swal";
import { getPosts } from "@/utils/api/posts/api";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(10, { message: "Min length of body is 10 characters" }),
});

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

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
    // const response = await getPosts();
    // console.log(response);
  }

  function isPostOrEdit(data) {
    if (isEdit) {
      handleEditPost(data);
    } else {
      handleSubmitPost(data);
    }
  }

  function handleSubmitPost(data) {
    // POST -> (url/endpoint, body, config)
    const body = {
      ...data,
      userId: 1,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", body)
      .then((response) => {
        reset();
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

  function handleEditPost(data) {
    // PUT -> (url/endpoint, body, config)
    const body = {
      ...data,
      userId: 1,
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${selectedPost}`, body)
      .then((response) => {
        setSelectedPost("");
        reset();
        setIsEdit(false);
        Swal.fire({
          title: "Success",
          text: "Berhasil merubah data",
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
      <form onSubmit={handleSubmit(isPostOrEdit)}>
        <Input
          register={register}
          name="title"
          label="Title"
          type="text"
          error={errors.title?.message}
        />
        <TextArea
          register={register}
          name="body"
          label="Body"
          type="text"
          error={errors.body?.message}
        />
        <Button label="Submit" type="submit" />
      </form>
      <Table
        headers={["No", "Title", "Body"]}
        datas={posts}
        isReady={isReady}
        onEditClick={(data) => {
          setIsEdit(true);
          setValue("title", data.title);
          setValue("body", data.body);
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
