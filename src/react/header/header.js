import Linkedin from '../../assets/icons/linkedinWhite.svg';
import Behance from '../../assets/icons/behanceWhite.svg';

function Header() {
    return (
        <header className="header-container">
            <div className="header-wrapper">
                <nav className="header-mainMenu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Trabalhos</a></li>
                    </ul>
                </nav>

                <nav className="header-socialLinks">
                    <ul>
                        <li>
                            <a href="https://www.behance.net/claraguerreiro" target="_blank" title="Behance de Clara Guerreiro">
                                <img title="Ícone Behance" alt="Ícone Linkedin" src={Linkedin} />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.behance.net/claraguerreiro" target="_blank" title="Linkedin de Clara Guerreiro">
                                <img title="Ícone Linkedin" alt="Ícone Behance" src={Behance} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
