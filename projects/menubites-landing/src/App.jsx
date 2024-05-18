import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import CallToAction from "./components/CallToAction.jsx";
import AviableOn from "./components/AviableOn.jsx";
import AppDescription from "./components/AppDescription.jsx";
import { useTranslation } from 'react-i18next';
import "./i18n";

export const homeRoute = '#home';
export const featureRoute = '#feature';
export const aviableOnRoute = '#aviable-on';
export const contactUsRoute = '#contact-us';

function App() {
    const [count, setCount] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        document.querySelector('meta[name="description"]').setAttribute('content', t('metaDescription'));

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "MenuBites",
            "description": t('metaDescription')
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [t]);

    return (
        <>
            <div style={{
                width: '100%', display: "grid",
                placeItems: "center"
            }}>
                <Header></Header>
                <Body></Body>
                <AppDescription/>
                <AviableOn/>
                <CallToAction/>
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
