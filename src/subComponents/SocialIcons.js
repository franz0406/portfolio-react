import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs';
import styled from 'styled-components';

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0; left: 2rem;
    z-index: 3;
    
    &>*:not(:last-child){
        margin-top: 0.7rem;
    }
`
const Line = styled.span`
    width: 2px; height: 8rem;
    background-color: ${props => props.theme.text};
`
const SocialIcons = () => {
    return (
        <Icons>
            <div>
                <NavLink to="/">
                    <Github width={30} height={30} fill='cuttentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <Twitter width={30} height={30} fill='cuttentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <Facebook width={30} height={30} fill='cuttentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <YouTube width={30} height={30} fill='cuttentColor' />
                </NavLink>
            </div>
            <Line />
        </Icons>
    );
};

export default SocialIcons;