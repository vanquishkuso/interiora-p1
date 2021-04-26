import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"


const ContactPage = () => {
    return (
        <Layout>

            <Title>Kontakta oss</Title>
            <Wrapper>
                <LeftColumn>
                    <p>Har du allmänna frågor eller funderingar kring vårt företag eller våra produkter? Har du ett önskemål om en produkt du vill att vi ska ta in i sortimentet? Skicka i så fall ett mejl till mejladressen nedan eller ring nedanstående telefonnummer:</p>
                    <a href="mailto:hej@interiora.com">hej@interiora.com</a>
                    <p> +46 70 111 11 11</p>
                </LeftColumn>

                <RightColumn>
                    <p>Har du synpunkter gällande en specifik produkt, beställning eller vill göra en reklamation? Kontakta oss i så fall genom att skicka ett mejl till mejladressen nedan eller ring nedanstående telefonnummer:</p>

                    <a href="mailto:support@interiora.com">support@interiora.com</a>
                    <p>+46 70 111 11 22</p>
                </RightColumn>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: row;
    margin-top: 10vh;
    justify-content: space-evenly;


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
    width: 30%;
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
           width: 80%;
           margin: 0 auto;
       }
`

const RightColumn = styled.div`
    width: 30%;
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
           width: 80%;
           margin: 0 auto;
           margin-bottom: 3em;
       }
`


export default ContactPage;