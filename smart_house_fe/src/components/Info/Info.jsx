import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const Info = (props) => {

    const temp = document.querySelector("#temp");
    const hum = document.querySelector("#hum");

    const intereval = setInterval(()=>{
        temp.style.background = rgba()
    })

    return(
        <>
            <section id="info">
                <h1 id="info-link">House Info</h1>
                <ul id="house-data">
                    <li id="temp" className="info-cell room-style"><p>{props.temp} C°</p></li>
                    <li id="hum" className="info-cell room-style"><p>{props.hum} %</p></li>
                </ul>
            </section>
        </>
    );
};

export default Info;