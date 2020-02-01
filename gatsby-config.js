module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {

            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
                menus: require('./src/data/menus.json'),
            }
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: 'https://nabendu.blog/',
                sitemap: 'https://nabendu.blog/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-152725098-1",
            }
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `https-nabendu-blog`
            }
        },
        {
            resolve: "gatsby-plugin-mailchimp",
            options: {
                endpoint: "https://blog.us4.list-manage.com/subscribe/post?u=5c156d7649897240e9c994d38&amp;id=67f40851e0",
            },
        }
    ]
};
