import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"
import Picture from "../assets/images/vara-butiker-1.jpg"
import { ShopData } from "../data/ShopData"

const ShopPage = () => {
    return (
        <Layout>

            <Title>Våra butiker</Title>
            <Wrapper>
                <LeftColumn>
                    <IMG src={Picture} alt="" />
                </LeftColumn>

                <RightColumn>
                    <ColumnTitle>Öppettider i samtliga butiker:</ColumnTitle>

                    <Text>Måndag - Fredag 09.00 - 18.00</Text>
                    <Text>Lördag 10.00 - 18.00</Text>
                    <Text>Söndag 10.00 - 16.00</Text>

                    <Text style={{ marginTop: "3em", marginBottom: "0em" }}>Här nedan hittar du alla våra butiker i Sverige:</Text>
                    <List>
                        {ShopData.map((data, i) => (
                            <div style={{ marginBottom: "0.3em" }}>
                                <h4>{data.city}</h4>
                                <li>{data.address}</li>
                            </div>
                        ))}
                    </List>
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
    margin-bottom: 1rem;
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
       }
`

const RightColumn = styled.div`
    width: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
           padding: 0;
           align-items: center;
       }
`

const IMG = styled.img`
    width: 80%;
    border-radius: 5px;
    margin-bottom: 1em;
    @media screen and (max-width: 500px) {
        width: 80%;
       }
`

const ColumnTitle = styled.h3`
   text-align: left;
`

const Text = styled.p`
    text-align: left;
    
    @media screen and (max-width: 500px) {
        width: 80%;
        text-align: center;
    }
`

const List = styled.ul`
    list-style-type: none;
    text-align: left;
       
    @media screen and (max-width: 500px) {
        padding: 2em;
    }
`

export default ShopPage;