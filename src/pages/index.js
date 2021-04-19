import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby'


const pageQuery = graphql`
{
    gcms {
        products {
            name
            slug
            price
            images {
                handle
                width
                height
              }
        }
    }
    }
`

const IndexPage = () => {
    const { gcms: { products } } = useStaticQuery(pageQuery)

    return (
        <div>
            {products.map(({ slug, ...products }) => (
                <div key={slug}>
                    <Link key={slug} to={`/products/${slug}`}>
                        {products.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default IndexPage