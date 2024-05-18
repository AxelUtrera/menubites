import { Text } from "@chakra-ui/react";
import './Footer.css'
import instagramIcon from '../assets/img/InstagramIcon.svg'
import facebookIcon from '../assets/img/FacebookIcon.svg'
import twitterIcon from '../assets/img/TwitterIcon.svg'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div id="contact-us">
            <Text id='follow-us-text' fontFamily='noto sans' fontSize='18'>
                {t("footer_follow_us")}
            </Text>
            <div id='last-container'>
                <MediaIconsContainer />
                <Text id='footer-copy' fontFamily='ubuntu, sans-serif'>
                    {t("footer_copyright")}
                </Text>
            </div>
        </div>
    );
}




const MediaIconsContainer = () => {
    return (
        <div id='media-icons-container'>
            <MediaIcon linkIcon={instagramIcon} altIcon='Instagram icon' linkTo='https://www.instagram.com/menubites.app/'></MediaIcon>
            <MediaIcon linkIcon={facebookIcon} altIcon='Facebook icon' linkTo='https://www.facebook.com/profile.php?id=61559733816179'></MediaIcon>
        </div>
    );
}


const MediaIcon = ({ linkIcon, altIcon, linkTo }) => {
    return (
        <a href={linkTo}>
            <img className='social-media-icon' src={linkIcon} alt={altIcon} target='_blank' rel="noopener noreferrer" />
        </a>
    );
}


export default Footer