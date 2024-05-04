import React from 'react';
import './Header.css'
import '../index.css'
import {Text} from "@chakra-ui/react";
import logoSVG from '../assets/img/Logo.svg'



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
    const homeRoute = '#home'

    return (
        <div id="nav-buttons">
            <div className="nav-button">
                <ButtonLink route={homeRoute} text="Home" />
            </div>
            <div className="nav-button">
                <ButtonLink route={homeRoute} text="About" />
            </div>
            <div className="nav-button">
                <ButtonLink route={homeRoute} text="Feature" />
            </div>
            <div className="nav-button">
                <ButtonLink route={homeRoute} text="Contact Us" />
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
            }}>
                Join Now
            </button>
        </div>
    )
}

const Logo = () => {
    return (
        <div id='logo-box'>
            <img src={logoSVG} alt="MenuBites logo"/>
            <div id='letters-logo' w='80px' marginleft='10px'>
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
