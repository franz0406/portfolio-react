import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.li`
    padding: 2rem;
    list-style:none;
    backdrop-filter:blur(3px);
    border: 2px solid ${props => props.theme.text};
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.3);
    z-index:5;
    transition: 0.3s;
    * {
        transition: 0.3s;
    }
    a {
        display: flex;
        flex-direction: column;
        height:100%;

        color: ${props => props.theme.text};
        font-family: 'Noto Sans KR', sans-serif;
        text-decoration: none;
        h2 {
            line-height:1.4;
            padding: 1rem 0.5rem 0.5rem;
        }
        p {
            margin-top:auto;
            padding-top:0.5rem;
            display:flex;
            flex-wrap: wrap;
            border-top: 1px solid ${props => props.theme.text};
            span {
                line-height:1.2;
                padding-right:0.7rem;
            }
        }
        img {
            width:100%;
            height:auto;
            border: 1px solid rgba(0,0,0,0.4);
        }
    }
    &:hover {
        background-color: ${props => props.theme.text};
        a {
            color: ${props => props.theme.body};
            p {
                border-top: 1px solid ${props => props.theme.body};
            }
        }
    }
`




const WorkComponent = ( props ) => {
    const { id, name, tags, link } = props.work;
    const img = props.img; 

    return (
        <List>
            <NavLink target="_blank" to={{pathname:link}} key={id}>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>
                    {tags.map( (tags, idx ) =>{
                        return <span key={idx}>#{tags}</span>
                    })}
                </p>
            </NavLink>
        </List>
    );
};

export default WorkComponent;