import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import { Button } from '../components/Button'
import AddToCartButton from '../components/AddToCartButton'

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

    return (
        <Layout>
            <SEO title="Interiöra" />
            <Hero />
            <ProductsWrapper id="product-section">
                {products.map(({ slug, ...products }) => (
                    <Product>
                        <ImageWrapper>
                            <ImageLink to={`/products/${slug}`}>
                                <img
                                    src={products.images[0].url}
                                    style={{
                                        maxWidth: '100%',
                                        borderRadius: '5px',

                                    }}
                                />
                            </ImageLink>
                        </ImageWrapper>
                        <LinkWrapper>
                            <TextWrapper>
                                <LinkItem key={slug} to={`/products/${slug}`}>
                                    {products.name}
                                </LinkItem>
                                <Category>{products.categories[0].name}</Category>
                            </TextWrapper>
                            <Price>{products.price} kr</Price>
                        </LinkWrapper>
                        <ButtonWrapper>
                            <AddToCartButton product={products} />
                        </ButtonWrapper>
                    </Product>
                ))}
            </ProductsWrapper>
        </Layout>
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
    padding: 1rem;
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
        margin-bottom: 2em;
}
`

const Price = styled.p`
    font-size: 1.2em;
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
`