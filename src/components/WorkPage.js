import React from 'react';
import styled from 'styled-components';
// images
import bg from '../assets/Images/blog_bg.jpg';
// sub component
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';

const MainContainer = styled.section`
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`
const Container = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 5rem;
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
`
const Grid = styled.div`
    padding: 10rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: calc(1rem + 2vw);
    text-align:center;
`


const BlogPage = () => {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <PowerButton />
                <Grid>
                    <h2>Blog</h2>
                    <h2>Blog</h2>
                    <h2>Blog</h2>
                    <h2>Blog</h2>
                </Grid>
            </Container>
        </MainContainer>
    );
};

export default BlogPage;