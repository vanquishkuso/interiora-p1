import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"

const ContactPage = () => {
    return (
        <Layout>
            <Wrapper>
                <h1>Kontakta oss</h1>
                <p>Har du allmänna frågor eller funderingar kring vårt företag eller våra produkter? Har du ett önskemål om en produkt du vill att vi ska ta in i sortimentet? Skicka i så fall ett mejl till mejladressen nedan eller ring nedanstående telefonnummer:

                hej@interiora.com
                +46 70 111 11 11

                Har du synpunkter gällande en specifik produkt, beställning eller vill göra en reklamation? Kontakta oss i så fall genom att skicka ett mejl till mejladressen nedan eller ring nedanstående telefonnummer:

                support@interiora.com
                +46 70 111 11 22
</p>
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

export default ContactPage;