import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import Index from "@/pages";
import CreateProduct from "@/pages/create-product";
import DataFetch from "@/pages/posts";
import DetailDataFetch from "@/pages/posts/detail";
import { setAxiosConfig } from "../utils/api/axiosWithConfig";

export default function Router() {
  // TODO: change this when authentication learned
  const getToken = true;

  useEffect(() => {
    setAxiosConfig("", "https://jsonplaceholder.typicode.com");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/create-product",
      element: !getToken ? <CreateProduct /> : <Navigate to="/" />, // <~ protected route
    },
    {
      path: "/posts",
      element: <DataFetch />,
    },
    {
      path: "/posts/:id_post", // <~ path param
      element: <DetailDataFetch />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
