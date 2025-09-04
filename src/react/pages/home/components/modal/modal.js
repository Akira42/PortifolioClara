import React, { useEffect, useState } from "react";
import './modal.scss';
import instagramIcon from '../../../../../assets/images/skill-icons_instagram.png';

import project1img1 from '../../../../../assets/images/agapeimg3.png';
import project1img2 from '../../../../../assets/images/agapeimg1.png';
import project1img3 from '../../../../../assets/images/agapeimg2.png';

import project2img1 from '../../../../../assets/images/designprods1.png';
import project2img2 from '../../../../../assets/images/designprods2.png';
import project2img3 from '../../../../../assets/images/designprods3.png';

import project3img1 from '../../../../../assets/images/marketing1.png';
import project3img2 from '../../../../../assets/images/marketing2.png';
import project3img3 from '../../../../../assets/images/marketing3.png';

function Modal({ project, onClose }) {
    const projectsData = [
        {
            "img1": `${project1img1}`,
            "img2": `${project1img2}`,
            "img3": `${project1img3}`,
            "title": "CRIAÇÃO DE LOGOS",
            "subtitle": "CONSCIÊNCIA ÁGAPE",
            "text": `
                        <p>Desenvolvi este logo no Photoshop para uma loja de tarot, transmitindo espiritualidade, conexão e aconchego.</p>

                        <p>A fonte Velvetique, caligráfica e orgânica, confere autenticidade e sabedoria. As palavras "Consciência" e "Ágape" dispostas em arcos simbolizam a completude, o ciclo da vida, a troca energética e a união entre mente e coração.</p>

                        <p>O elemento principal são mãos em dinâmica de receber e oferecer, representando troca e cura. O trevo de quatro folhas, híbrido com o símbolo do infinito e corações nas pontas, simboliza sorte, harmonia e o infinito do universo, reforçando que consciência e amor são pilares do autoconhecimento, e as estrelas adicionam toque místico.</p>
                        
                        <p>A paleta de cores em gradiente suave, do azul-claro/verde-água ao rosa/roxo claro, evoca serenidade e aconchego, ressoando com a natureza esotérica e a busca por harmonia interior do tarot.</p>
                    `,
            "socialText": "@consciencia.agape",
            "socialLink": "https://www.instagram.com/consciencia.agape/",
            "socialIcon": `${instagramIcon}`
        },
        {
            "img1": `${project2img1}`,
            "img2": `${project2img2}`,
            "img3": `${project2img3}`,
            "title": "DESIGN DE PRODUTOS",
            "subtitle": "BOLAS MARCA CORNER",
            "text": `
                        <p>As imagens apresentam meu trabalho em design gráfico aplicado a produtos, especificamente bolas de futebol da marca "Corner". Elas destacam minha capacidade de desenvolver a estética visual, integrar a marca e criar identidades distintas para diferentes linhas.</p>

                        <p>Linha Stars - Neon Poster: O poster exibe a bola Stars Society. Seu design incorpora elementos gráficos modernos e vibrantes, com cores neon que complementam a estética do poster, criando um apelo jovem e energético.</p>

                        <p>Bola Campo - Retro: Esta imagem foca no design de uma bola de campo com estética "retro". O padrão quadriculado em tons de azul escuro e verde, combinado com o logotipo "Corner", evoca um estilo clássico com toques modernos, ilustrando a capacidade de trabalhar com diversas influências.</p>
                        
                        <p>Linha Vollux - Design Poster: Apresenta a "Linha Vollux" de bolas de campo. O design geométrico da bola, em cinza e branco, é integrado a um fundo abstrato, formando um "design poster" coeso que realça as características e o posicionamento da linha.</p>

                        <p>Essas peças demonstram minha experiência em conceber e executar designs que não apenas embelezam o produto, mas também comunicam a identidade da marca e o propósito da linha.</p>
                    `
        },
        {
            "img1": `${project3img1}`,
            "img2": `${project3img2}`,
            "img3": `${project3img3}`,
            "title": "MARKETING",
            "subtitle": "CATÁLOGOS DE PRODUTO",
            "text": `
                        <p>As imagens apresentadas são parte de um catálogo de divulgação dos produtos da empresa Corner, especializada em bolas de futebol. Elas demonstram a capacidade de design da marca, desde a concepção e estrutura do produto até a apresentação de linhas de produtos esportivos.</p>

                        <p>A primeira imagem é um infográfico que detalha o processo de fabricação da bola, desde o design e seleção de materiais até a construção, controle de qualidade e distribuição. Destaca também os componentes internos e a adaptabilidade para personalização de logotipo.</p>

                        <p>A segunda imagem exibe a "Linha Arrow", com três variações de bolas de futebol. São fornecidas especificações de peso, código e medidas, direcionadas a diferentes modalidades (campo, society, futsal). O design é caracterizado por padrões gráficos dinâmicos e cores vibrantes.</p>
                        
                        <p>A terceira imagem apresenta a "Linha Stars", também com três modelos de bolas de futebol. Similar à Linha Arrow, são fornecidas especificações de peso e medida, com foco em categorias de idade ("SUB 09", "SUB 11", "SUB 13"). O design incorpora padrões em formato de estrela com influência retrô e combinações de cores atraentes.</p>

                        <p>Selecionei essas páginas do catálogo pois ilustram a habilidade em criar materiais de marketing claros e informativos, com designs de produto visualmente atraentes e diferenciados por linha, apresentando especificações técnicas de forma acessível.</p>
                    `
        }
    ]

    const projectId = parseInt(project, 10);
    const projectData = projectsData[projectId];

    const [active, setActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`modal ${active ? "modalActive" : ""}`} >
            <div className="modalContainer container">

                <div className="modalButton">
                    <button onClick={onClose}>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9933 33.3558C21.9454 31.4059 25.1081 31.4059 27.0603 33.3558L39.3547 45.6362C40.1946 46.4752 41.3337 46.9465 42.5215 46.9465C43.7093 46.9465 44.8484 46.4752 45.6883 45.6362C46.5282 44.7973 47 43.6595 47 42.4731C47 41.2867 46.5282 40.1488 45.6883 39.3099L33.3976 27.0379C31.4416 25.0848 31.4414 21.9151 33.3973 19.9618L45.6853 7.6901C46.101 7.27471 46.4307 6.7816 46.6555 6.23894C46.8804 5.69627 46.9961 5.11468 46.996 4.52736C46.9958 3.94005 46.8799 3.35851 46.6547 2.81595C46.4296 2.27339 46.0997 1.78044 45.6838 1.36525C45.2679 0.950047 44.7743 0.620733 44.231 0.396105C43.6877 0.171476 43.1054 0.0559322 42.5175 0.0560707C41.9295 0.0562091 41.3473 0.172026 40.8041 0.396911C40.2609 0.621795 39.7674 0.951343 39.3517 1.36674L27.0603 13.6465C25.1082 15.5967 21.9452 15.5969 19.9929 13.6468L7.69882 1.36674C7.28603 0.939428 6.79217 0.598515 6.24606 0.36389C5.69995 0.129265 5.11253 0.0056254 4.51807 0.000187536C3.92361 -0.00525033 3.33402 0.107621 2.7837 0.332217C2.23339 0.556812 1.73336 0.888633 1.3128 1.30832C0.892236 1.728 0.559565 2.22715 0.334194 2.77663C0.108824 3.32611 -0.00473245 3.91492 0.000151077 4.50871C0.0050346 5.10249 0.12826 5.68936 0.362637 6.23506C0.597015 6.78077 0.937851 7.27439 1.36526 7.68712L13.6569 19.9625C15.6125 21.9155 15.6127 25.0847 13.6573 27.0379L1.36824 39.3129C0.940837 39.7256 0.600001 40.2192 0.365623 40.7649C0.131246 41.3106 0.0080191 41.8975 0.00313558 42.4913C-0.00174795 43.0851 0.111808 43.6739 0.337179 44.2234C0.562549 44.7729 0.89522 45.272 1.31578 45.6917C1.73634 46.1114 2.23637 46.4432 2.78669 46.6678C3.33701 46.8924 3.9266 47.0052 4.52106 46.9998C5.11551 46.9944 5.70293 46.8707 6.24904 46.6361C6.79515 46.4015 7.28901 46.0606 7.70181 45.6333L19.9933 33.3558Z" fill="black" />
                        </svg>
                    </button>
                </div>


                <div className="modalContent">
                    <div className="modalContentWrapper">


                        <div className="modalContentImages">
                            <div className="modalContentImgItem">
                                <img src={projectData.img1} alt="" />
                            </div>
                            <div className="modalContentImgItem">
                                <img src={projectData.img2} alt="" />
                            </div>
                            <div className="modalContentImgItem">
                                <img src={projectData.img3} alt="" />
                            </div>
                        </div>

                        <div className="modalContentText">
                            <h2>{projectData.title}</h2>

                            <h3>{projectData.subtitle}</h3>

                            <div className="modalTextWrapper">

                                <div dangerouslySetInnerHTML={{ __html: projectData.text }} />

                                {projectData.socialIcon && projectData.socialLink && projectData.socialText &&
                                    <div className="modalContentSocials">
                                        <img src={projectData.socialIcon} alt="" /> <a href={projectData.socialLink} target="_blank" rel="nofollow">{projectData.socialText}</a>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div >

    );
}

export default Modal;

