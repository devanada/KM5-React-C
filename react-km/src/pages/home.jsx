import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import Layout from "../components/layout";
import Button from "../components/button";
import { Input, TextArea } from "../components/input"; // named import
// import Input from "../components/input"; import default
import { LoadingSkeleton } from "../components/loading";

const queryClient = new QueryClient();

function ListData() {
  const { isLoading, data } = useQuery("posts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  return (
    <>
      {isLoading
        ? [...Array(10).keys()].map((data) => <LoadingSkeleton key={data} />)
        : data.map((post) => (
            <div key={post.id} className="border-b mb-3 pb-3">
              <h2 className="font-bold text-xl">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
    </>
  );
}

export default function Index() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* {isLoading
          ? [...Array(10).keys()].map((data) => <LoadingSkeleton key={data} />)
          : datas.map((data) => (
              <div key={data.id} className="border-b mb-3 pb-3">
                <h2 className="font-bold text-xl">{data.title}</h2>
                <p>{data.body}</p>
              </div>
            ))} */}
        <ListData />
      </QueryClientProvider>
    </Layout>
  );
}
