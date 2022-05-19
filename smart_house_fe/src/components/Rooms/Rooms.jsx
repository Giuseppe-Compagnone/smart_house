import "./Rooms.css";



const Rooms = () =>{
    

    return(
        <>
            <main>
                <h1 id="house-link">My House</h1>
                <div id="house" className="room-style">
                    <div id="rooms">
                        <div id="garage" className="room-style room" onClick={(e)=>{e.target.classList.toggle("active")}}>Garage</div>
                        <div id="bedroom" className="room-style room" onClick={(e)=>{e.target.classList.toggle("active")}}>Bedroom</div>
                        <div id="living" className="room-style room" onClick={(e)=>{e.target.classList.toggle("active")}}>Living</div>
                        <div id="bathroom" className="room-style room" onClick={(e)=>{e.target.classList.toggle("active")}}>Bathroom</div>
                        <div id="garden" className="room-style room" onClick={(e)=>{e.target.classList.toggle("active")}}>Garden</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Rooms;