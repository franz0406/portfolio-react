import { React, useRef, useEffect } from 'react';
import { Anchor, Link } from '../components/AllSvgs';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`
const Slider = styled.div`
    position: fixed;
    top: 0; right: 0;

    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transform: translateY(-100%);
    .chain {
        transform: rotate(130deg);
    }
`

const AnchorComponent = () => {
    const ref = useRef();

    useEffect(()=>{

        const handleScroll = ()=>{
            let scrollPosition = window.pageYOffset;
            let windowHeight = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPosition + windowHeight));
            let diffPosition = (diff * 100) / (bodyHeight - windowHeight);

            ref.current.style.transform = `translateY(${-diffPosition}%)`;
        };

        window.addEventListener('scroll', handleScroll);
        return ()=>{ window.removeEventListener('scroll', handleScroll); }
    }, [])

    return (
        <Container>
            <Slider ref={ref}>
                {
                    [...Array(35)].map( (x, id) => {
                        return <Link key={id} width={25} height={25} fill='currentColor' className='chain'/>
                    })
                }
                <Anchor width={60} height={60} fill='currentColor'/>
            </Slider>
        </Container>
    );
};

export default AnchorComponent;