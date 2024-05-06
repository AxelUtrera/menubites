import {Text} from "@chakra-ui/react";
import './Footer.css'
import instagramIcon from '../assets/img/InstagramIcon.svg'
import facebookIcon from '../assets/img/FacebookIcon.svg'
import twitterIcon from '../assets/img/TwitterIcon.svg'


const Footer = () => {
    return (
        <div id="footer-container">
            <Text id='follow-us-text' fontFamily='noto sans' fontSize='18'>
                Follow us on social media
            </Text>
            <div id='last-container'>
                <MediaIconsContainer/>
                <Text id='footer-copy' fontFamily='ubuntu, sans-serif'>
                    © 2024 MenuBites. All Rights Reserved.
                </Text>
            </div>
        </div>
    );
}




const MediaIconsContainer = () => {
    return (
        <div id='media-icons-container'>
            <MediaIcon linkIcon={instagramIcon} altIcon='Instagram icon' linkTo='https://www.instagram.com'></MediaIcon>
            <MediaIcon linkIcon={facebookIcon} altIcon='Facebook icon' linkTo='https://www.facebook.com'></MediaIcon>
            <MediaIcon linkIcon={twitterIcon} altIcon='Twitter icon' linkTo='https://www.x.com'></MediaIcon>
        </div>
    );
}


const MediaIcon = ({linkIcon, altIcon, linkTo}) => {
    return (
        <a href={linkTo}>
            <img className='social-media-icon' src={linkIcon} alt={altIcon} target='_blank' rel="noopener noreferrer"/>
        </a>
    );
}


export default Footer