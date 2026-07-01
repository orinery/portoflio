import { useEffect } from "react";

const DarkModeProvider = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    document.body.classList.toggle("dark", mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      document.body.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return null;
};

export default DarkModeProvider;
