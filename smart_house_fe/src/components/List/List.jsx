import "./List.css";
import Axios from "axios";
import { useState, useEffect } from "react";

const List = (props) => {
  const init = {
    day: "-",
    hh: "-",
    mm: "-",
    ss: "-",
  };

  const [date, setDate] = useState([init, init, init]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    Axios.post(`http://${props.ip}:3001/alarm`, { key: "value" }).then(
      (res) => {
        const data = res.data.data;
        if (data.length < 3) {
          const empty = 3 - data.length;
          for (let i = 0; i < empty; i++) {
            data.push(init);
          }
        }

        setDate(data);
      }
    );
  }, [trigger]);

  let check = null;

  if (props.alarm) {
    check = setInterval(() => {
      setTrigger(!trigger);
    }, 200);
  } else {
    if (check !== null) {
      clearInterval(check);
    }
  }

  return (
    <>
      <section id="alarm-list">
        <ul>
          <li>
            <p>Date</p>
            <span></span>
            <p>Time</p>
          </li>
          <li>
            <p>{date[0].day}</p>
            <span></span>
            <p>{`${date[0].hh} : ${date[0].mm} : ${date[0].ss}`}</p>
          </li>
          <li>
            <p>{date[1].day}</p>
            <span></span>
            <p>{`${date[1].hh} : ${date[1].mm} : ${date[1].ss}`}</p>
          </li>
          <li>
            <p>{date[2].day}</p>
            <span></span>
            <p>{`${date[2].hh} : ${date[2].mm} : ${date[2].ss}`}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default List;
