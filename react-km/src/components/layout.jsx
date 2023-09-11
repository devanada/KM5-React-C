import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <nav className="w-full bg-[#d0d0d0] h-16">
        <h1 className="hover:text-white text-lg md:text-2xl lg:text-4xl font-bold">
          TEST
        </h1>
      </nav>
      <div className="w-full h-full px-3 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
