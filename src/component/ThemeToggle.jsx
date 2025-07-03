// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === "dark") {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <button onClick={toggleTheme}>
//       Toggle to {theme === "light" ? "Dark" : "Light"} Mode
//     </button>
//   );
// };

// export default ThemeToggle;
