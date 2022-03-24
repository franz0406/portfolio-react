import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';
// sub component
import LogoComponent from '../subComponents/LogoComponent';
import Particle from '../subComponents/Particle';
import PowerButton from '../subComponents/PowerButton';

const Container = styled.section`
    position: relative;
    background-color: ${props => props.theme.body};
    width: 100%;
    min-height: 100vh;
    > div > div {
        height: 100%;
    }
`
const Lists = styled.ul`
    width:70%;
    margin:0 auto;
    padding: 10rem 0;
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: calc(1rem + 1vw);
`
const ListContent = styled.li`
    padding: 2rem;
    list-style: none;
    font-family: 'Noto Sans KR', sans-serif;
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    line-height: 1.4;
    transition: 0.2s linear;
    z-index:3;
    &:hover {
        border: 2px solid ${props => props.theme.body};
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`
const Title = styled.h3`
    padding-bottom:1rem;
    font-size:calc(1em + 1vw);
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <LogoComponent theme='light'/>
            <PowerButton />
            <Container>
            <Particle theme='light'/>
                <Lists>
                    <ListContent>
                        <Title>HTML</Title>
                        <p>웹 표준을 위해 HTML5에서 권장하는 마크업과 시멘틱 태그를 이용한 레이아웃을 설계합니다. 또한 웹 접근성 준수를 위해 키보드에 대한 대응과 적절한 대체 텍스트를 제공하고자 노력합니다.</p>
                    </ListContent>
                    <ListContent>
                        <Title>CSS, SCSS</Title>
                        <p>크로스브라우징을 위한 CSS 속성을 사용해서 디자인하고, 애니메이션과 반응형 float, flex, grid 기법을 다양하게 활용할 수 있습니다. 또한, CSS 전처리기인 SCSS 기본 문법도 숙지하고 있습니다.</p>
                    </ListContent>
                    <ListContent>
                        <Title>JAVASCRIPT, JQUERY</Title>
                        <p>슬라이드, 스크롤에 반응하는 애니메이션, 탭 메뉴, 아코디언 등.. 기본적인 동적구현을 위한 코딩이 가능합니다.</p>
                    </ListContent>
                    <ListContent>
                        <Title>PS, AI, FIGMA</Title>
                        <p>퍼블리싱 작업을 위한 기본적인 기능들을 다룰수 있습니다.</p>
                    </ListContent>
                </Lists>
            </Container>
        </ThemeProvider>
    );
};

export default MySkillsPage;