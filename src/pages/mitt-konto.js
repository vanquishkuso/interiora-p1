import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"

const AccountPage = () => {
    return (
        <Layout>
            <Wrapper>
                <h1>Mitt konto</h1>
                <p>Här syns all beställningar</p>
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

export default AccountPage;