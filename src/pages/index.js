import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import { Button } from '../components/Button'
import AddToCartButton from '../components/AddToCartButton'
import Lampor from '../assets/images/Lampor.jpg'
import MiniBanner from '../components/MiniBanner'

const pageQuery = graphql`
{
    gcms {
        products {
            id
            name
            slug
            price
            categories {
                name
            }
            images {
                url    
            }
        }
    }
}
`
const IndexPage = () => {
    const { gcms: { products } } = useStaticQuery(pageQuery)

    let first_content = 6
    let second_content = 12

    useEffect(() => {
        localStorage.setItem("allProducts", JSON.stringify(products))
    })
    return (
        <Layout>
            <SEO title="Interiöra" />
            <Hero title={"Interiöra"} paragraph={"Minimalism när den är som bäst"} />
            <ProductsWrapper id="product-section">
                {products.slice(0, 6).map(({ slug, ...products }, i) => (
                    <Product>

                        <ImageWrapper>
                            <ImageLink to={`/produkt/${slug}`}>
                                <img
                                    src={products.images[0].url}
                                    style={{
                                        maxWidth: '100%',
                                        borderRadius: '5px',

                                    }}
                                />
                            </ImageLink>
                        </ImageWrapper>
                        <Price>{products.price}&nbsp;kr</Price>
                        <LinkWrapper>

                            <TextWrapper>
                                <LinkItem key={slug} to={`/produkt/${slug}`}>
                                    {products.name}
                                </LinkItem>
                                <Category>{products.categories[0].name}</Category>
                            </TextWrapper>

                        </LinkWrapper>
                        <ButtonWrapper>
                            <AddToCartButton product={products} />
                        </ButtonWrapper>
                    </Product>
                ))}
            </ProductsWrapper>

            <MiniBannerWrapper>
                <MiniBanner title={"Fynda på fina soffor"} linkTextTarget={`/kategori/soffor`} buttonBannerText={"Till sofforna"} picturesrc={"https://media.graphcms.com/YkJlZKMHQij8e4lXwX6b"} />
            </MiniBannerWrapper>

            <ProductsWrapper>

                {products.slice(6, 12).map(({ slug, ...products }, i) => (
                    <Product>

                        <ImageWrapper>
                            <ImageLink to={`/produkt/${slug}`}>
                                <img
                                    src={products.images[0].url}
                                    style={{
                                        maxWidth: '100%',
                                        borderRadius: '5px',

                                    }}
                                />
                            </ImageLink>
                        </ImageWrapper>
                        <Price>{products.price}&nbsp;kr</Price>
                        <LinkWrapper>
                            <TextWrapper>
                                <LinkItem key={slug} to={`/produkt/${slug}`}>
                                    {products.name}
                                </LinkItem>
                                <Category>{products.categories[0].name}</Category>
                            </TextWrapper>

                        </LinkWrapper>
                        <ButtonWrapper>
                            <AddToCartButton product={products} />
                        </ButtonWrapper>
                    </Product>

                ))}
            </ProductsWrapper>

            <MiniBannerWrapper>
                <MiniBanner title={"Kolla in våra nya dekorationer"} linkTextTarget={`/kategori/dekoration`} buttonBannerText={"Till dekorationerna"} picturesrc={"https://media.graphcms.com/6XpZNGu5S1Kef4aG6O8G"} />
            </MiniBannerWrapper>

        </Layout >
    )
}

export default IndexPage

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 1em;
    margin-top: 1em;
    transition: 0.3s ease;

    @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    text-align: center;
    padding: 0;
    
}
`

const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    margin-bottom: 2em;
    transition: 0.3s ease;

    @media screen and (max-width: 500px) {
        padding: 0;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
}
`

const Price = styled.p`
    font-size: 18px;
`

const MiniBannerWrapper = styled.div`
    margin-top: 2em;

    @media screen and (max-width: 500px) {
        margin-top: 3em;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 0.2em;
`

const LinkItem = styled(Link)`
    text-decoration: none;
    color: #373737;
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 0.03em;
`

const ImageLink = styled(Link)`
    
`

const ButtonWrapper = styled.div`
    margin: 0 auto;
    padding: 1em;
`

const ImageWrapper = styled.div`
transition: 0.3s ease;
    filter: brightness(80%);
 

    &:hover {
        filter: brightness(100%);
    }
`

const Category = styled.div`

`

const TextWrapper = styled.div`
    line-height: 1.5;
    text-align: center;
`