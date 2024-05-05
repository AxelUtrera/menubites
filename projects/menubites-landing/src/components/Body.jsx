import {Text} from "@chakra-ui/react";
import '../index.css'
import './Body.css'
import cockingGift from '../assets/Cooking.gif'
import arrowGift from '../assets/Down-arrow.gif'
import functionalImage from '../assets/img/Functional.svg'
import easyImage from '../assets/img/Easy.svg'
import fastImage from '../assets/img/Fast.svg'


const Body = () => {
    return (
        <div id='body-container'>
            <FirstSection/>
            <DownArrow/>
            <SecondSection/>
        </div>
    );
}

const FirstSection = () => {
    return (
        <div id="first-section-container">
            <div id='container-paragraph'>
                <Text id='menubites-principal-logo' fontFamily='Lobster' fontSize='50px'>
                    MenuBites
                </Text>
                <Text id='slogan' fontFamily='Ubuntu' fontSize='32px'>
                    Culinary AI crafts recipes to suit your location and tastes.
                </Text>
                <Text id='slogan-description' fontFamily='Noto sans' fontSize='22px'>
                    Generates personalized recipes by AI, tailored to your ingredients, local produce, or favorite cuisine, ensuring a delightful culinary experience within your budget.
               </Text>
                <JoinNowBodyButton/>
            </div>
            <div id='gift-container'>
                <img id='cocking-gift' src={cockingGift} alt='Coocking gift'/>
            </div>
        </div>
    );
}


const JoinNowBodyButton =() => {
    return (
        <div className="body-button">
            <button id="button-join-now" style={{
                background: 'var(--color-gradient)',
                color: 'var(--color-white)',
            }}>
                Join Waitlist
            </button>
        </div>
    );
}

const DownArrow = () => {
    return (
        <div id='arrow-container'>
            <img id='arrow-gift' src={arrowGift} alt='gift down arrow'/>
        </div>
    );
}

const SecondSection = () => {
    return (
        <div id="second-section-container">
            <InfoCard title='Functional' description='Get personalized recipes tailored to your unique style' urlImage={functionalImage}/>
            <InfoCard title='Easy' description='Enjoy easy cooking with our simple-to-follow recipes' urlImage={easyImage}/>
            <InfoCard title='Fast' description='Find quick recipes for speedy meal solutions' urlImage={fastImage}/>
        </div>
    );
}

const InfoCard = ({description, title, urlImage}) => {
    return (
        <div className='info-card-container'>
            <img className='card-image' src={urlImage} alt='card image'/>
            <Text className='card-title' fontFamily='Noto sans, sans serif' fontSize='18px'>
                {title}
            </Text>
            <Text className='card-description' fontFamily='Noto sans, sans serif' fontSize='16px'>
                {description}
            </Text>
        </div>
    );
}


export default Body;