import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
// component
import Intro from './Intro';
// sub component
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
// svg component
import { YinYang } from './AllSvgs';

const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: ${ props => props.theme.body};
    overflow: hidden;
    
    h2,h3,h4,h5,h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`;

const Container = styled.div`
    padding:2rem;
    > a { /* Link tags Common style */
        position: absolute;
        font-weight: 600;
        text-decoration: none;
        z-index: 1;
    }
`;

const WORK = styled(NavLink)`
    color: #000;
    top: 50%; right: 2rem;
    transform: translate(-15%, -50%) rotate(90deg);
`;

const PORTFOLIO = styled(NavLink)`
    color: ${props => props.active === 'false' ? props.theme.body : props.theme.text };
    top: 50%; left: 2rem;
    transform: translate(-15%, -50%) rotate(270deg);
    transition: ${props => props.active === 'false' ? "0.5s" : "0.5s" };
    transition-delay: ${props => props.active === 'false' ? "1s" : "0s" };
`;

const ABOUT = styled(NavLink)`
    color: ${props => props.active === 'false' ? props.theme.body : props.theme.text };
    bottom: 2rem; left: 25%;
    transition: ${props => props.active === 'false' ? "0.5s" : "0.5s" };
    transition-delay: ${props => props.active === 'false' ? "1s" : "0s" };
`
const SKILLS = styled(NavLink)`
    color: #000;
    bottom: 2rem; right: 25%;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Center = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    right: ${props => props.active === 'false' ? '0%' : '50%'};
    bottom: ${props => props.active === 'false' ? '0%' : '50%'};
    transform: ${props => props.active === 'false' ? "translate(calc(-0% - 2rem), -0%) scale(0.7)" : "translate(50%, 50%) scale(1)"};

    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    transition: all 0.3s ease-in;
    transition-delay: 0.4s;
    & >:first-child {
        animation: ${rotate} 3s linear infinite;
    }
    span {
        padding-top:1rem;
        font-size: 14px;
        font-weight: 600;
        opacity: ${props => props.active === 'false' ? '0' : '1'};
        transition: opacity 0.3s;
        transition-delay: ${props => props.active === 'false' ? '0s' : '1s'};
    }
`;

const BlackSection = styled.div`
    position: absolute;
    top: 0; bottom: 0; right: 50%;

    width: 50%;
    height: ${props => props.active === 'false' ? "100%" : "0%"};
    background-color: #000;
    transition: ${props => props.active === 'false' ? "height 1s ease 0.8s" : "height 1s ease 0s"};
    z-index:1;
`;

// Framer-motion variants
const scaleMotion = {
    scaleUp: { scale: 1.1 },
    scaleDown: { scale: 0.8 },
};

const Main = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponent theme={click.toString()}/>
                <BlackSection active={click.toString()} aria-hidden="true"/>
                <Center active={click.toString()}>
                    <YinYang onClick={()=> handleClick()} width={150} height={150} fill="currentColor"/>
                    <span>Click here..</span>
                </Center>
                <WORK to="/work">
                    <motion.h3 
                        whileHover="scaleUp" 
                        whileTap="scaleDown" 
                        variants={scaleMotion}>WORK
                    </motion.h3>
                </WORK>
                <PORTFOLIO to="/portfolio" active={click.toString()}>
                    <motion.h3 
                        whileHover="scaleUp" 
                        whileTap="scaleDown" 
                        variants={scaleMotion}>PORTFOLIO
                    </motion.h3>
                </PORTFOLIO>
                <ABOUT to="/about" active={click.toString()}>
                    <motion.h3 
                        whileHover="scaleUp" 
                        whileTap="scaleDown" 
                        variants={scaleMotion}>ABOUT
                    </motion.h3>
                </ABOUT>
                <SKILLS to="/skills">
                    <motion.h3 
                        whileHover="scaleUp" 
                        whileTap="scaleDown" 
                        variants={scaleMotion}>SKILLS
                    </motion.h3>
                </SKILLS>
            </Container>
            {click ? null : <Intro active={click.toString()}/> }
        </MainContainer>
    );
};

export default Main;