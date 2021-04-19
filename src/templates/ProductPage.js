import React from 'react'
import { graphql } from 'gatsby'
import GCMSImg from 'graphcms-image';
import GraphImg from "@graphcms/react-image";


const ProductPage = ({
    data: {
        gcms: { product },
    },
}) => (

    <React.Fragment>

        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <img src={product.images[0].url} style={{ maxWidth: "50%" }} alt="produktbild" />
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
                            handle
                            width
                            height
                            url             
                          }
                    }
                }
            }
`
export default ProductPage