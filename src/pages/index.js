import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby'
import GCMSImg from 'graphcms-image';

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
                    {console.log(products.images)}
                    <GCMSImg
                        image={products.images}
                        style={{ margin: '0 auto', maxWidth: '50%' }}
                    />
                    <Link key={slug} to={`/products/${slug}`}>
                        {products.name}
                    </Link>

                </div>
            ))}
        </div>
    )
}

export default IndexPage