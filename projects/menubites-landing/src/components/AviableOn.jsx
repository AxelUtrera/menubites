import {Text} from "@chakra-ui/react"
import "./AviableOn.css"
import googlePlayIcon from "../assets/img/PlaystoreIcon.svg"
import appleStoreIcon from "../assets/img/AppleStoreIcon.svg"
import { useTranslation } from "react-i18next";

const AviableOn = () => {
    const { t } = useTranslation();
    return (
        <div id="aviable-on">
            <h2 id="description-aviable-on">
                {t("aviable_on_aviable_soon")}
            </h2>
            <div id="container-cards">
                <PlaceCard name="Google Play" url={googlePlayIcon} alt="Icono de Google play"/>
                <PlaceCard name="App Store" url={appleStoreIcon} alt="Icono de Apple Store"/>
            </div>
        </div>
    );
}

const PlaceCard = ({url, alt, name}) => {
    return (
        <div className="place-container">
            <img className="place-image" src={url} alt={alt}/>
            <h4 className="place-name">
                {name}
            </h4>
        </div>
    );
}

export default AviableOn;