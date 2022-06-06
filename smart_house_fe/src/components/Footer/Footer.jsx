import "./Footer.css";

const Footer = () =>{
    return(
        <>
            <footer>
                <ul id="footer-content">
                    <li>
                        <h2>ABOUT</h2>
                        <p>This site allows you to control the functions of a home remotely via a remote web server.</p>
                    </li>
                    <li>
                        <h2>TECHNOLOGIES</h2>
                        <ul id="technologies">
                            <li>html</li>
                            <li>scss</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>MySql</li>
                            <li>C</li>
                        </ul>
                    </li>
                    <li>
                        <h2>AUTHOR</h2>
                        <p>Giuseppe Compagnone<br/>VA informatica 2021/2022</p>
                    </li>
                </ul>
                <h4 id="copyright">© 2022 Copyright: smart-house.com</h4>
            </footer>
        </>
    );
}

export default Footer;