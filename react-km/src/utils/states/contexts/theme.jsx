import {
  createContext,
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

const contextValue = {
  theme: "",
  changeTheme: () => {},
};

const ThemeContext = createContext(contextValue);

function ThemeProvider({ children }) {
  const initialValue = localStorage.getItem("theme") ?? "light";
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }, [theme]);

  const themeContextValue = useMemo(() => ({ theme, changeTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const tokenContext = useContext(ThemeContext);

  if (tokenContext === undefined) {
    console.log("ERROR, useTheme must be used within TokenContext");
  }

  return tokenContext;
}

export { ThemeProvider, useTheme };
