import logo from '../../assets/logo.svg';

function Header() {
    return (
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Trabalhos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
