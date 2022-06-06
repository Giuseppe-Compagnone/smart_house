import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

const handleClick = () => {
    const menu = document.querySelector("#list");
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    }
}

const handleClose = () => {
    const menu = document.querySelector("#list");
    if(!menu.classList.contains("hidden")){
        menu.classList.add("hidden");
    }
}

const Navbar = () => {
    return(
        <nav>
            <h1 id="title" className="gradient-text">Smart House</h1>
            <FontAwesomeIcon id="hamburger" icon={faBars} onClick={()=>handleClick()}/>
            <div id="menu">
                <ul id="list" className="hidden">
                    <li id="icon"><FontAwesomeIcon icon={faXmark} id="close" onClick={()=>handleClose()} /></li>
                    <li><a href="#house-link">ROOMS</a></li>
                    <span></span>
                    <li><a href="#info-link">INFO</a></li>
                    <span></span>
                    <li><a href="#alarm-link">ALARM</a></li>
                    <span></span>
                </ul>
                <span></span>
            </div>            
        </nav>
    );
};

export default Navbar;