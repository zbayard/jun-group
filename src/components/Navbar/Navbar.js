import './Navbar.css';
import logo from './taco-bell-logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Navbar = ()=>{
    return(
        <header className='navbar'>
            <nav className='navbar-nav'>
                <div></div>
                <div className='nav-logo'>
                    <img src={logo} alt='Taco Bell'></img>
                </div>
                
                <div className='spacer'/>
                
                <div className='nav-items'>
                    <ul>
                        <li>
                            <a href='https://www.instagram.com/tacobell/' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faInstagram} size='2x'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/tacobell' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faTwitter} size='2x'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/user/tacobell' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faYoutube} size='2x'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
    );
};
export default Navbar;