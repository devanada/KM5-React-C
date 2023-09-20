import { useEffect, useState } from "react";
import axios from "axios";

import { LoadingSkeleton } from "../components/loading";
import { Input, TextArea } from "../components/input"; // named import
import Layout from "../components/layout";
// import Input from "../components/input"; import default

import { useTitle, useFetchGet } from "../utils/hooks/customHooks";

export default function Index() {
  // const [state, updater] = useState(default value)
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [datas, setDatas] = useState([]);
  const [welcomeWords] = useState("WELCOME!");
  const [data] = useFetchGet("https://jsonplaceholder.typicode.com/posts");
  useTitle("Homepage");

  useEffect(() => {
    fetchData2();
  }, []);

  useEffect(() => {
    // console.log("TEST", isLoading);
  }, [isLoading]);

  function fetchData() {
    setIsLoading(true);
    setIsLoading2(true);
    setIsLoading3(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((response) => setDatas(response))
      .catch((error) => alert(error.toString()))
      .finally(() => {
        setIsLoading(false);
        setIsLoading2(false);
        setIsLoading3(false);
      });
  }

  function fetchData2() {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setDatas(response.data))
      .catch((error) => alert(error.toString()))
      .finally(() => setIsLoading(false));
  }

  // console.log(data);
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {isLoading
        ? [...Array(10).keys()].map((data) => <LoadingSkeleton key={data} />)
        : datas.map((data) => (
            <div key={data.id} className="border-b mb-3 pb-3">
              <h2 className="font-bold text-xl">{data.title}</h2>
              <p>{data.body}</p>
            </div>
          ))}
    </Layout>
  );
}
