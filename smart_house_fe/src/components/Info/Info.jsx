import "./Info.css";
import { useEffect } from "react";

const Info = (props) => {

    const temp = document.querySelector("#temp");
    const hum = document.querySelector("#hum");


    // useEffect(() => {
    //     temp.style.background = `rgba(0, 122, 204,${props.temp/100})`;             
    // },[]);

    // useEffect(() => {
    //     hum.style.background = `rgba(0, 122, 204,${props.hum/100})`;
    // },[props.hum]);

    

    return(
        <>
            <section id="info">
                <h1 id="info-link">House Info</h1>
                <ul id="house-data">
                    <li id="temp"  className="info-cell room-style"><p>{props.temp} C°</p></li>
                    <li id="hum" className="info-cell room-style"><p>{props.hum} %</p></li>
                </ul>
            </section>
        </>
    );
};

export default Info;