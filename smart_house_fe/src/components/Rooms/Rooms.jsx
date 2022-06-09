import "./Rooms.css";



const Rooms = (props) =>{
    
    let rooms = document.querySelectorAll(".room");

    const handleClick = (e) =>{
        if(!e.target.classList.contains("active")){
            console.log("on",e.target.dataset.pin);
            e.target.classList.add("active");
            props.socket.emit("turnOn",{
                pin : e.target.dataset.pin,
                status : 1
            })
        }
        else{
            console.log("off",e.target.dataset.pin);
            e.target.classList.remove("active");
            props.socket.emit("turnOff",{
                pin : e.target.dataset.pin,
                status : 0
            })
        }
    }

    return(
        <>
            <main>
                <h1 id="house-link">My House</h1>
                <div id="house" className="room-style">
                    <div id="rooms">
                        <div id="garage" className="room-style room" data-pin="7" onClick={(e)=>{handleClick(e)}}>Garage</div> 
                        <div id="bedroom" className="room-style room" data-pin="4" onClick={(e)=>{handleClick(e)}}>Bedroom</div>
                        <div id="kitchen" className="room-style room" data-pin="3" onClick={(e)=>{handleClick(e)}}>Kitchen</div>
                        <div id="living" className="room-style room" data-pin="5" onClick={(e)=>{handleClick(e)}}>Living</div>
                        <div id="bathroom" className="room-style room" data-pin="6" onClick={(e)=>{handleClick(e)}}>Bathroom</div>
                        <div id="garden" className="room-style room" data-pin="8" onClick={(e)=>{handleClick(e)}}>Garden</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Rooms;