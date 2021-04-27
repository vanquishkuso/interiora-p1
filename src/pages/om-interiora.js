import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"
import Picture from "../assets/images/om-interiora-1.jpg"
import Picture2 from "../assets/images/om-interiora-2.jpg"

const AboutPage = () => {
    return (
        <Layout>

            <Title>Om Interiöra</Title>
            <Wrapper>
                <LeftWrapper>
                    <LeftColumn1>
                        <IMG src={Picture} alt="" />
                    </LeftColumn1>
                    <RightColumn1>
                        <p>Vad kul att du hittat hit till oss! </p>
                        <p>Interiöra är ett modernt och minimalistiskt inredningsföretag med inspiration från den iberiska halvön. Alla våra föremål har noggrant valts ut av oss eller någon på direkt uppdrag av oss. Vi startade som ett litet familjeföretag för snart tio år sedan och har idag en välutvecklad webbplats och ett tiotal olika butiker runt om i Sverige. Vi älskar det vi gör och vi hoppas att det även märks utåt. </p>
                    </RightColumn1>
                </LeftWrapper>

                <RightWrapper>
                    <LeftColumn2>
                        <p>Vi på Interiöra är stolta över att kunna garantera dig högkvalitativa produkter. Samtidigt som vi värderar kvalitet högre än allt annat är det viktigt för oss att alla ska ha råd med heminredning. Med anledning av det har vi därför ett blandat sortiment där vi lyckats få ned priset ordentligt på en del varor, vilket vi är mycket glada för. Allt tack vare vårt fina och nära samarbete med våra tillverkare nere på den Iberiska halvön.</p>
                        <p>Än en gång, vad roligt att du hittat hit! Vi hoppas att du hittar något bland våra handplockade föremål som faller dig i smaken. Och kom ihåg, om du saknar någon specifik vara i vårt sortiment är du mer än välkommen att höra av dig till oss.</p>

                    </LeftColumn2>
                    <RightColumn2>
                        <IMG src={Picture2} alt="" />
                    </RightColumn2>
                </RightWrapper>
            </Wrapper>
        </Layout >
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 5em;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        height: auto;
        justify-content: center;
        align-content: center;
        margin: 0 auto;
        flex-wrap: wrap;
    }
`

const Title = styled.h1`
    margin-top: 0.7em;
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`

const LeftColumn1 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
       p {
            text-align: left;
            margin-bottom: 2rem;
            font-weight: 400;
       }
       a {
        text-decoration: none;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
        color: #877D70;
        transition: 0.3s ease;
        &:hover {
            color: #373737;
        }
       }
       @media screen and (max-width: 500px) {
        width: 100%;
           margin: 0 auto;
           margin-bottom: 0em;
           justify-content: center;
       }
`

const RightColumn1 = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
       p {
        width: 100%;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
       }
       a {
        text-decoration: none;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
        color: #877D70;
        transition: 0.3s ease;
        &:hover {
            color: #373737;
        }
       }
       @media screen and (max-width: 500px) {
           width: 100%;
           margin: 0 auto;
           margin-bottom: 3em;
       }
`

const LeftColumn2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
       p {
            text-align: left;
            margin-bottom: 2rem;
            font-weight: 400;
       }
       a {
        text-decoration: none;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
        color: #877D70;
        transition: 0.3s ease;
        &:hover {
            color: #373737;
        }
       }
       @media screen and (max-width: 500px) {
        width: 100%;
           margin: 0 auto;
           margin-bottom: 0em;
           margin-top: -3em;
           justify-content: center;
       }
`

const RightColumn2 = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
       p {
        width: 100%;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
       }
       a {
        text-decoration: none;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
        color: #877D70;
        transition: 0.3s ease;
        &:hover {
            color: #373737;
        }
       }
       @media screen and (max-width: 500px) {
           width: 100%;
           margin: 0 auto;
           margin-bottom: 3em;
       }
`

const LeftWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    padding: 1em;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        margin-bottom: -3em;
       }
`

const RightWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    padding: 1em;

    @media screen and (max-width: 500px) {
        flex-direction: column-reverse;

       }
`

const IMG = styled.img`
    width: 80%;
    border-radius: 5px;
    margin-bottom: 1em;
    @media screen and (max-width: 500px) {
        width: 100%;
       }
`

export default AboutPage;