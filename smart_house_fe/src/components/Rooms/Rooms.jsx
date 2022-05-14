import "./Rooms.css";

const Rooms = () =>{
    return(
        <>
            <main id="houseLink">
                <div id="house" className="room">
                    <div id="rooms">
                        <div id="garage" className="room"></div>
                        <div id="bedroom" className="room"></div>
                        <div id="living" className="room"></div>
                        <div id="bathroom" className="room"></div>
                        <div id="garden" className="room"></div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Rooms;