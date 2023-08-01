import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to='/'><img src={logo} alt="ema-john(Community)" /></Link>
                </div>
                
                <div className="menu">
                    <button className="toggle" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </button>
                    <ul className='main-menu' id='menu-items'>
                        <li onClick={navItem}><Link to="/">Home</Link></li>
                        <li onClick={navItem}><Link to="/shop">Shop</Link></li>
                        <li onClick={navItem}><Link to="/order">Order</Link></li>
                        <li onClick={navItem}><Link to="/review">Order Review</Link></li>
                        <li onClick={navItem}><Link to="/manage">Manage Inventory</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

const toggleMenu =() => {
    let menu = document.getElementById('menu-items');
    let header = document.querySelector('header');
    let navbar = document.querySelector('nav');
    let mainMenu = document.querySelector('.main-menu');
    if (menu.style.display == 'none'){
        menu.style.display = 'block';
        header.classList.add('toggleHeader');
        navbar.classList.add('navToggle');
        mainMenu.classList.add('main-menuToggle');
    } else {
        menu.style.display = 'none'
        header.classList.remove('toggleHeader');
        navbar.classList.remove('navToggle');
        mainMenu.classList.remove('main-menuToggle');
    }
}
const navItem = () => {
    window.scrollTo(0, 0)
}

export default Header;