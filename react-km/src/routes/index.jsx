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
import DetailProduct from "@/pages/products/detail";
import DataFetch from "@/pages/posts";
import DetailDataFetch from "@/pages/posts/detail";
import { setAxiosConfig } from "@/utils/api/axiosWithConfig";
import { useToken } from "@/utils/states/contexts/token-context";

export default function Router() {
  const { token, theme } = useSelector((state) => state.data);
  // TODO: change this when authentication learned
  // const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", "https://jsonplaceholder.typicode.com");
  }, [token]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
      element: token ? <CreateProduct /> : <Navigate to="/login" />, // <~ protected route
    },
    {
      path: "/products/:id",
      element: token ? <DetailProduct /> : <Navigate to="/login" />, // <~ protected route
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
