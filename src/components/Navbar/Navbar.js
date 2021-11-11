import './Navbar.css';


const Navbar = ()=>{
    return(
        <header className='navbar'>
            <nav className='navbar-nav'>
                <div></div>
                <div className='nav-logo'>
                    <img src='' alt='Taco Bell'></img>
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