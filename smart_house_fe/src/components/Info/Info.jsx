import "./Info.css";

const Info = () => {
    return(
        <>
            <section id="info">
                <h1 id="info-link">House Info</h1>
                <ul id="house-data">
                    <li id="temp" className="info-cell"></li>
                    <li id="hum" className="info-cell"></li>
                    <li id="alarm" className="info-cell"></li>
                </ul>
            </section>
        </>
    );
};

export default Info;