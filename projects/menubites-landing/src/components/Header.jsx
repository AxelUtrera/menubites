import React from 'react';
import {Box, Button, Center, Container, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import logoSVG from '../assets/img/Logo.svg'

const homeRoute = '#home'

const Header = () => {
    return (
        <Container maxWidth='80%' marginTop='55px' >
            <Flex>
                <Logo/>
                <NavButtons/>
            </Flex>
        </Container>
    );
}


const NavButtons = () => {
    return (
        <Grid templateColumns='repeat(6, 1fr)' maxWidth='100%' marginLeft='140px'>
            <GridItem colSpan ={1}>
                <Center height='100%' width='200px'>
                    <ButtonLink route={homeRoute} text="Home"></ButtonLink>
                </Center>
            </GridItem>
            <GridItem colSpan ={1}>
                <Center height='100%' width='100px'>
                    <ButtonLink route={homeRoute} text="About"></ButtonLink>
                </Center>
            </GridItem>
            <GridItem colSpan ={1} width='100px'>
                <Center height='100%'>
                    <ButtonLink route={homeRoute} text="Feature"></ButtonLink>
                </Center>
            </GridItem>
            <GridItem colSpan ={1} width='100px'>
                <Center height='100%'>
                    <ButtonLink route={homeRoute} text="Contact Us"></ButtonLink>
                </Center>
            </GridItem>
            <GridItem colSpan ={1} width='100px'></GridItem>
            <GridItem colSpan ={1} width='100px'>
                <Center height='100%'>
                    <Button style={{
                        backgroundImage: 'var(--color-gradient)',
                        color: '#F3F3F3'
                    }}>
                        Join Now
                    </Button>
                </Center>
            </GridItem>
        </Grid>
    );
}

const Logo = () => {
    return (
        <Box maxWidth='100%'>
            <Flex>
                <img src={logoSVG} alt="MenuBites logo"/>
                <Center w='80px' marginLeft='10px'>
                    <Text fontFamily="Lobster" fontSize='20px'>
                        MenuBites
                    </Text>
                </Center>
            </Flex>
        </Box>
    );
}

const ButtonLink = ({text, route}) => {
    return (
        <a href={route} style={{
            fontFamily: 'Ubuntu',
            color: '#000000',
            fontSize: '16px',
            borderBottom: '2px solid transparent',
            transition: 'border-bottom 0.3s ease-in-out'
        }}
           onMouseOver={(e) => e.target.style.borderBottom = '1px solid currentColor'}
           onMouseOut={(e) => e.target.style.borderBottom = '1px solid transparent'}
        >
            {text}
        </a>
    );
}


export default Header
