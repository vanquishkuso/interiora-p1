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
                    <div key={slug}>
                        <img
                            src={products.images[0].productImages[0].images[0].url}
                            style={{ margin: '0 auto', maxWidth: '50%' }}
                        />
                        <Link key={slug} to={`/products/${slug}`}>
                            {products.name}
                        </Link>

                    </div>
                ))}
            </ProductsWrapper>
        </Layout>
    )
}

export default IndexPage

const ProductsWrapper = styled.div`
    display: block;
`
