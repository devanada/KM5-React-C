import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./button";
import { changeTheme } from "@/utils/states/redux/reducers/reducer";

export default function Layout({ children }) {
  const { theme } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  function handleTheme() {
    let currentTheme = theme === "dark" ? "light" : "dark";
    dispatch(changeTheme(currentTheme));
  }

  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <nav className="w-full bg-[#d0d0d0] dark:bg-neutral-800 dark:text-white text-black h-16 flex justify-between px-4">
        <Link
          className="hover:text-white text-lg md:text-2xl lg:text-4xl font-bold"
          to="/"
        >
          Homepage
        </Link>
        <div className="gap-3 flex">
          <Link to="/login">Login</Link>
          <Link to="/products">Create Product</Link>
          <Link to="/posts">Data Fetch</Link>
          <Button label="Theme" onClick={() => handleTheme()} />
        </div>
      </nav>
      <div className="w-full h-full px-3 flex flex-col items-center bg-white dark:bg-neutral-600">
        {children}
      </div>
    </div>
  );
}
