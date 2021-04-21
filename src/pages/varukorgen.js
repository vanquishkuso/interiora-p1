import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { BiTrash } from 'react-icons/bi'

const CartPage = () => {
    const [getCart, setGetCart] = useState(JSON.parse(localStorage.getItem("products")))
    const [cart, setCart] = useState([])
    const [cartCost, setCartCost] = useState(null)
    const [updateCart, setUpdateCart] = useState(false)

    const handleRemove = (id) => {
        setGetCart(getCart.filter((el) => el.id !== id))
        const filtered = getCart.filter(item => item.id !== id)
        localStorage.setItem("products", JSON.stringify(filtered))
        //   setUpdateCart(true)
    }

    const handleTotalCost = (price) => {

    }

    const handleCalc = (e) => {
        console.log(cartCost)
        console.log(cart)
        console.log(getCart)
    }

    useEffect(() => {
        let fetchData;



        if (getCart === null || getCart.length === 0) {
            fetchData = (
                <EmptyCartText>Din varukorg är tom</EmptyCartText>
            )
        } else {
            fetchData = (
                getCart.map((data, i) => {
                    setCartCost(prevCartCost => prevCartCost + data.price)
                    /*   if (updateCart === true) {
                           setCartCost(prevCartCost => prevCartCost - data.price)
                       }
   
                       if (updateCart === false) {
                           setCartCost(prevCartCost => prevCartCost + data.price)
                       }
   */
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
                                    <h3>{data.price}</h3>
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
    return (
        <Layout>
            <SEO title="Varukorgen - Interiöra" />
            <Title>Varukorgen</Title>

            <CartWrapper>
                {cart}


                {cartCost ? <BottomRow><TotalCost>Totalt</TotalCost><Cost>{cartCost}</Cost></BottomRow> : null}


            </CartWrapper>
            <button onClick={handleCalc}>Räkna ut</button>
        </Layout >
    )
}

export default CartPage

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 3em;
    margin-left: 1.8em;
`

const Title = styled.h1`
    margin-left: 5.8em;
    margin-top: 1em;
    margin-bottom: 2.5em;
`

const LeftColumn = styled.div`
    display: flex;
    justify-items: flex-start;

`
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 3.5em;
`
const TrashCan = styled(BiTrash)`
    font-size: 1.6em;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        color: #877D70;
    }
`

const ProductCategory = styled.p`

`

const ProductTitle = styled.h2`
    width: 0em;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1em;
`

const TotalCost = styled.p`
    margin-top: 2em;

`

const BottomRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
`

const Cost = styled.p`
    margin-top: 2em;
`

const CartWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
`

const Line = styled.hr`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5em;
    border-top: 1px solid #373737;
    opacity: 20%;

`

const Wrapper = styled.div`

`

const EmptyCartText = styled.p`
text-align:center;
`