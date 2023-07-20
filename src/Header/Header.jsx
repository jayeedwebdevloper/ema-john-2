import logo from '../assets/Logo.png';
const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href='/home'><img src={logo} alt="ema-john(Community)" /></a>
                </div>
                
                <div className="menu">
                    <button className="toggle" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </button>
                    <ul className='main-menu' id='menu-items'>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/review">Order Review</a></li>
                        <li><a href="/manage">Manage Inventory</a></li>
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

export default Header;