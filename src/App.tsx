import { useEffect, useState } from "react";
import "./App.css";
import jsonData from "./data.json";
import ChatBot from "./components/ChatBot.jsx";
import Login from "./components/Login.jsx";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const [userInfo, setUserInfo] = useState({ name: "", pass: "" });
  // console.log(jsonData);
  useEffect(() => {
    setUserInfo(jsonData);
  }, []);
  console.log("HERE", userInfo);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen">{userInfo?.name ? <ChatBot /> : <Login />}</div>
    </ThemeProvider>
    // <div className="h-screen w-screen p-0 m-0">

    // </div>
  );
}

export default App;
