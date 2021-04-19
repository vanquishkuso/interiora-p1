import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from '../components/Seo'
import Hero from '../components/Hero'

const pageQuery = graphql`
{
    gcms {
        products {
            name
            slug
            price
            images {
                productImages {
                    images {
                      url
                    }
                  }
              }
        }
    }
    }
`

const IndexPage = () => {
    const { gcms: { products } } = useStaticQuery(pageQuery)

    return (
        <Layout>
            <SEO title="Hem" />
            <Hero />
            <ProductsWrapper>
                {products.map(({ slug, ...products }) => (
                    <Product>
                        <img
                            src={products.images[0].productImages[0].images[0].url}
                            style={{ maxWidth: '90%', borderRadius: '5px' }}
                        />
                        <Link key={slug} to={`/products/${slug}`}>
                            {products.name}
                        </Link>
                        <Price>{products.price}</Price>
                    </Product>
                ))}
            </ProductsWrapper>
        </Layout>
    )
}

export default IndexPage

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (max-width: 500px) {
    grid-template-columns: auto;
    padding: 1rem;
}
`

const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 500px) {
        margin-bottom: 5em;
}
`

const Price = styled.p`

`