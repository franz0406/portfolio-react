import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../styles/Themes';

const Logo = styled.h1`
    position: fixed;
    left: 2rem; top: 2rem;

    color: ${ props => props.color === 'false' ? darkTheme.text : darkTheme.body};
    transition: 1.5s linear;
    font-family: 'Source Sans Pro',sans-serif;
    z-index: 3;
`
const LogoComponent = ({theme}) => {
    return (
        <Logo color={theme.toString()}>Portfolio</Logo>
    );
};

export default LogoComponent;