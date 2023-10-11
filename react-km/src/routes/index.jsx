import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import Index from "@/pages";
import Login from "@/pages/auth/login";
import CreateProductNew from "@/pages/products";
import DetailProduct from "@/pages/products/detail";
import DataFetch from "@/pages/posts";
import DetailDataFetch from "@/pages/posts/detail";
import AIPage from "@/pages/openai";
import { setAxiosConfig } from "@/utils/api/axiosWithConfig";
import { useToken } from "@/utils/states/contexts/token-context";

export default function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", "https://651516e3dc3282a6a3cdd60a.mockapi.io/api/v1");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/login",
      element: token === "" ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/products",
      element: token === "" ? <Navigate to="/login" /> : <CreateProductNew />,
    },
    {
      path: "/products/:id",
      element: token === "" ? <Navigate to="/login" /> : <DetailProduct />,
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
      path: "/openai",
      element: <AIPage />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
