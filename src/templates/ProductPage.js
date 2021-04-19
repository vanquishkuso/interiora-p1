import React from 'react'
import { graphql } from 'gatsby'
//import GCMSImg from 'graphcms-image'
import GraphIMG from 'graphcms-image'
import Image from '@graphcms/react-image'

const ProductPage = ({
    data: {
        gcms: { product },
    },
}) => (

    <React.Fragment>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <GraphIMG image={product.images} maxwidth={800} />
        <img src={product.images} alt="1" />
        <img src={product.images.url} alt="2" />
        <img src={product.images.handle} alt="3" />
        <img src={product.images.fileName} alt="4" />
        <img image={product.images} alt="5"></img>
        <Image image={product.images} maxWidth={800} />


        <p>{product.images.url}</p>
        <p>{product.images.handle}</p>
        <p> dasd {product.images.fileName}</p>

        <p>
            {
                new Intl.NumberFormat("sv-SE", {
                    style: "currency",
                    currency: "SEK",
                }).format(product.price)
            }
        </p>
    </React.Fragment>
)

export const pageQuery = graphql`
            query ProductPageQuery($id: ID!) {
                gcms {
                    product(where: {id: $id}){
                        name
                        description
                        price
                        images {
                            fileName
                            handle
                            url                
                          }
                    }
                }
            }
`
export default ProductPage