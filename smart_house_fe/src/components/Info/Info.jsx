import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const Info = () => {

    const close = <FontAwesomeIcon icon={faLock} />;
    const open = <FontAwesomeIcon icon={faLockOpen} />

    return(
        <>
            <section id="info">
                <h1 id="info-link">House Info</h1>
                <ul id="house-data">
                    <li id="temp" className="info-cell room-style"><p>temp</p></li>
                    <li id="hum" className="info-cell room-style"><p>hum</p></li>
                    <li id="alarm" className="info-cell room-style"><p>alarm {1==1?open:close}</p></li>
                </ul>
            </section>
        </>
    );
};

export default Info;