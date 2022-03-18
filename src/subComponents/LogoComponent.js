import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
    position: fixed;
    left: 2rem; top: 2rem;

    color: ${ props => props.theme.text};
    font-family: 'Pacifico',cursive;
    z-index: 3;
`
const LogoComponent = () => {
    return (
        <Logo>CB</Logo>
    );
};

export default LogoComponent;