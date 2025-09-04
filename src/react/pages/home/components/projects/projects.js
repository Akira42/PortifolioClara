import React, { useState } from 'react';
import card1 from '../../../../../assets/images/consciencia-agape.png';
import card2 from '../../../../../assets/images/design-produtos.png';
import card3 from '../../../../../assets/images/marketing.png';

import card1mob from '../../../../../assets/images/consciencia-agape-mob.png';
import card2mob from '../../../../../assets/images/design-produtos-mob.png';
import card3mob from '../../../../../assets/images/marketing-mob.png';
import Modal from '../../../../pages/home/components/modal/modal';

import './projects.scss';

function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState("");

    const toggleModal = (project) => {
        setShowModal(true)

        setProject(project)
    }

    return (
        <>
            {showModal && project !== null && project !== "" && (
                <Modal project={project} onClose={() => setShowModal(false)} />
            )}

            <div className="projects">
                <div className="projects-title mainTitles">
                    <h2>Trabalhos</h2>
                </div>

                <div className="projects-container">
                    <div className="projects-cardsContainer container">
                        <div className="projects-cards">
                            <div className="projects-cardItem projects-card1">
                                <a className="projects-cardItemAction" onClick={() => toggleModal(0)}>
                                    <img className="projects-cardItemImgDesk" src={card1} alt="Criação de logos" />
                                    <img className="projects-cardItemImgMob" src={card1mob} alt="Criação de logos" />

                                    <h3>Criação de logos</h3>
                                </a>
                            </div>

                            <div className="projects-cardItem projects-card2">
                                <a className="projects-cardItemAction" onClick={() => toggleModal(1)}>
                                    <img className="projects-cardItemImgDesk" src={card2} alt="Design de produtos" />
                                    <img className="projects-cardItemImgMob" src={card2mob} alt="Design de produtos" />

                                    <h3>Design de produtos</h3>
                                </a>
                            </div>

                            <div className="projects-cardItem projects-card3">
                                <a className="projects-cardItemAction" onClick={() => toggleModal(2)}>
                                    <img className="projects-cardItemImgDesk" src={card3} alt="Marketing" />
                                    <img className="projects-cardItemImgMob" src={card3mob} alt="Marketing" />

                                    <h3>Marketing</h3>
                                </a>
                            </div>
                        </div>

                        <a className="projects-cta" target="_blank" href="https://www.figma.com/design/uQuR5hG54IYsXFzVlFnChy/Portif%C3%B3lio?node-id=2-2&t=9Nwl80EqIinTOlSG-0" rel="nofollow">Portifólio Figma</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
