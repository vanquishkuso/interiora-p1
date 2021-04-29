import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Hero1 from '../assets/images/hero1.jpg'
import Lampor from '../assets/images/Lampor.jpg'
import Stolar from '../assets/images/Stolar.jpg'
import Bord from '../assets/images/Bord.jpg'
import Matsalsgrupper from '../assets/images/Matsalsgrupper.jpg'
import Sängar from '../assets/images/Sängar.jpg'
import Soffor from '../assets/images/Soffor.jpg'
import Fåtöljer from '../assets/images/Fåtöljer.jpg'
import Dekoration from '../assets/images/Dekoration.jpg'


const Hero = ({ title, paragraph }) => {
    const [pic, setPic] = useState()

    useEffect(() => {
        const url = window.location.href
        const checkUrl = url.split("/")[4]

        if (checkUrl === undefined) {
            setPic(<ImgBg src={Hero1} />)
        }

        if (checkUrl === "lampor") {
            setPic(<ImgBg src={Lampor} />)
        }

        if (checkUrl === "stolar") {
            setPic(<ImgBg src={Stolar} />)
        }

        if (checkUrl === "bord") {
            setPic(<ImgBg src={Bord} />)
        }

        if (checkUrl === "matsalsgrupper") {
            setPic(<ImgBg src={Matsalsgrupper} />)
        }

        if (checkUrl === "sangar") {
            setPic(<ImgBg src={Sängar} />)
        }

        if (checkUrl === "soffor") {
            setPic(<ImgBg src={Soffor} />)
        }

        if (checkUrl === "fatoljer") {
            setPic(<ImgBg src={Fåtöljer} />)
        }

        if (checkUrl === "dekoration") {
            setPic(<ImgBg src={Dekoration} />)
        }
    }, [title])

    return (
        <HeroContainer>
            <HeroBg>
                {
                    pic
                }
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>{title}</HeroH1>
                    <HeroP>{paragraph}</HeroP>

                    { /*   <AnchorLink href="#product-section"><Button primary="true" big="true" round="true">Till produkterna</Button></AnchorLink> */}
                </HeroItems>
            </HeroContent>
        </HeroContainer >
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    padding: 0 1rem; 
    position: relative;
    margin-top: -80px;
    color: #fff;

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%, 
            rgba(0, 0, 0, 0.3) 100%
            ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    margin-top: 2.8em;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const HeroH1 = styled.h1`
    font-size: clamp(1.8rem, 6vw, 3.8rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`

const HeroP = styled.p`
    font-size: clamp(1.2rem, 3vw, 2rem);
    margin-bottom: 2rem;
    font-weight: 400;
`



