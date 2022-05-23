import "./Alarm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock ,faLockOpen} from "@fortawesome/free-solid-svg-icons";

const Alarm = () => {

    const close = <FontAwesomeIcon icon={faLock} />;
    const open = <FontAwesomeIcon icon={faLockOpen} />

    // let lock = document.querySelector(".toggler");

    // console.log(lock);

    // const condition = lock.classList.contains("active"); 


    const handleToggle = (e) =>{
        e.target.classList.toggle("active");
    }

    return(
        <>
            <section className="alarm">
                <h1>Alarm</h1>
                <div className="alarm-options">
                    <div id="alarm-container" className="room-style"><p>alarm {}</p></div>
                    <div id="hold" className="toggler" onClick={(e)=>{handleToggle(e)}}>
                        <i className="trigger" ></i>
                    </div>                    
                </div>
            </section>
        </>
    );
};

export default Alarm;