import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { BiAlarm, BiTrash } from 'react-icons/bi'
import { Button } from '../components/Button'
import { Link } from "gatsby"
import { FaCheck } from "react-icons/fa"

const CartPage = () => {
    const [getCart, setGetCart] = useState([])
    const [cart, setCart] = useState([])
    const [cartCost, setCartCost] = useState(null)
    const [updateCart, setUpdateCart] = useState("Add")
    const [tax, setTax] = useState(0)
    const [check, setCheck] = useState(false)
    const [checkField, setCheckField] = useState({
        name: false,
        card: false,
        cvc: false,
        monthyear: false
    })

    const handleRemove = (id) => {
        setUpdateCart("Remove")
        const filtered = getCart.filter(item => item.id !== id)
        localStorage.setItem("products", JSON.stringify(filtered))
        setGetCart(filtered)

        var sum = 0;
        for (var i = 0; i < filtered.length; i++) {
            sum += parseInt(filtered[i].price)
        }
        setCartCost(sum)
    }

    const addItem = (price) => {
        setCartCost(prevCartCost => prevCartCost + price)
        setTax(prevTax => prevTax + cartCost * 0.2)
        //  getCart.forEach(data => setCartCost(prev => prev + data.price))
    }

    const randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    const checkIfBox = () => {
        if (check === false) {
            alert("Du måste bocka för att du godkänner")
        }
        if (check === true) {
            sendOrder()
        }
    }
    const sendOrder = () => {
        let order = [{
            orderId: Math.floor((Math.random() * 100)),
            orderPrice: cartCost,
            orderDate: new Date().toISOString().slice(0, 10),
            deliveryDate: randomDate(new Date(2021, 5, 1), new Date(2021, 6, 1)).toISOString().slice(0, 10)
        }]

        var a = [];
        a = JSON.parse(localStorage.getItem("orderHistory")) || [];
        a.push(order);
        localStorage.setItem("orderHistory", JSON.stringify(a))
        localStorage.removeItem("products")
    }

    const handleInputCard = () => {
        setCheckField({
            name: true,
            card: true
        })
    }


    useEffect(() => {
        let fetchData
        if (getCart === null || getCart.length === 0) {
            fetchData = (
                <EmptyCartText>Din varukorg är tom</EmptyCartText>
            )
        } else {
            fetchData = (
                getCart.map((data, i) => {
                    if (updateCart === "Add") {
                        addItem(data.price);
                    }

                    return (
                        <Wrapper>
                            <ProductWrapper key={data.id}>
                                <LeftColumn>

                                    <img src={data.img} alt="" style={{
                                        height: "100px",
                                        width: "100px",
                                        borderRadius: "10px",
                                        filter: "brightness(100%)",
                                        transition: "0.3s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                    }} />
                                    <TitleWrapper>
                                        <ProductTitle>{data.item}</ProductTitle>
                                        <ProductCategory>{data.category}</ProductCategory>
                                    </TitleWrapper>

                                </LeftColumn>
                                <RightColumn>
                                    <h3>{data.price} kr</h3>
                                    <TrashCan onClick={() => {
                                        handleRemove(data.id)
                                    }} />

                                </RightColumn>


                            </ProductWrapper>
                            <Line />
                        </Wrapper>
                    )
                })
            )

        }
        setCart(fetchData)

    }, [getCart])

    useEffect(() => {
        setGetCart(JSON.parse(localStorage.getItem("products")))
    }, [])


    return (
        <Layout>
            <SEO title="Varukorgen - Interiöra" />


            <CartWrapper>
                <Title>Varukorgen</Title>
                {cart}


                {cartCost ? <BottomRow>
                    <TotalCost>Totalt</TotalCost>
                    <Cost>{cartCost} kr</Cost>
                    <TaxTitle>Varav moms </TaxTitle>
                    <TaxCost>{Math.round(cartCost * 0.2)} kr</TaxCost>
                </BottomRow> : null}



            </CartWrapper>
            {cartCost ? <FormWrapper>
                <FormTitle>Personuppgifter</FormTitle>
                    För- och efternamn <Name />


                <AddressWrapper>
                    <FirstColumnWrapper>
                        <AddressTitle>Adress</AddressTitle>
                        <Address />
                    </FirstColumnWrapper>
                    <SecondColumnWrapper>
                        <ZipTitle>Postnummer</ZipTitle>
                        <Zip />
                    </SecondColumnWrapper>

                </AddressWrapper>
                    Ort <City />
                   Mejladress <Mail />
                   Telefonnummer <Phone />









                <PaymentWrapper>
                    <h2 style={{ marginBottom: "1em", letterSpacing: "3px" }}>Kortbetalning</h2>
                    <FirstCardColumn>
                        <CheckField style={{ fontWeight: "bold", position: "relative", left: "calc(100% + -30px)", bottom: "-53px", zIndex: "90", color: "green", opacity: checkField.name ? "100%" : "0%" }} />
                        <CardTitle>Kortinnehavare</CardTitle>
                        <CardName onChange={() => setCheckField({ ...checkField, name: true })} />


                        <CheckField style={{ fontWeight: "bold", position: "relative", left: "calc(100% + -30px)", bottom: "-66px", zIndex: "50", color: "green", opacity: checkField.card ? "100%" : "0%" }} />
                        <CardTitle style={{ marginTop: "0.8em" }}>Kortnummer</CardTitle>
                        <CardNumber onChange={() => setCheckField({ ...checkField, card: true })} />
                    </FirstCardColumn>


                    <SecondCardColumn>


                        <div style={{ marginRight: "1em" }}>
                            <CheckField style={{ fontWeight: "bold", position: "relative", left: "calc(100% + -30px)", bottom: "-57px", zIndex: "50", color: "green", opacity: checkField.cvc ? "100%" : "0%" }} />
                            <CardTitle>Säkerhetskod</CardTitle>
                            <CVC onChange={() => setCheckField({ ...checkField, cvc: true })} />
                        </div>


                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <CheckField style={{ fontSize: "1em", fontWeight: "bold", position: "relative", left: "calc(100% + -5px)", bottom: "-51px", zIndex: "50", color: "green", opacity: checkField.monthyear ? "100%" : "0%" }} />
                            <CardTitle>Giltighetstid</CardTitle>

                            <div style={{ display: "flex", flexDirection: "row" }}>

                                <CardMonthYear onChange={() => setCheckField({ ...checkField, monthyear: false })}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </CardMonthYear>
                                <CardYear onChange={() => setCheckField({ ...checkField, monthyear: true })}>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </CardYear>
                            </div>
                        </div>
                    </SecondCardColumn>

                </PaymentWrapper>




                <CheckBoxTextWrapper>
                    <CheckBox type="checkbox" onClick={() => setCheck(prev => !prev)} style={{ marginRight: "1em", transform: "scale(1.5)" }} />
                    <p>Jag godkänner&nbsp;
                    <a href="/anvandarvillkor">användarvillkoren</a>
                    &nbsp;förstår Interiöras&nbsp;
                    <a href="/integritetspolicy">integritetspolicy</a>
                    &nbsp;när jag bekräftar beställningen.
                    </p>
                </CheckBoxTextWrapper>
                <ButtonWrapper>
                    <Link onClick={() => checkIfBox()} to="/bekraftelse" style={{ textDecoration: "none", margin: "0 auto" }}>
                        <ConfirmButton disabled={!check}>Beställ</ConfirmButton>
                    </Link>
                </ButtonWrapper>
            </FormWrapper> : null}

            { /* <button onClick={handleCalc}>Räkna ut</button> */}

        </Layout >
    )
}


export default CartPage

const PaymentBox = styled.div`

`

const CheckField = styled(FaCheck)`

`

const CardTitle = styled.h4`
    font-weight: 400;
    letter-spacing: 0.7px;
    opacity: 50%;
`

const FirstCardColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
`

const SecondCardColumn = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }  
`

const PaymentWrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.18) 0px 12px 24px;
    background-color: #f8f8f8;
    border-radius: 5px;
    width: 400px;
    margin: 0 auto;
    margin-bottom: 5em;
    margin-top: 5em;
    padding: 3em;
    
    @media screen and (max-width: 500px) {
        width: 450px;
        max-width: 100%;
        padding: 2em;
    }  
`



const CardName = styled.input`
    font-size: 1em;
    border: solid 1px #ebebeb;
    border-radius: 5px;
    height: 2.5em;
    margin-bottom: 1em;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px;
    position: relative;
    z-index: 50;
    @media screen and (max-width: 500px) {
        max-width: 100%; 
    }  
`

const CardNumber = styled.input`
    font-size: 1em;
    height: 2.5em;
    border-radius: 5px;
    border: none;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px
`

const CVC = styled.input`
    font-size: 1em;
    height: 2.5em;
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-right: 1em;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px
`
const CardMonthYear = styled.select`
    width: 60px;
    font-size: 1em;
    margin-right: 1em;
    height: 2.3em;
    border-radius: 5px;
    border: none;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px
`

const CardYear = styled.select`
    width: 90px;
    font-size: 1em;
    margin-right: 1em;
    height: 2.3em;
    border-radius: 5px;
    border: none;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px
`



const ConfirmButton = styled(Button)`
    &:disabled {
        opacity: 0.3;
        transform: translateY(0px);
    }
    &:disabled:hover {
        background-color: #373737;
    }
`
const CheckBoxTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: left;
    a {
        transition: 0.3s ease;
        color: #877D70;

        &:hover {
            color: #373737;
        }
    }
`

const CheckBox = styled.input`
    
`

const ButtonWrapper = styled.div`
    margin: 1em auto 0 auto;

`

const FormTitle = styled.h2`
    margin-bottom: 1em;
    letter-spacing: 3px;
`
const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 60%;
    margin: 0 auto;
    margin-bottom: 5em;

    @media screen and (max-width: 500px) {
        max-width: 80%; 
    }
`

const Name = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2.5em;
    margin-bottom: 1em;
`

const City = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2.5em;
    margin-bottom: 1em;
`

const Mail = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2.5em;
    margin-bottom: 1em;
`

const Phone = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2.5em;
    margin-bottom: 1em;
`

const Address = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2.5em;
    margin-bottom: 1em;
`

const AddressTitle = styled.p`

`

const ZipTitle = styled.p`

`

const Zip = styled.input`
    width: 100%;
    height: 2.5em;
    border: solid #373737 1px;
    border-radius: 5px;

`

const FirstColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 1em;
`

const SecondColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const AddressWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 3em;
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
    display: flex;
    flex-direction: row;
    justify-items: flex-start;

`
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: -4.8em;
`
const TrashCan = styled(BiTrash)`
    font-size: 1.6em;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    &:hover {
        color: #877D70;
    }
`

const ProductCategory = styled.p`

`

const ProductTitle = styled.h2`
    width: 0em;
    margin: 0;
`

const TitleWrapper = styled.div`
    width: 0;
    margin-left: 1em;
`

const TotalCost = styled.p`
    margin-top: 2em;

`

const BottomRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-bottom: 5em;
`

const Cost = styled.p`
    margin-top: 2em;
    font-size: 1.2em;
    font-weight: bold;
`

const CartWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
`

const Line = styled.hr`
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5em;
    border-top: 1px solid #373737;
    opacity: 20%;

    @media screen and (max-width: 500px) {
        width: 80vw;
    }
    
`

const Wrapper = styled.div`

`

const EmptyCartText = styled.p`
    text-align:center;
    height: 50vh;
`

const TaxTitle = styled.p`
    font-size: 0.7em;
    margin-left: 2em;
`

const TaxCost = styled.p`
    font-size: 0.7em;

`