import React from 'react';
import './Header.css'
import '../index.css'
import {Text} from "@chakra-ui/react";
import logoSVG from '../assets/img/Logo.svg'
import {homeRoute, aviableOnRoute, featureRoute, contactUsRoute} from "../App.jsx";
import {navigateToSection} from "./Body.jsx";


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

    return (
        <div id="nav-buttons">
            <div className="nav-button">
                <ButtonLink route={homeRoute} text="Home" />
            </div>
            <div className="nav-button">
                <ButtonLink route={featureRoute} text="Feature" />
            </div>
            <div className="nav-button">
                <ButtonLink route={aviableOnRoute} text="Aviable on" />
            </div>
            <div className="nav-button">
                <ButtonLink route={contactUsRoute} text="Contact Us" />
            </div>
        </div>
    );
};

const JoinNowHeaderButton =() => {
    return (
        <div className="nav-button">
            <button id="button-join-now-header" style={{
                background: 'var(--color-gradient)',
                color: 'var(--color-white)',
            }}
                    onClick={() => navigateToSection('call-to-action-container')}>
                Join Now
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
