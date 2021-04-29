import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"
import { Button } from '../components/Button'

const AccountPage = () => {

    const [getCart, setGetCart] = useState()
    const [orderData, setOrderData] = useState([])
    const [order, setOrder] = useState()
    const [activeText, setActiveText] = useState("")
    const [toggle, setToggle] = useState("payment")
    const [activeColor, setActiveColor] = useState("#877D70")
    const [orderDate, setOrderDate] = useState()
    // let cart = JSON.parse(localStorage.getItem("order"))
    let cartHistory = []

    const data = [
        {
            order: "Du har inte gjort en beställning än",
            payment: "Ditt registrerade betalningssätt är kortbetalning",
            settings: "Här kan du byta lösenord och mejladress"
        }
    ]

    const handleClick = (data) => {
        setToggle(data)
    }

    useEffect(() => {
        setOrderData(JSON.parse(localStorage.getItem("orderHistory")))
        setGetCart(JSON.parse(localStorage.getItem("order")))
    }, [])


    useEffect(() => {
        const randomDate = (start, end) => {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }

        let fetchOrderData

        if (toggle === "orders" && orderData === null || undefined) {
            fetchOrderData = data[0].order
            setActiveColor("#373737")
        }
        if (toggle === "orders" && orderData !== null) {
            fetchOrderData = (
                orderData.map((data, i) => {
                    return (
                        <OrderWrapper>
                            <OrderItemWrapper>
                                <OrderDate>
                                    <OrderHeader>Orderdatum</OrderHeader>
                                    <OrderItem>{data[0].orderDate}</OrderItem>
                                </OrderDate>
                                <OrderID>
                                    <OrderHeader>Order-ID</OrderHeader>
                                    <OrderItem>{data[0].orderId}</OrderItem>
                                </OrderID>

                                <DeliveryDate>
                                    <OrderHeader>Leveransdatum</OrderHeader>
                                    <OrderItem>{data[0].deliveryDate}</OrderItem>
                                </DeliveryDate>

                                <OrderPrice>
                                    <OrderHeader>Ordervärde</OrderHeader>
                                    <OrderItem>{data[0].orderPrice} kr</OrderItem>
                                </OrderPrice>

                            </OrderItemWrapper>
                            <Line />
                        </OrderWrapper>
                    )
                })
            )
        }
        setActiveText(fetchOrderData)

        // if (getCart != null) {
        //     let getNewOrder = order
        //     setActiveText(getNewOrder)
        //     //   localStorage.removeItem("order")
        // }

        if (toggle === "payment") {
            setActiveText(data[0].payment)
            setActiveColor("#373737")
        }
        if (toggle === "settings") {
            setActiveText(data[0].settings)
            setActiveColor("#373737")
        }

    }, [toggle])

    return (
        <Layout>
            <Title>Mitt konto</Title>
            <Wrapper>
                <LeftColumn>
                    <MenuItem onClick={(data) => handleClick("payment")} style={{ backgroundColor: toggle === "payment" ? "#373737" : null }}>Betalning</MenuItem>
                    <MenuItem onClick={(data) => handleClick("orders")} style={{ backgroundColor: toggle === "orders" ? "#373737" : null, }}>Mina beställningar</MenuItem>
                    <MenuItem onClick={(data) => handleClick("settings")} style={{ backgroundColor: toggle === "settings" ? "#373737" : null }}>Inställningar</MenuItem>
                    <Button onClick={() => localStorage.clear()} primary={true} style={{ fontWeight: "bold" }}>Töm orderhistorik</Button>

                </LeftColumn>
                <RightColumn>


                    <Paragraph>
                        {activeText}
                    </Paragraph>
                </RightColumn>
            </Wrapper>
        </Layout >
    )
}

const Wrapper = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-top: 10vh;
    text-align: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: 7vh;
        height: auto;
        margin-bottom: 5em;
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

const Paragraph = styled.p`
    margin-bottom: 2rem;
    font-weight: 400;
`

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 500px) {
        align-items: center;
    }
`

const RightColumn = styled.div`
    width: 500px;
    @media screen and (max-width: 500px) {
        width: 90%;
        margin-top: 2em;
    }
`

const MenuItem = styled.a`
    background-color: #877D70;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    color: #fff;
    width: 131px;
    height: 50px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s ease;
    margin-bottom: 1em;
    &:hover {
        background-color: #555555;
    }
`

const OrderWrapper = styled.div`
    margin-left: 3em;

    @media screen and (max-width: 500px) {
        margin-left: 0;
    }
`

const OrderItemWrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 2em;

    @media screen and (max-width: 500px) {
        margin: 0 auto;
        flex-direction: column;
    }
`

const OrderItem = styled.p`

    @media screen and (max-width: 500px) {
        margin-bottom: 1em;
    }
`

const OrderDate = styled.div`
    display: flex;
    flex-direction: column;
`
const OrderID = styled.div`
    display: flex;
    flex-direction: column;
`
const DeliveryDate = styled.div`
    display: flex;
    flex-direction: column;
`
const OrderPrice = styled.div`
    display: flex;
    flex-direction: column;
`

const OrderHeader = styled.h2`
    font-size: 1em;
`

const Line = styled.hr`
    width: 530px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    border-top: 1px solid #373737;
    opacity: 20%;

    @media screen and (max-width: 500px) {
        width: 80vw;
    }
    
`

export default AccountPage;