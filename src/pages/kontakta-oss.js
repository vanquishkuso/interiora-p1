import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"
import Picture from "../assets/images/kontakta-oss-1.jpg"


const ContactPage = () => {
    return (
        <Layout>

            <Title>Kontakta oss</Title>
            <Wrapper>
                <LeftColumn>
                    <IMG src={Picture} alt="" />
                </LeftColumn>

                <RightColumn>
                    <p>Har du allmänna frågor eller funderingar kring vårt företag eller våra produkter? Har du ett önskemål om en produkt du vill att vi ska ta in i sortimentet? Skicka i så fall ett mejl till mejladressen nedan eller ring nedanstående telefonnummer:</p>
                    <ContactWrapper>
                        <a href="mailto:hej@interiora.com">hej@interiora.com</a>
                        <Paragraph href="tel:123-456-7890">+46 70 111 11 11</Paragraph>
                    </ContactWrapper>

                    <p>Har du synpunkter gällande en specifik produkt, beställning eller vill göra en reklamation? Kontakta oss i så fall genom att skicka ett mejl till mejladressen nedan eller ring nedanstående telefonnummer:</p>

                    <ContactWrapper>
                        <a href="mailto:support@interiora.com">support@interiora.com</a>
                        <Paragraph href="tel:123-456-7890">+46 70 111 11 22</Paragraph>
                    </ContactWrapper>
                </RightColumn>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 3em;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    margin-bottom: 5em;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        height: auto;
        justify-content: center;
        align-content: center;
        margin: 0 auto;
    }
`

const Title = styled.h1`
    margin-top: 0.7em;
    text-align: center;
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`

const LeftColumn = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
           align-items: center;
       }
`

const RightColumn = styled.div`
    width: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

       p {
        width: 80%;
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
           align-items: center;
       }
`

const IMG = styled.img`
    width: 80%;
    border-radius: 5px;
    margin-bottom: 1em;

`

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
        @media screen and (max-width: 500px) {
        text-align: center;
        margin: 0 auto;
       }
`

const Paragraph = styled.a`
    text-align: center;
    margin-top: -1.5em;
`


export default ContactPage;