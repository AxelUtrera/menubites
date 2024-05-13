import React from 'react';
import './Header.css'
import '../index.css'
import {Text} from "@chakra-ui/react";
import logoSVG from '../assets/img/Logo.svg'
import {homeRoute, aviableOnRoute, featureRoute, contactUsRoute} from "../App.jsx";
import {navigateToSection} from "./Body.jsx";
import { useTranslation } from "react-i18next";

const Header = () => {
    return (
        <div id='header-container'>
            <div id='header-items-container' height='100%'>
                <Logo/>
                <NavButtons/>
                <JoinNowHeaderButton/>
            </div>
        </div>
    );
}

const NavButtons = () => {
    const {t} = useTranslation()
    return (
        <div id="nav-buttons">
            <div className="nav-button">
                <ButtonLink route={homeRoute} text={t("header_home")} />
            </div>
            <div className="nav-button">
                <ButtonLink route={featureRoute} text={t("header_feature")} />
            </div>
            <div className="nav-button">
                <ButtonLink route={aviableOnRoute} text={t("header_aviable")} />
            </div>
            <div className="nav-button">
                <ButtonLink route={contactUsRoute} text={t("header_contact")} />
            </div>
        </div>
    );
};

const JoinNowHeaderButton =() => {
    const {t} = useTranslation()
    return (
        <div className="nav-button">
            <button id="button-join-now-header" style={{
                background: 'var(--color-gradient)',
                color: 'var(--color-white)',
            }}
                    onClick={() => navigateToSection('call-to-action-container')}>
                {t("header_join_now")}
            </button>
        </div>
    )
}

const Logo = () => {
    return (
        <div id='logo-box'>
            <img src={logoSVG} alt="MenuBites logo" loading="lazy"/>
            <div id='letters-logo' marginleft='10px'>
                <Text fontFamily="Lobster" fontSize='20px'>
                    MenuBites
                </Text>
            </div>
        </div>
    );
}

const ButtonLink = ({text, route}) => {
    return (
        <a href={route} className="buttonLink">
            {text}
        </a>
    );
}


export default Header
