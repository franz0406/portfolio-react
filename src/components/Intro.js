import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55vw; height:40vh;
    overflow: hidden;

    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top,
                linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom;
    background-size: 100% 3px;
    background-repeat: no-repeat;    
    border-left: 3px solid ${props => props.theme.body};           
    border-right: 3px solid ${props => props.theme.text};
    z-index:1;
`
const BoxContent = styled.div`
    text-align: center;
    color:#fff;
    text-shadow:0 0 10px #000;
    h3 {
        padding-bottom: 1vw;
        font-size: 4.5vw;
        font-weight: 600;
    }                
    @media screen and (max-width:450px){
        h3 {
            font-size: 25px;
        }
    }
`

const Intro = () => {

    return (
        <Box
            initial={{height:0}}
            animate={{height:"45vh"}}
            transition={{ type:'spring', duration:1, delay:1.5}}
        >
            <BoxContent>
                <h3>Web Publisher</h3>
                <p>React Portfolio Website.</p>
            </BoxContent>
        </Box>
    );
};

export default Intro;
