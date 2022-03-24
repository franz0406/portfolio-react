import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
// particle options file
import configLight from '../config/particlesjs-config-light.json';
import configDark from '../config/particlesjs-config.json';

const Container = styled.div`
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1;
`

const Particle = ({theme}) => {
    return (
        <Container>
            <Particles params={theme === 'light' ? configLight : configDark} />
        </Container>
    );
};

export default Particle;