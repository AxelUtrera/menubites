import {Text} from "@chakra-ui/react";
import cockingGift from '../assets/Cooking.gif'
import arrowGift from '../assets/Down-arrow.gif'
import '../index.css'
import './Body.css'



const Body = () => {
    return (
        <div id='body-container'>
            <FirstSection/>
            <DownArrow/>
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
    )
}

const DownArrow = () => {
    return (
        <div id='arrow-container'>
            <img id='arrow-gift' src={arrowGift} alt='gift down arrow'/>
        </div>
    );
}




export default Body;