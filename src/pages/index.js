import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby'

const pageQuery = graphql`
{
    gcms {
        products {
            name
            slug
            price
        }
    }
    }
`

const IndexPage = () => {
    const { gcms: { products } } = useStaticQuery(pageQuery)

    return (
        <div>
            {products.map(({ slug, ...products }) => (
                <Link key={slug} to={`/products/${slug}`}>
                    {products.name}
                </Link>
            ))}
        </div>
    )
}

export default IndexPage