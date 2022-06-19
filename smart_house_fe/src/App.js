import Alarm from "./components/Alarm/Alarm";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import Login from "./components/Login/Login";
import SignIn from "./components/SignIn/SignIn";
import List from "./components/List/List";
import { useEffect, useState } from "react";
import io from "socket.io-client";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [account, setAccount] = useState(true);
  const [justSign, setJustSign] = useState(false);
  const [currentUser, setCurrentUser] = useState("admin");
  const [ip, setIp] = useState(null);
  const [ready, setReady] = useState(false);

  const [temp, setTemp] = useState(0);
  const [hum, setHum] = useState(0);
  const [alarm, setAlarm] = useState(false);
  const [ws, setWs] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch("./ip.json");
      const data = await res.json();

      setIp(data.address);

      let socket = {};

      if (Object.keys(ws).length == 0) {
        socket = io.connect(`http://${data.address}:3001`);
        setWs(socket);
      } else {
        socket = ws;
      }

      console.log("main socket:", ws, socket);
      socket.on("server", () => {
        console.log("connected to server successfully");
      });

      socket.on("tempHum", (data) => {
        let hold = data.data;
        let tempS = hold.slice(0, 2);
        let humS = hold.slice(2, 5);
        if (tempS !== temp) setTemp(tempS);
        if (humS !== hum) setHum(humS);
      });

      setReady(true);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const getIp = async () => {
        const res = await fetch("./ip.json");
        const data = await res.json();
        return data.address;
      };

      console.log("socket:", ws);

      let ipAddr = ip ?? (await getIp());

      let socket = {};

      if (Object.keys(ws).length == 0) {
        console.log("Creating new one");
        socket = io.connect(`http://${ipAddr}:3001`);
        setWs(socket);
      } else {
        socket = ws;
      }

      socket.emit("alarm", { status: alarm });
    })();
  }, [alarm]);

  return (
    <>
      {ready &&
        (isLogged ? (
          <div id="app" className="container">
            <Navbar setLog={setIsLogged} />
            <Rooms socket={ws} user={currentUser} />
            <Info temp={temp} hum={hum} />
            <Alarm set={setAlarm} />
            <List ip={ip} alarm={alarm} />
            <Footer />
          </div>
        ) : account ? (
          <Login
            ip={ip}
            socket={ws}
            set={setAccount}
            setLog={setIsLogged}
            just={justSign}
            setCurrent={setCurrentUser}
          />
        ) : (
          <SignIn ip={ip} socket={ws} set={setAccount} setJust={setJustSign} />
        ))}
    </>
  );
}

export default App;
