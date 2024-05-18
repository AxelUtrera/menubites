import {Text} from "@chakra-ui/react";
import '../index.css'
import './Body.css'
import cockingGift from '../assets/Cooking.gif'
import arrowGift from '../assets/Down-arrow.gif'
import functionalImage from '../assets/img/Functional.svg'
import easyImage from '../assets/img/Easy.svg'
import fastImage from '../assets/img/Fast.svg'
import { useTranslation } from "react-i18next";


const Body = () => {
    const { t } = useTranslation();
    return (
        <div id='body-container'>
            <FirstSection/>
            <DownArrow/>
            <SecondSection/>
        </div>
    );
}

const FirstSection = () => {
    const {t} = useTranslation()
    return (
        <div id="home">
            <div id='container-paragraph'>
                <Text id='menubites-principal-logo' fontFamily='Lobster' fontSize='50px'>
                    MenuBites
                </Text>
                <h1 id='slogan' fontFamily='Ubuntu' fontSize='32px'>
                    {t("body_slogan")}
                </h1>
                <Text id='slogan-description' fontFamily='Noto sans' fontSize='22px'>
                    {t("body_slogan_description")}
               </Text>
                <JoinNowBodyButton/>
            </div>
            <div id='gift-container'>
                <img id='cocking-gift' src={cockingGift} alt='Coocking gift' title="Woman coocking"/>
            </div>
        </div>
    );
}


const JoinNowBodyButton =() => {
    const {t} = useTranslation()
    return (
        <div className="body-button">
            <button id="button-join-now" onClick={() => navigateToSection('call-to-action-container')}
                    style={{
                background: 'var(--color-gradient)',
                color: 'var(--color-white)',
            }}
            >
                {t("body_join_waitlist")}
            </button>
        </div>
    );
}

const DownArrow = () => {
    return (
        <div id='arrow-container'>
            <img id='arrow-gift' src={arrowGift} alt='gift down arrow' title="arrow to navigate down"/>
        </div>
    );
}

const SecondSection = () => {
    const {t} = useTranslation()
    return (
        <div id="second-section-container">
            <InfoCard title={t("body_info_card_1_title")} description={t("body_info_card_1_description")}  urlImage={functionalImage}/>
            <InfoCard title={t("body_info_card_2_title")} description={t("body_info_card_2_description")}  urlImage={easyImage}/>
            <InfoCard title={t("body_info_card_3_title")} description={t("body_info_card_3_description")}  urlImage={fastImage}/>
        </div>
    );
}

const InfoCard = ({description, title, urlImage}) => {
    return (
        <div className='info-card-container'>
            <div className='card-background'>
                <img className='card-image' src={urlImage} alt='card image'/>
                <Text className='card-title' fontFamily='Noto sans, sans serif'>
                    {title}
                </Text>
                <Text className='card-description' fontFamily='Noto sans, sans serif'>
                    {description}
                </Text>
            </div>
        </div>
    );
}

export const navigateToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}

export default Body;