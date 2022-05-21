import "./Alarm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock ,faLockOpen} from "@fortawesome/free-solid-svg-icons";

const Alarm = () => {

    const close = <FontAwesomeIcon icon={faLock} />;
    const open = <FontAwesomeIcon icon={faLockOpen} />

    return(
        <>
            <section className="alarm">
                <h1>Alarm</h1>
                <div className="alarm-options">
                    <p>alarm {1==1?open:close}</p>
                    
                </div>
            </section>
        </>
    );
};

export default Alarm;