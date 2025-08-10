import fotoClara from '../../../../../assets/images/elara.png';

import './aboutMe.scss';

function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="aboutMe-title">
                <h2>Sobre mim</h2>
            </div>

            <div className="aboutMe-container container">
                <div className="aboutMe-text">
                    <p>
                         Sou uma designer com experiência em Photoshop, Illustrator e CorelDRAW. Com uma carreira construída a partir de uma perspectiva diferente, destaco-me também por conhecimentos em UX/UI, criação de sites, e-commerce e design de bolas de futebol. Uma combinação diferente que une funcionalidade, estética e inovação.
                    </p>

                    <p>
                         Iniciei minha trajetória na programação, mas me encontrei na arte e ao longo do tempo busquei expandir minhas habilidades para áreas mais especializadas do design. Fluente em inglês e com um ano de vivência em Portugal, trago uma perspectiva enriquecida por experiências multiculturais.
                    </p>

                    <p>
                         Ao longo de minha carreira, me envolvi em projetos que vão desde identidades visuais até experiências digitais, sempre com foco na integração entre arte e propósito. 
                    </p>

                    <p>
                         Meu portfólio tem forte influência nos anos 2000 e a moda 2YK, refletindo minha criatividade e domínio técnico.
                    </p>
                </div>

                <div className="aboutMe-image">
                    <img src={fotoClara} alt="Clara Guerreiro" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
