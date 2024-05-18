import {Text} from '@chakra-ui/react';
import './AppDescription.css';
import ingredientsImage from '../assets/img/IngredientsImage.png';
import dishesImage from '../assets/img/DishesImage.png';
import iconsImage from '../assets/img/IconsImage.png';
import earthImage from '../assets/img/EarthImage.png';
import { useTranslation } from "react-i18next";


const AppDescription = () => {
    const { t } = useTranslation();
    return (
        <div id="app-description">
            <Section
                title={t("app_description_1_title")}
                description={t("app_description_1_description")}
                url={dishesImage}
                alt={t("app_description_1_alt")}
                titleImage="Dishes on a table"
            />
            <Section
                title={t("app_description_2_title")}
                description={t("app_description_2_description")}
                url={iconsImage}
                alt={t("app_description_2_alt")}
                titleImage="ingredients for a recipe"
            />
            <Section
                title={t("app_description_3_title")}
                description={t("app_description_3_description")}
                url={ingredientsImage}
                alt={t("app_description_3_alt")}
                titleImage="Icons to inspire coocking"
            />
            <Section
                title={t("app_description_4_title")}
                description={t("app_description_4_description")}
                url={earthImage}
                alt={t("app_description_4_alt")}
                titleImage="Earth where i can coocking something"
            />
        </div>
    );
}

const Section = ({title, description, url, alt, titleImage}) => {
    return (
        <section className="section-container">
            <SectionText
                title={title}
                description={description}/>
            <SectionImage url={url} alt={alt} titleImage={titleImage}/>
        </section>
    );
}

const SectionImage = ({url, alt, titleImage}) => {
    return (
      <div className="section-image-container">
          <img src={url} alt={alt} title={titleImage} className="image-section"/>
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