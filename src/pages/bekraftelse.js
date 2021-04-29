import React, { useState } from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"

const ConfirmPage = () => {

    return (
        <Layout>
            <Wrapper>
                <h1>Tack för din beställning!</h1>
                <p>Du har fått ett bekräftelsemejl skickad till din mejladress</p>
                <p>Välkommen åter!</p>
            </Wrapper>

        </Layout>
    )
}

const Wrapper = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-top: 10vh;
    text-align: center;

   
       h1 {
        font-size: clamp(2rem, 6vw, 3rem);
        margin-bottom: 1.5rem;
        letter-spacing: 3px;
        font-weight: bold;
        padding: 0 1rem;
       }

       p {
        font-size: clamp(1rem, 3vw, 1.5rem);
        margin-bottom: 2rem;
        font-weight: 400;
       }
   
`

export default ConfirmPage;