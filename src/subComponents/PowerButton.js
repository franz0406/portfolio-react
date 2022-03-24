import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import svg component
import { PowerBtn } from '../components/AllSvgs';

const Power = styled.button`
    position: fixed;
    top: 2rem; left: 50%;
    transform: translateX(-50%) scale(1);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.4rem; height: 2.4rem;
    padding: 0.3rem;
    background-color: #fcf6f4;
    border-radius: 50%;
    border: 2px solid #000;
    cursor: pointer;
    z-index: 4;
    transition: 0.1s ease-in-out;
    &:hover {
        transform: translateX(-50%) scale(1.1);
    }
    &>*:first-child {
        text-decoration:none;
        color: inherit;
    }
`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <PowerBtn width={28} height={28} fill='currentColor' />
            </NavLink>
        </Power>
    );
};

export default PowerButton;