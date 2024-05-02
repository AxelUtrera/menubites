import React from 'react';
import {Box, Center, Container, Flex, Image, Text} from "@chakra-ui/react";
import logoSVG from '../assets/img/Logo.svg'

const AppLogo = () => {
    return (
        <Container maxW='90%'>
            <Box maxWidth='sm'>
                <Flex>
                    <img src={logoSVG} alt="MenuBites logo"/>
                    <Center w='80px'>
                        <Text fontFamily="Lobster">
                            MenuBites
                        </Text>
                    </Center>

                </Flex>
            </Box>
        </Container>
    );
}

export default AppLogo