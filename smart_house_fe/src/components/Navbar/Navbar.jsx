import "./Navbar.css";

const Navbar = () => {
    return(
        <nav>
            <h1 id="title" className="gradient-text">Smart House</h1>
            <i class="fa-solid fa-bars"></i>
            <div id="menu">
                <ul>
                    <li><i class="fa-solid fa-xmark" id="close"></i></li>
                    <li><a href="#">ROOMS</a></li>
                    <span></span>
                    <li><a href="#">INFO</a></li>
                    <span></span>
                    <li><a href="#">ALARM</a></li>
                    <span></span>
                </ul>
                <span></span>
            </div>            
        </nav>
    );
};

export default Navbar;