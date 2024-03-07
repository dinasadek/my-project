import "./navbar.css"
import {faHome, faHotel} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
          <div>
          <FontAwesomeIcon icon={faHotel} />
        <span className="logo"> Book Me</span>
      </div>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar