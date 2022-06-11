const http = require("http");
const SerialPort = require("serialport");
const Gpio = require("onoff").Gpio;
const cors = require("cors");
const crypto = require("crypto");
const mysql = require("mysql");
const express = require("express");

const myPin = new Gpio(21,"out");
const alarmPin = new Gpio(20,"out");

const app = express();

app.use(express.static((__dirname + 'public')));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    connectionLimit: 10,
    user: "remote",
    host: "192.168.0.69",
    port: 3306,
    password: "admin",
    database: "smart_house"
})

db.connect((err) => {
    if (err) console.log("error",err) ;
    console.log("Connected!");
  });


const parser = new SerialPort.parsers.Readline({delimiter:"\r\n"});

port = new SerialPort('/dev/ttyACM0',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});


port.pipe(parser);




let server = http.createServer(app);

app.get("/",(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("Server is running");
});

app.post("/check-email",(req,res)=>{
    const email = req.body.email;

    
    db.query("SELECT email FROM users WHERE email = ?;",[email],(err,response)=>{
        if(err) return
        if(response.length===0){
            res.send("check");
        }
        else{
            res.send("exist");
        }
    })
});

app.post("/create-user",(req,res)=>{
    const email = req.body.email;
    const psw = req.body.psw;

    const hash = crypto.createHash('md5').update(psw).digest("hex");

            db.query("INSERT INTO users(email,psw) VALUES(?,?);",[email,hash],(err,response)=>{
                if(err){
                    console.log(err)
                    return;
                }               
            })

            res.send("success");
});

app.post("/log",(req,res)=>{
    console.log("endpoint")
    const email = req.body.email;
    const psw = req.body.psw;
    const hash = crypto.createHash("md5").update(psw).digest(hex);

    db.query("SELECT * FROM users WHERE email = ? AND psw = ?;",[email,hash],(err,response)=>{
        if(err){
            console.log(err);
            return;
        }
        if(response){
            console.log("log")
            res.send("");
        }
        else{
            console.log("wrong");
            res.send("Wrong username or password");
        }
    })
});


const { Server } = require("socket.io");
let io = new Server(server,{
            cors: {
              origin: "http://192.168.0.69:3000",
              methods: ["GET","POST"]
            }
        });


io.on("connection",(socket)=>{

    console.log("new connection");

    socket.emit("server",{});

    socket.on("turnOn",(data)=>{

        console.log(data);
        myPin.writeSync(1);
        port.write(data.pin);
    });

    socket.on("turnOff",(data)=>{

        console.log(data);
        myPin.writeSync(0);
        port.write(data.pin);
    });

        socket.on("alarm",(data)=>{
        console.log(data);
        alarmPin.writeSync(data.status? 1 : 0);
    });

    socket.on("disconnect",()=>{
        console.log("client disconnection");
    });



})

parser.on("data",(data)=>{
    io.emit("tempHum",{data});
})



server.listen(3001);