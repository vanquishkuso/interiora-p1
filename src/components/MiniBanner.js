import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LinkButton } from './LinkButton'
import Hero1 from '../assets/images/hero1.jpg'
import Lampor from '../assets/images/Lampor.jpg'
import Stolar from '../assets/images/Stolar.jpg'
import Bord from '../assets/images/Bord.jpg'
import Matsalsgrupper from '../assets/images/banner/sale-matsalsgrupper.jpg'
import Sängar from '../assets/images/Sängar.jpg'
import Soffor from '../assets/images/banner/sale-soffor.jpg'
import BannerDekoration from "../assets/images/banner/banner-dekoration.jpg"
import Fåtöljer from '../assets/images/Fåtöljer.jpg'
import Dekoration from '../assets/images/Dekoration.jpg'
import { BannerData } from "../data/BannerData"

const MiniBanner = ({ title, paragraph, picturesrc, buttonBannerText, linkTextTarget }) => {
    const [pic, setPic] = useState()
    const [textTitle, setTextTitle] = useState()
    const [para, setPara] = useState()

    useEffect(() => {
        const url = window.location.href
        const checkUrl = url.split("/")[4]

        setPic(<ImgBg src={picturesrc} />)

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

                    <ButtonWrapper>
                        <LinkButton to={linkTextTarget} primary="true">{buttonBannerText}</LinkButton>
                    </ButtonWrapper>

                </HeroItems>
            </HeroContent>
        </HeroContainer >
    )
}

export default MiniBanner

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;
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
            rgba(0, 0, 0, 0.6) 100%
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
    margin-top: -1em;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 3.8rem);
    margin-bottom: 0.7rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`

const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 3rem;
    font-weight: 400;
`

const ButtonWrapper = styled.div`
    @media screen and (max-width: 500px) {
        margin-top: -1em;
    }
`


