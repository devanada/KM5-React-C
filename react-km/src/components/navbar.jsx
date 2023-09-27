import { useTheme } from "@/utils/states/contexts/theme";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, changeTheme } = useTheme();

  return (
    <nav className="w-full h-12 grid grid-cols-2 content-center px-4 bg-neutral-700 text-white">
      <Link to="/">Home</Link>
      <div className="flex gap-4 items-center justify-end">
        <Link to="/products">Products</Link>
        <Link to="/posts">Posts</Link>
        {theme === "light" ? (
          <FaMoon size={25} onClick={() => changeTheme()} />
        ) : (
          <FaSun size={25} onClick={() => changeTheme()} />
        )}
      </div>
    </nav>
  );
}
