import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Button } from '../components/Button'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import AddToCartButton from '../components/AddToCartButton'
import MiniBanner from "../components/MiniBanner"

const CategoryPage = ({

    data: {
        gcms: { products },
    },


}) => (

    <Layout>
        <Hero title={products[0].categories[0].name} paragraph={products[0].categories[0].description} />
        <SEO title={products[0].categories[0].name + " - Interiöra"} />
        <ProductsWrapper id="product-section">
            {

                products.slice(0, 3).map(({ slug, ...products }) => (
                    <Product>
                        <ImageWrapper>
                            <ImageLink to={`/produkt/${slug}`}>
                                <img
                                    src={products.images[0].url}
                                    style={{
                                        width: '100%',
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

        {
            products.slice(0, 1).map(({ slug, ...products }) => (
                <MiniBannerWrapper>
                    <MiniBanner title={products.name} paragraph={products.description} picturesrc={products.images[0].url} buttonBannerText={`Till produkten`} linkTextTarget={`/produkt/${slug}`} />
                </MiniBannerWrapper>

            ))
        }

        <ProductsWrapper>
            {
                products.slice(3, 6).map(({ slug, ...products }) => (
                    <Product>
                        <ImageWrapper>
                            <ImageLink to={`/produkt/${slug}`}>
                                <img
                                    src={products.images[0].url}
                                    style={{
                                        width: '100%',
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

    </Layout>
)
// filter(data => data.categories[0].name.includes(document.title.substr(0, document.title.indexOf(" ")))

// .filter(data => data.categories[0].name.includes("Lampor")

// <Hero title={products.categories[0].name} paragraph={products.categories[0].description} />
// <SEO title={products.categories[0].name + " - Interiöra"} />

export const pageQuery = graphql`
query CategoryPageQuery($id: ID!) {
    gcms {
        products(where: {categories_every: {id: $id}}) {
          id
          name
          slug
          price
          description
          categories {
              name
              description
          }
          images {
              url
          }
        }
      }
    }
`

//export const pageQuery = graphql`
//query CategoryPageQuery($id: ID!) {
//    gcms {
//        categories {
//            name
//            id
//            slug
//            description
//        }
//        products {
//            name
//            id
//            description
//            price
//            images {
//                handle
//                width
//                height
//                url             
//              }
//              categories(where: {id: $id}) {
//                name
//                id
//            }
//        }
//    }
//}
//`



export default CategoryPage

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 1em;
    margin-top: 1em;
    transition: 0.3s ease;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
        padding: 0;
        text-align: center;
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
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
}
`

const Price = styled.p`
    font-size: 1em;
    margin-right: 0em;
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

const MiniBannerWrapper = styled.div`
    margin-top: 2em;

    @media screen and (max-width: 500px) {
        margin-top: 3em;
    }
`
