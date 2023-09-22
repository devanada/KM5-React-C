import { Link } from "react-router-dom";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <nav className="w-full bg-[#d0d0d0] h-16 flex justify-between px-4">
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
        </div>
      </nav>
      <div className="w-full h-full px-3 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
