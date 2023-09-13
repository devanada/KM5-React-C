import { useState, useEffect } from "react";
import axios from "axios";

import { Input, TextArea } from "@/components/input";
import Layout from "@/components/layout";
import Button from "@/components/button";
import Table from "@/components/table";

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [titlePost, setTitlePost] = useState("");
  const [bodyPost, setBodyPost] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setIsReady(false);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const { data } = response;
        setPosts(data);
      })
      .catch((error) => alert(error.toString()))
      .finally(() => setIsReady(true));
  }

  function handleSubmit(event) {
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
        alert("Berhasil menambahkan data");
      })
      .catch((error) => alert(error.toString()));
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
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
        onEditClick={(data) => console.log(`test ${data.title}`)}
        onDeleteClick={(data) => console.log(`delete ${data.title}`)}
      />
    </Layout>
  );
}
