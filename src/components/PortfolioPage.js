import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/Themes';
// sub component
import LogoComponent from '../subComponents/LogoComponent';
import Particle from '../subComponents/Particle';
import PowerButton from '../subComponents/PowerButton';

// svg
import { YinYang } from './AllSvgs';
// pdf
import wah from '../assets/pdf/portfolio_wah.pdf';
import cledor from '../assets/pdf/portfolio_cledor.pdf';
import library from '../assets/pdf/portfolio_library.pdf';
// images
import wahImg from '../assets/Images/wah.jpg';
import cledorImg from '../assets/Images/cledor.jpg';
import libraryImg from '../assets/Images/library.jpg';

const show = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`
const scale = keyframes`
    from {
        opacity:0;
        transform: scale(0.5);
    }
    to {
        opacity:1;
        transform: scale(1);
    }
`
const Warpper = styled.section`
    position: relative;
    background-color: ${props => props.theme.text};
    height: 300vh;
    opacity:0;
    animation: ${show} 1s ease forwards;
`
const Container = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    > div > div{
        height: 100%;
    }
`
const Portfolios = styled.ul`
    position: absolute;
    top: 50%; left: 10%;
    transform: translateY(-50%);
    display: flex;    
    color: #fff;
    z-index:3;
`
const ListItem = styled.li`
    width: calc(400px + 10vw);
    list-style: none;
    font-family:'Noto Sans KR', sans-serif;
    background-color: #fff;
    border-radius: 1rem;
    opacity: 0;
    transform: scale(0.5);
    animation: ${scale} 0.5s ease forwards;
    animation-delay: 1s;
    &:not(:last-child) {
        margin-right: 6rem;
    }
    div {
        padding: 2rem 2rem 0 2rem;
        h2, h4 {
            display: block;
            color: #000;
            text-align: center;
        }
        figure {
            margin-top: 1rem;
            border: 1px solid #aaa;
            color: #000;
            img {
                width: 100%;
                height: auto;
            }
            figcaption {
                text-align: center;
                line-height: 2;
            }
        }
    }
`
const Rotate = styled.span`
    display: block;
    width: 50px; height: 50px;
    position: fixed;
    left: 50%; bottom: 2rem;
    transform: translateX(-50%);
`
const Footer = styled.p`
    width: 70%;
    padding: 1rem 0;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
`
const View = styled(NavLink)`
    padding: 0.5rem 1.5rem;
    background-color: #000;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
`
const Pdf = styled.a`
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    background-color: #000;
    color: #fff;
    font-size: 18px;
`
const BigTitle = styled.h1`
    position: fixed;
    top: 5%;
    left: 5%;
    color: rgba(255,255,255,0.5);
    font-size: calc(30px + 10vw);
    z-index: 0;
`


const PortfolioPage = () => {
    const moveLeft = useRef(null);
    const rotate = useRef(null);

    useEffect(()=>{

        const handleLeft = () => {
            moveLeft.current.style.transform = `translateY(-50%) translateX(-${window.pageYOffset}px)`;
        }
        const handleRotate = () => {
            rotate.current.style.transform = `translateX(-50%) rotate(${window.pageYOffset}deg)`;
        }

        window.addEventListener('scroll', handleLeft);
        window.addEventListener('scroll', handleRotate);

        return () => {
            window.removeEventListener('scroll', handleLeft);
            window.removeEventListener('scroll', handleRotate);
        }

    }, []);

    return (
        <ThemeProvider theme={lightTheme}>
        <Warpper>
            <LogoComponent theme='false'/>
            <PowerButton />
            <Container>
                <Particle theme='dark'/>
                <Portfolios ref={moveLeft}>
                    <ListItem>
                        <div>
                            <h2>PORTFOLIO</h2>
                            <figure>
                                <img src={libraryImg} alt="국립중앙도서관" />
                                <figcaption>국립중앙도서관</figcaption>
                            </figure>
                            <Footer>
                                <View to={{pathname:"https://franz0406.github.io/library"}} target="_blank">VIEW</View>                       
                                <Pdf href={library} target="_blank">PDF</Pdf>
                            </Footer>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <h2>PORTFOLIO</h2>
                            <figure>
                                 <img src={cledorImg} alt="끌레도르" />
                                 <figcaption>끌레도르</figcaption>
                            </figure>
                            <Footer>
                                <View to={{pathname:"https://franz0406.github.io/re-cledor"}} target="_blank">VIEW</View>                       
                                <Pdf href={cledor} target="_blank">PDF</Pdf>
                            </Footer>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <h2>PORTFOLIO</h2>
                            <figure>
                                 <img src={wahImg} alt="웹접근성연구소" />
                                 <figcaption>웹접근성연구소</figcaption>
                            </figure>
                            <Footer>
                                <View to={{pathname:"https://franz0406.github.io/wah-re"}} target="_blank">VIEW</View>                       
                                <Pdf href={wah} target="_blank">PDF</Pdf>
                            </Footer>
                        </div>
                    </ListItem>
                </Portfolios>
                <Rotate ref={rotate}>
                    <YinYang width={50} height={50} fill={darkTheme.text} />
                </Rotate>
            </Container>
            <BigTitle>PORTFOLIO</BigTitle>
        </Warpper>
        </ThemeProvider>
    );
};

export default PortfolioPage;