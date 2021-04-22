module.exports = {
    plugins: [
        "gatsby-plugin-styled-components",
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: `GraphCMS`,
                fieldName: `gcms`,
                url: `https://api-eu-central-1.graphcms.com/v2/cknom0fch1vfi01xmghvr0rq3/master`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data/`,
            },
        },
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Poppins`
                ],
                display: 'swap'
            }
        },
        "gatsby-plugin-transition-link"
    ],
}

//"gatsby-plugin-image",
//"gatsby-transformer-sharp",
//"gatsby-plugin-sharp",
//{
//    resolve: "gatsby-source-filesystem",
//    options: {
//        name: "images",
//        path: "./src/images/",
//    },
//    __key: "images",