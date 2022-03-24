import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';
// sub component
import LogoComponent from '../subComponents/LogoComponent';
import Particle from '../subComponents/Particle';
import PowerButton from '../subComponents/PowerButton';

const Container = styled.section`
    position: relative;
    background-color: ${props => props.theme.text};
    width: 100%;
    min-height: 100vh;
    > div > div {
        height: 100%;
    }
`
const Portfolios = styled.ul`
    position: absolute;
    top: 50%; left: calc(10rem + 15vw);
    transform: translateY(-50%);
    height: 40vh;
    display: flex;    
    color: #fff;
    z-index:3;
`

const PortfolioPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <LogoComponent theme='false'/>
            <PowerButton />
            <Container>
                <Particle theme='dark'/>
                <Portfolios>

                </Portfolios>
            </Container>
        </ThemeProvider>
    );
};

export default PortfolioPage;