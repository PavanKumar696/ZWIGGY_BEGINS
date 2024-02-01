import { LOGO_URL } from "../utilities/contants";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="nooobda"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
