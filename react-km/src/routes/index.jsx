import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Index from "@/pages";
import Login from "@/pages/auth/login";
import CreateProduct from "@/pages/products/create-product";
import CreateProductNew from "@/pages/products";
import DetailProduct from "@/pages/products/detail";
import DataFetch from "@/pages/posts";
import DetailDataFetch from "@/pages/posts/detail";
import { setAxiosConfig } from "@/utils/api/axiosWithConfig";
import { useToken } from "@/utils/states/contexts/token-context";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/products",
      element: <CreateProductNew />,
    },
    {
      path: "/products/:id",
      element: <DetailProduct />,
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
