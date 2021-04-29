import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Button } from '../components/Button'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import AddToCartButton from '../components/AddToCartButton'

const ProductPage = ({
    data: {
        gcms: { product },
    },

}) => (
    <Layout>
        <SEO title={product.name + " - Interiöra"} />
        <ProductsWrapper>
            <ImageColumn>
                <img src={product.images[0].url} style={{ maxWidth: "100%", borderRadius: "5px" }} alt="produktbild" />
            </ImageColumn>
            <TitelColumn>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductCategory>{product.categories[0].name}</ProductCategory>
                <ProductPrice>
                    {
                        new Intl.NumberFormat("sv-SE", {
                            style: "currency",
                            currency: "SEK",
                        }).format(product.price)
                    }
                </ProductPrice>
                <ProductDescription>{product.description}</ProductDescription>
                <ButtonWrapper>
                    <AddToCartButton product={product} />
                </ButtonWrapper>

            </TitelColumn>
        </ProductsWrapper>
    </Layout>
)

export const pageQuery = graphql`
            query ProductPageQuery($id: ID!) {
                gcms {
                    product(where: {id: $id}){
                        name
                        id
                        description
                        price
                        images {
                            handle
                            width
                            height
                            url             
                          }
                          categories {
                            name
                        }
                    }
                }
            }
`
export default ProductPage

const ProductsWrapper = styled.div`
    font-family: Roboto;
    display: grid;
    grid-template-columns: 50% 50%;
    flex-direction: row;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

    @media screen and (max-width: 500px) {
        grid-gap: 0em;
        padding: 1em;
        flex-direction: column;
        grid-template-columns: 1fr;
    }
`

const ImageColumn = styled.div`
    width: 100%;
    padding: 1em;
`

const TitelColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    justify-items: flex-start;
`

const ProductTitle = styled.h1`

`

const ProductDescription = styled.p`
    margin-top: 1em;
`

const ProductPrice = styled.p`
    margin-top: 18px;
    font-size: 1.28em;
`

const ButtonWrapper = styled.div`
    margin-top: 3em;
    margin-right: 0;

    @media screen and (max-width: 500px) {
        text-align: center;
        margin-bottom: 5em;
    }
`

const ProductCategory = styled.p`

`