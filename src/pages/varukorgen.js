import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { BiTrash } from 'react-icons/bi'

const CartPage = () => {
    const [getCart, setGetCart] = useState(JSON.parse(localStorage.getItem("products")))
    const [cart, setCart] = useState([]);
    const [newCart, setNewCart] = useState([]);

    const handleRemove = (id) => {
        setCart(newCart.filter((el) => el.id !== id))
    }

    useEffect(() => {
        let fetchData;
        if (getCart === null) {
            fetchData = (
                <div>Din varukorgen är tom</div>
            )
        } else {
            fetchData = (
                getCart.map((data, i) => {
                    return (
                        <ProductWrapper key={data.id}>
                            <LeftColumn>
                                <img src={data.img} alt="" style={{
                                    height: "100px",
                                    width: "100px",
                                    borderRadius: "10px",
                                    filter: "brightness(100%)",
                                    transition: "0.3s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                }} />
                                <h3 style={{ marginLeft: "10px" }}>{data.item}</h3>
                                <Category>{data.category}</Category>
                            </LeftColumn>
                            <RightColumn>
                                <h3>{data.price}</h3>
                                <TrashCan onClick={() => {
                                    handleRemove(data.id)

                                }} />
                            </RightColumn>
                        </ProductWrapper>
                    )
                })
            )
        }
        setCart(fetchData)
    }, [getCart])
    return (
        <Layout>
            <SEO title="Varukorgen - Interiöra" />
            <h1>Varukorgen</h1>
            {cart}
        </Layout >
    )
}

export default CartPage

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
`
const LeftColumn = styled.div`
    display: flex;
`
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`
const TrashCan = styled(BiTrash)`
    font-size: 1.6em;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        color: #877D70;
    }
`

const Category = styled.p`

`
