import "./Rooms.css";

const Rooms = () =>{
    return(
        <>
            <main id="houseLink">
                <div id="house" className="room">
                    <div id="rooms">
                        <div id="garage" className="room">Garage</div>
                        <div id="bedroom" className="room">Bedroom</div>
                        <div id="living" className="room">Living</div>
                        <div id="bathroom" className="room">Bathroom</div>
                        <div id="garden" className="room">Garden</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Rooms;