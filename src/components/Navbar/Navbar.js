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
                            <a>instagram</a>
                        </li>
                        <li>
                            <a>website</a>
                        </li>
                        <li>
                            <a>other social</a>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
    );
};
export default Navbar;