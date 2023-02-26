import { FaRedditAlien } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import {SearchButton} from "./SearchButton";

const NavBar= ()=> {

    return (
        <>
          <nav className='nav-bar'>
            <Link to='./' className='navbar-logo'>
              <FaRedditAlien/>
              Refinance
            </Link>
            <SearchButton/>
           
          </nav>
          
        </>
    );
}

export default NavBar;