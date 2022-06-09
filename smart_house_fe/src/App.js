import Alarm from "./components/Alarm/Alarm";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import { useEffect,useState } from "react";
import io from "socket.io-client";

function App() {

  let k = {
    room:"kitchen",
    pin:"3",
    status:0
  };

  const [ temp , setTemp ] = useState(0);
  const [ hum , setHum ] = useState(0);
  const [ alarm , setAlarm ] = useState(false);
  const [ ws , setWs ] = useState({});


  useEffect(() => {
    const socket = io.connect("http://192.168.0.69:3001");
    setWs( socket);
    socket.on("server",()=>{
      console.log("connected to server succesfully");
    });

    socket.on("tempHum",(data)=>{
      let hold=data.data;
      let tempS = hold.slice(0,2);
      let humS =  hold.slice(2,5);
      if(tempS !== temp)setTemp(tempS);
      if(humS !== hum)setHum(humS);      
    });

  },[]);


  useEffect(()=>{
    const socket = io.connect("http://192.168.0.69:3001");
    socket.emit("alarm",{status:alarm})
  },[alarm]);


  return (
    <>
      <div id="app" className="container">
        <Navbar />
        <Rooms socket={ws}/>
        <Info temp={temp} hum={hum} />
        <Alarm  set={setAlarm} />
        <Footer />
      </div>
    </>
  );
}

export default App;
