import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"
import Picture from "../assets/images/karriar-1.jpg"
import Picture2 from "../assets/images/karriar-2.jpg"

const CareerPage = () => {
    return (
        <Layout>

            <Title>Karriär</Title>
            <Wrapper>
                <LeftWrapper>
                    <LeftColumn1>
                        <IMG src={Picture} alt="" />
                    </LeftColumn1>
                    <RightColumn1>
                        <p>Är du intresserad av att jobba tillsammans med oss? Vad roligt! Interiöra är ständigt på jakt efter nya drivna medarbetare som brinner för kvalitativ heminredning lika mycket som oss. </p>
                        <p>Här nedan listar vi några lediga positioner som vi önskar att tillsätta så snart som möjligt:</p>
                        <ul style={{ listStyleType: "none", textAlign: "left" }}>
                            <li>Butikschef - Stockholm</li>
                            <li>Kundsupportansvarig - Stockholm</li>
                            <li>Assisterande inköpsansvarig - Malmö</li>
                            <li>Visual Merchandiser - Göteborg</li>
                            <li>Controller - Uppsala</li>
                            <li>Ekonomiassistent - Umeå</li>
                        </ul>
                    </RightColumn1>
                </LeftWrapper>

                <RightWrapper>
                    <LeftColumn2>
                        <p style={{ fontWeight: "bold" }}>För att ansöka om en ledig tjänst</p>
                        <p>Skicka ditt CV och en kort presentation om dig själv till <a href="mailto:hej@interiora.com">hej@interiora.com</a> med namnet på den tjänst du söker som titel i ämnesraden. Så snart som möjligt efter att din ansökan nått oss så återkommer vi till dig, oavsett om du gått vidare i rekryteringsprocessen eller inte.</p>

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
           margin-bottom: 0em;
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

export default CareerPage;