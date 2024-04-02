import { useState,useEffect} from "react"

export default function useTheme(){
    const[theme,setTheme] = useState(getInitialTheme())
     useEffect(() => {
        const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches ? "dark": "light";
        setTheme(preferredTheme);
      }, []);
    
      const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
      };
    
      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);
      return [theme, toggleTheme];
}

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme)
    return savedTheme ? savedTheme : "light";
  };