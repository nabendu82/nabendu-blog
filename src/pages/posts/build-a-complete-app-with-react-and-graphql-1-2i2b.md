---
title: Build a complete app with React and GraphQL-1
date: '2019-09-19T14:50:48.316Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--l0SKpNq---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--BODjsEsQ--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/qgxwt0vhbo00citvuh07.jpeg
comments_count: 1
positive_reactions_count: 163
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/build-a-complete-app-with-react-and-graphql-1-f8aff5f1ecc1
template: post
---
We are starting a new series and it’s about the latest GraphQL. Here we built an App, with React in the frontend and GraphQL in place of REST API.

This series have been inspired by [this](https://www.youtube.com/watch?v=ed8SzALpx1Q) youtube tutorial from freecodecamp. We will be using the below techs.

![Our Tech](https://cdn-images-1.medium.com/max/2000/1*lFAECmMwm3HQs1eydeubKA.png)*Our Tech*

Lets start right with our App. Open up your terminal and create a directory **react-graphql** and then a directory **server** inside it. Inside the server directory do **npm init** to create a **package.json** file. Press enter for everything to choose the default option.

![npm init](https://cdn-images-1.medium.com/max/2000/1*ImRV3T18KzOXrML2qPNLIQ.png)*npm init*

Next we will install express.

![install express](https://cdn-images-1.medium.com/max/2000/1*5e1mYGOeLhcsZDKIvqGj6w.png)*install express*

Now, open up your code editor and create a new file **app.js** in the **server** directory. The content for the same is below.

    const express = require('express');
    
    const app = express();
    
    app.listen(4000, () => {
        console.log('Listening at port 4000');
    });

After this go to your terminal and start the server by **node app.js**

![express server](https://cdn-images-1.medium.com/max/2000/1*NbKJJvGPAnVYhz35KS5cXA.png)*express server*

But, we will not run the express server by node, but instead a npm package called **nodemon**. This package keeps track of any changes to our server code and restarts the server.

![install nodemon](https://cdn-images-1.medium.com/max/2000/1*xZbgb_pSJpQeTAZeGxp9_A.png)*install nodemon*

We will again start our server by **nodemon app.js**

![nodemon app.js](https://cdn-images-1.medium.com/max/2000/1*qQk4G5zXMxR4zC1EdLEzmQ.png)*nodemon app.js*

Next, we will install two more packages of **graphql** and **express-graphql**

![graphql](https://cdn-images-1.medium.com/max/2000/1*37Dp7_A9eQRgMvPRnkv6mQ.png)*graphql*

Now, create a new folder **schema** inside **server** and then a new file **schema.js** inside it.

![schema.js](https://cdn-images-1.medium.com/max/2880/1*FowWcJ-jupy6x-qYGrS3bA.png)*schema.js*

In **schema.js** put the below code. Here, we are first defining a type **BookType** and then a query called **RootQuery** to query it.

    const graphql = require('graphql');
    
    const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
    
    const BookType = new GraphQLObjectType({
        name: 'Book',
        fields: ( ) => ({
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            genre: { type: GraphQLString }
        })
    });
    
    const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            book: {
                type: BookType,
                args: { id: { type: GraphQLString } },
                resolve(parent, args){
                    // code from Database
    
                }
            }
        }
    });
    
    module.exports = new GraphQLSchema({
        query: RootQuery
    });

Now, we will use the same in our **app.js**

    const express = require('express');
    const graphqlHTTP = require('express-graphql');
    const schema = require('./schema/schema');
    
    const app = express();
    
    app.use('/graphql', graphqlHTTP({
        schema
    }));
    
    app.listen(4000, () => {
        console.log('Listening at port 4000');
    });

Next, we will add some dummy data in our **schema.js** as our database is still not ready. And also inside our resolve, we will use find to return the book whose id have been passed as args.

    const graphql = require('graphql');
    
    const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
    
    // Dummy data
    var books = [
        { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
        { name: 'Two States', genre: 'Drama', id: '2' },
        { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
    ];
    
    const BookType = new GraphQLObjectType({
        name: 'Book',
        fields: ( ) => ({
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            genre: { type: GraphQLString }
        })
    });
    
    const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            book: {
                type: BookType,
                args: { id: { type: GraphQLString } },
                resolve(parent, args){
                    // code from Database - right now dummy data
                    return books.find(item => item.id === args.id);
    
                }
            }
        }
    });
    
    module.exports = new GraphQLSchema({
        query: RootQuery
    });

Next, we will use the amazing **graphiql** tool to check our query as our front-end is not ready yet. We will need to configure it first in

    const express = require('express');
    const graphqlHTTP = require('express-graphql');
    const schema = require('./schema/schema');
    
    const app = express();
    
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }));
    
    app.listen(4000, () => {
        console.log('Listening at port 4000');
    });

Next, go to [http://localhost:4000/graphql](http://localhost:4000/graphql) in browser and you will see the graphiql tool.

![Graphiql](https://cdn-images-1.medium.com/max/2880/1*o5qexjGEvT_zg_NwZDQvaQ.png)*Graphiql*

Click on the **Docs** on the top right corner and you will get the documentation of the queries available to this server.

Now, we can query the **GraphQL** server for book with id of **2** and it will return it. We need to update the query in the editor and press **play** button.

![id 2](https://cdn-images-1.medium.com/max/2880/1*eIL69x_PyWVSIwvvG_V-Ow.png)*id 2*

Same for id of 3, but don’t want id in return statement.

![id 3](https://cdn-images-1.medium.com/max/2880/1*KT2lVUooJAvXnLaj7zE7hQ.png)*id 3*

If we query an non-existent id then we will get **null**

![non-existent id 4](https://cdn-images-1.medium.com/max/2880/1*iYIvO6wPd7wbFduVOTVIag.png)*non-existent id 4*

This concludes part-1 of the series. You can find code till here in the github [link](https://github.com/nabendu82/react-graphql).



*[This post is also available on DEV.](https://dev.to/nabendu82/build-a-complete-app-with-react-and-graphql-1-2i2b)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    
