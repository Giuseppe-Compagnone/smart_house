import Alarm from "./components/Alarm/Alarm";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import { useEffect,useState } from "react";
import io from "socket.io-client";

function App() {

  const [ temp , setTemp ] = useState(0);
  const [ hum , setHum ] = useState(0);

  useEffect(() => {
    const socket = io.connect("http://192.168.0.69:3001");
    socket.on("server",()=>{
      console.log("connected to server succesfully");
    })

    socket.on("tempHum",(data)=>{
      let hold=data.data;
      let tempS = hold.slice(0,2);
      let humS =  hold.slice(2,5);
      if(tempS != temp)setTemp(tempS);
      if(humS != hum)setHum(humS);      
    });
  },[]); 

  let rooms=[
    {
        room:"kitchen",
        pin:"3",
        status:0,
    },
    {
        room:"bedroom",
        pin:"4",
        status:0,
    },
    {
        room:"living",
        pin:"5",
        status:0,
    },
    {
        room:"bathroom",
        pin:"6",
        status:0,
    },
    {
        room:"garage",
        pin:"7",
        status:0,
    },
    {
        room:"garden",
        pin:"8",
        status:0,
    }
  ];

  

  return (
    <>
      <div id="app" className="container">
        <Navbar />
        <Rooms />
        <Info temp={temp} hum={hum} />
        <Alarm />
        <Footer />
      </div>
    </>
  );
}

export default App;
