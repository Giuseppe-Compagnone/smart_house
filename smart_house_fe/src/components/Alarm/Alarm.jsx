import "./Alarm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";

const Alarm = () => {
  const close = <FontAwesomeIcon icon={faLock} className="lock" />;
  const open = <FontAwesomeIcon icon={faLockOpen} className="lock" />;
  const [condition, setCondition] = useState(false);
  let lock = useRef();



  const handleToggle = (e) => {
    e.target.classList.toggle("active");
    setCondition(lock.current.classList.contains("active"));

  };

  return (
    <>
      <section className="alarm">
        <h1>Alarm</h1>
        <div className="alarm-options">
          <div id="alarm-container" className="room-style">
            <p>alarm {condition ? close : open}</p>
          </div>
          <div
            id="hold"
            className="toggler"
            ref={lock}
            onClick={(e) => {
              handleToggle(e);
            }}
          >
            <i className="trigger" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Alarm;
