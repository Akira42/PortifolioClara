import mainBannerBg from '../../../../../assets/images/main-banner-bg.png';
import mainBannerImg from '../../../../../assets/images/main-banner-image.png';
import mainBannerImgMobile from '../../../../../assets/images/mainbanner-mobile.png'
import mainBannerTitle from '../../../../../assets/images/main-banner-bem-vindo.png';

import './mainBanner.scss';

function MainBanner() {
    return (
        <div className="mainBanner">
            <div className="mainBanner-title">
                <img src={mainBannerTitle} alt="Bem Vindo!" />
            </div>

            <div className="mainBanner-content">
                <img src={mainBannerBg} alt="Fundo do banner principal" />

                <div className="mainBanner-floatingContent">
                    <div className="mainBanner-floatingTags">
                        <span className="floatingTag-1 floatingTag">E-commerce</span>
                        <span className="floatingTag-2 floatingTag">UX/UI</span>
                        <span className="floatingTag-3 floatingTag">Coreldraw</span>
                        <span className="floatingTag-4 floatingTag">Photoshop</span>
                        <span className="floatingTag-5 floatingTag">Illustrator</span>
                    </div>

                    <img className="mainBanner-centerElement" src={mainBannerImg} alt="Imagem do banner principal" />
                </div>
            </div>
            <div className="mainBanner-content-mobile">
                <img src={mainBannerImgMobile} alt="Fundo do banner principal" />
            </div>
        </div>
    );
}

export default MainBanner;
