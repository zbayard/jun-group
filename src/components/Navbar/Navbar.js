import './Navbar.css';
import logo from './taco-bell-logo.svg';


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
                            <a>IG</a>
                        </li>
                        <li>
                            <a>WS</a>
                        </li>
                        <li>
                            <a>OS</a>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
    );
};
export default Navbar;