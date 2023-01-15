import { FaRedditAlien } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import { navItems } from "../../NavbarItems";
import { SearchButton } from "../../buttons/SearchButton";

const NavBar= ()=> {

    return (
        <>
          <nav className='nav-bar'>
            <Link to='./' className='navbar-logo'>
                <FaRedditAlien/>
                Refinance
            </Link>
            <SearchButton/>
            <ul className='navbar-items'>
            {navItems.map(item=>{

                    return(
                        <li key={item.id}  className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
          </nav>
          
        </>
    );
}

export default NavBar;