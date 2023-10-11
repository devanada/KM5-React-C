import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white overflow-auto">
      <Navbar />
      <div className="w-full h-full py-4 px-8 flex flex-col">{children}</div>
    </div>
  );
}
