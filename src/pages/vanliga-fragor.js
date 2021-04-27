import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"
import { FAQData } from "../data/FAQData"

const FAQPage = () => {
    return (
        <Layout>
            <Title>Vanliga frågor</Title>
            <Wrapper>
                <RowWrapper>
                    {FAQData.map((data, i) => (
                        <QuestionWrapper>
                            <QuestionTitle>{data.question}</QuestionTitle>
                            <Answer>{data.answer}</Answer>
                        </QuestionWrapper>
                    ))}
                </RowWrapper>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    margin-bottom: 5em;
    justify-content: space-evenly;
    justify-items: space-evenly;
    align-content: space-evenly;
    align-items: center;

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
    margin-bottom: 1rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`



const QuestionWrapper = styled.div`
    width: 100%;
    text-align: left;
    padding: 1em;

    @media screen and (max-width: 500px) {
        width: 90%;
        margin: 0 auto;
    }

`

const QuestionTitle = styled.i`
 text-align: left;
 text-transform: cursive;
`

const Answer = styled.p`
 text-align: left;
`

const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 500px) {
        margin-bottom: 5em;
    }
`

export default FAQPage;