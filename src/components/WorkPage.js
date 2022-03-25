import React from 'react';
import styled, { keyframes } from 'styled-components';
// images
import bg from '../assets/Images/blog_bg.jpg';
import work1 from '../assets/Images/work_01.jpg';
import work2 from '../assets/Images/work_02.jpg';
import work3 from '../assets/Images/work_03.jpg';
import work4 from '../assets/Images/work_04.jpg';
import work5 from '../assets/Images/work_05.jpg';
import work6 from '../assets/Images/work_06.jpg';
import work7 from '../assets/Images/work_07.jpg';
import work8 from '../assets/Images/work_08.jpg';
import work9 from '../assets/Images/work_09.jpg';
// sub component
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
// component
import WorkComponent from './WorkComponent';
// work data
import { Works } from '../data/WorkData';
const show = keyframes`
    0% {
        transform: translateX(100%);
        opacity:0;
    }
    50% {
        transform: translateX(50%);
        opacity:0;
    }
    100% {
        transform: translateX(0%);
        opacity:1;
    }
`
const MainContainer = styled.section`
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    transform: translateX(-100%);
    opacity:0;
    animation: ${show} 1s ease forwards;
`
const Container = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 5rem;
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
`
const Grid = styled.ul`
    padding: 10rem 10vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: calc(1rem + 2vw);
    text-align:center;
`
const BigTitle = styled.h1`
    position: fixed;
    top: 30%;
    left: 5%;
    color: rgba(0,0,0,0.3);
    font-size: calc(30px + 10vw);
    z-index: 0;
`


const BlogPage = () => {
    const imgSrc = [ work1, work2, work3, work4, work5, work6, work7, work8, work9];

    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <PowerButton />
                <Grid>
                    {Works.map( (work, idx) => {
                        return <WorkComponent key={work.id} work={work} img={imgSrc[idx]}/>
                    })}
                </Grid>
                <BigTitle>WORK</BigTitle>
            </Container>
        </MainContainer>
    );
};

export default BlogPage;