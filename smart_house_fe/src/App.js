import Alarm from "./components/Alarm/Alarm";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import { useEffect,useState } from "react";

import io from "socket.io-client";

function App() {

  useEffect(() => {
    const socket = io.connect("http://127.0.0.1:3001");
    socket.on("server",()=>{
      console.log("connected to server succesfully");
    })
  },[]); 

  return (
    <>
      <div id="app" className="container">
        <Navbar />
        <Rooms />
        <Info />
        <Alarm />
        <Footer />
      </div>
    </>
  );
}

export default App;
