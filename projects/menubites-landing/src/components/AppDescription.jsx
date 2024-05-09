import {Text} from '@chakra-ui/react';
import './AppDescription.css';
import ingredientsImage from '../assets/img/IngredientsImage.png';
import dishesImage from '../assets/img/DishesImage.png';
import iconsImage from '../assets/img/IconsImage.png';
import earthImage from '../assets/img/EarthImage.png';


const AppDescription = () => {
    return (
        <div id="app-description">
            <Section
                title="Get an endless variety of recipes"
                description="With our AI-based technology, you can
                easily access your favorite recipes tailored to your
                unique taste preferences and dietary needs."
                url={dishesImage}
                alt="Dishes image"
            />
            <Section
                title="Stay Updated with Daily Recipe Inspiration"
                description="Subscribe to our newsletter and receive a daily dose
                of customized recipes based on your taste preferences. Never run out
                of culinary ideas with our AI-powered service."
                url={iconsImage}
                alt="Icons image"
            />
            <Section
                title="Cook Smart with What You Have"
                description="Generate delicious recipes using ingredients already in your kitchen.
                Our app helps you cook creatively without the need to invest in ingredients you
                already own!"
                url={ingredientsImage}
                alt="Ingredients image"
            />
            <Section
                title="Discover Local Delights Effortlessly"
                description="Unlock recipes tailored to your location and easily
                access all the ingredients you need. Say goodbye to complex ingredient
                searches and enjoy hassle-free cooking!"
                url={earthImage}
                alt="Earth image"
            />
        </div>
    );
}

const Section = ({title, description, url, alt}) => {
    return (
        <section className="section-container">
            <SectionText
                title={title}
                description={description}/>
            <SectionImage url={url} alt={alt}/>
        </section>
    );
}

const SectionImage = ({url, alt}) => {
    return (
      <div className="section-image-container">
          <img src={url} alt={alt} className="image-section"/>
      </div>
    );
}

const SectionText = ({title, description}) => {
    return (
        <div className="section-text-container">
            <Text className="title-section">
                {title}
            </Text>
            <Text className="description-section">
                {description}
            </Text>
        </div>
    );
}

export default AppDescription;