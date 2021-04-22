exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const { data: { gcms: { products, categories } } } = await graphql(`
    {
        gcms {
            products(stage: PUBLISHED) {
                id
                slug
            }
            categories(stage: PUBLISHED) {
                id
                slug
            }
        }
    }`)

    //const { data: { gcms: { products: { categories } } } } = await graphql(`
    //{
    //    gcms {
    //        products(stage: PUBLISHED) {
    //            categories(stage: PUBLISHED) {
    //                id
    //                name
    //                slug
    //            }
    //        }
    //    }
    //}`)

    // const { data: { gcms: { products: { categories } } } } = await graphql(`
    // {
    //     gcms {
    //         products(stage: PUBLISHED) {
    //             categories {
    //                 id
    //                 slug
    //                 name
    //             }
    //         }
    //     }
    // }`)

    products.forEach(({ id, slug }) => createPage({
        path: `/produkt/${slug}`,
        component: require.resolve(`./src/templates/ProductPage.js`),
        context: {
            id
        }
    }))

    categories.forEach(({ id, slug }) => createPage({
        path: `/kategori/${slug}`,
        component: require.resolve(`./src/templates/CategoryPage.js`),
        context: {
            id
        }
    }))




}