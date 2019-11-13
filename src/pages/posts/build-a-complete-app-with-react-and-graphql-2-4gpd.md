---
title: Build a complete app with React and GraphQL-2
date: '2019-09-19T14:58:59.228Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--FkvLrEm5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--jhBbjHhr--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/ulopc4iyw1xgn174kpey.jpeg
comments_count: 0
positive_reactions_count: 55
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/build-a-complete-app-with-react-and-graphql-2-a8512724a1a0
template: post
---
Welcome to part-2 of the series. This series have been inspired by [this](https://www.youtube.com/watch?v=ed8SzALpx1Q) youtube tutorial from freecodecamp.

We will first add another type author to **schema.js**

The changes are marked in bold. The process is almost similar to the one for books type.

    const graphql = require('graphql');
    
    const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;
    
    // Dummy data
    var books = [
        { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
        { name: 'Two States', genre: 'Drama', id: '2' },
        { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
    ];
    
    var authors = [
        { name: 'Patrick Rothfuss', age: 44, id: '1' },
        { name: 'Chetan Bhagat', age: 45, id: '2' },
        { name: 'Terry Pratchett', age: 66, id: '3' }
    ];
    
    const BookType = new GraphQLObjectType({
        name: 'Book',
        fields: ( ) => ({
            id: { type: **GraphQLID** },
            name: { type: GraphQLString },
            genre: { type: GraphQLString }
        })
    });
    
    const AuthorType = new GraphQLObjectType({
        name: 'Author',
        fields: ( ) => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            age: { type: GraphQLInt }
        })
    });
    
    const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            book: {
                type: BookType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    return books.find(item => item.id === args.id);
                }
            },
            author: {
                type: AuthorType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    return authors.find(item => item.id === args.id);
                }
            }
        }
    });
    
    
    module.exports = new GraphQLSchema({
        query: RootQuery
    });

One thing to note that we have make the id as **GraphQLID**. The difference from **GraphQLString** is that, we can pass a number also in **id**.

![number in id](https://cdn-images-1.medium.com/max/2880/1*tC1Dx2POTbJBHH1tjU4w_A.png)*number in id*

The usual string will also work.

![id is string](https://cdn-images-1.medium.com/max/2880/1*08lohVtrwwhVh8GIv0SoRg.png)*id is string*

Next, we will make the relation between the book and author types. Each book have an author, so in *book array* we add a key **authorId**, for each object corresponding to the id in *authors array*.

Also, in BookType we are adding query to get the author by using the parent’s authorId.

    …
    …
    var books = [
        { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
        { name: 'Two States', genre: 'Drama', id: '2', authorId: '2' },
        { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
    ];
    
    var authors = [
        { name: 'Patrick Rothfuss', age: 44, id: '1' },
        { name: 'Chetan Bhagat', age: 45, id: '2' },
        { name: 'Terry Pratchett', age: 66, id: '3' }
    ];
    
    const BookType = new GraphQLObjectType({
        name: 'Book',
        fields: ( ) => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            author: {
                type: AuthorType,
                resolve(parent, args){
                    return authors.find(item => item.id === parent.authorId);
                }
            }
        })
    });
    
    …
    …

Now, we can query in graphiql and get the author details also for a book.

![author details also present](https://cdn-images-1.medium.com/max/2880/1*DpSW0vVKEn4J_y_ySYLf3w.png)*author details also present*

Now, we will do the opposite. Each author have book, in fact each author can have many books. So, we have a new variable type called **GraphQLList**.

    const graphql = require('graphql');
    
    const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

    // Dummy data
    var books = [
        { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
        { name: 'Two States', genre: 'Drama', id: '2', authorId: '2' },
        { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
        { name: 'The Colour of Magic', genre: 'Fantasy', id: '4', authorId: '3' },
        { name: 'The Light Fantastic', genre: 'Fantasy', id: '5', authorId: '3' },
        { name: 'Five Point something', genre: 'Drama', id: '6', authorId: '2' },
    
    ];
    
    var authors = [
        { name: 'Patrick Rothfuss', age: 44, id: '1' },
        { name: 'Chetan Bhagat', age: 45, id: '2' },
        { name: 'Terry Pratchett', age: 66, id: '3' }
    ];
    
    const BookType = new GraphQLObjectType({
        name: 'Book',
        fields: ( ) => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            author: {
                type: AuthorType,
                resolve(parent, args){
                    return authors.find(item => item.id === parent.authorId);
                }
            }
        })
    });
    
    const AuthorType = new GraphQLObjectType({
        name: 'Author',
        fields: ( ) => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
            books: {
                type: new GraphQLList(BookType),
                resolve(parent, args){
                    return books.filter(obj => obj.authorId === parent.id);
                }
            }
        })
    });
    ...
    ...

Now, on running our query for authors, we get all his books

![author’s books](https://cdn-images-1.medium.com/max/2876/1*SObMcI7ibHl2D9on5CbHdw.png)*author’s books*

Now, what if we want all the books in our database or all authors. It is very simple using GraphQL, as we need to just update our RootQuery with **GraphQLList** as below in **schema.js**.

    …
    …
    const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            book: {
                type: BookType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    return books.find(item => item.id === args.id);
                }
            },
            author: {
                type: AuthorType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    return authors.find(item => item.id === args.id);
                }
            },
            books: {
                type: new GraphQLList(BookType),
                resolve(parent, args){
                    return books;
                }
            },
            authors: {
                type: new GraphQLList(AuthorType),
                resolve(parent, args){
                    return authors;
                }
            }
        }
    });
    
    module.exports = new GraphQLSchema({
        query: RootQuery
    });

Now, a books query will return all books.

![The books query](https://cdn-images-1.medium.com/max/2880/1*7-5DienpBRjUkSWOa_jKPg.png)*The books query*

An authors query can also be done. We can also include the book.

![authors query](https://cdn-images-1.medium.com/max/2880/1*wYpMxIm6v03GrD68YBIigw.png)*authors query*

Now, it’s time to store all our data into mongoDB. So, head over to [https://mlab.com/](https://mlab.com/) and login.

Then Create New mongoDB deployment.

![Create New mongoDB](https://cdn-images-1.medium.com/max/2880/1*oi9R6QqcSL7NnXO-jvqk9A.png)*Create New mongoDB*

Click on the Free plan.

![The free plan](https://cdn-images-1.medium.com/max/2880/1*y6-mN8LUw6nqrPQ44m_urw.png)*The free plan*

Select a Region and then click Continue.

![Select a Region](https://cdn-images-1.medium.com/max/2880/1*LlY4sZu75UC0c-S3OonJBQ.png)*Select a Region*

Give a name to your database and click continue.

![Database name](https://cdn-images-1.medium.com/max/2880/1*EWyURx9T5P6jGwGcWZ3TSA.png)*Database name*

In the next page, Submit the order.

![Submit Order](https://cdn-images-1.medium.com/max/2880/1*-BHwyYhkZvE5BbQy4E38EQ.png)*Submit Order*

Next, click on your new database.

![The new DB](https://cdn-images-1.medium.com/max/2880/1*gGjYxpskmqX-i46fV8i88w.png)*The new DB*

In **Users** tab, click on Add database user. It will open a pop-up in which you need to provide a username and password.

![username and password](https://cdn-images-1.medium.com/max/2880/1*MBnQlpY6vBuID9YZVM0qIA.png)*username and password*

Now, to connect to our database we need to use the query string highlighted below.

![Query string](https://cdn-images-1.medium.com/max/2880/1*cELsm-xyUFwgg4Q6zElPag.png)*Query string*

Now, open your terminal and stop nodemon and install mongoose.

![install mongoose](https://cdn-images-1.medium.com/max/2000/1*62VuhB8DefNVNTO_tRPTNA.png)*install mongoose*

Next, we add the code in **App.js** to connect to our database.

    const express = require('express');
    const graphqlHTTP = require('express-graphql');
    const schema = require('./schema/schema');
    const mongoose = require('mongoose');
    
    const app = express();
    
    mongoose.connect('mongodb://nabs:useyourown@ds159546.mlab.com:59546/graphql-react');
    mongoose.connection.once('open', () => {
        console.log('Conneted to database');
    });
    
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }));
    
    app.listen(4000, () => {
        console.log('Listening at port 4000');
    });

The running nodemon, will show the success message.

![Connected finally](https://cdn-images-1.medium.com/max/2000/1*jHXOrZAf9eLg1lWQf03h2A.png)*Connected finally*

Now, we need to create our mongodb schemas. So, go ahead and create a folder **models** inside **server**. Inside it we create two files — **book.js** and **author.js**

In **author.js** add below code to export an **authorSchema**.

    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    
    const authorSchema = new Schema({
        name: String,
        age: Number
    });
    
    module.exports = mongoose.model('Author', authorSchema);

In **book.js** add below code to export an **bookSchema**.

    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    
    const bookSchema = new Schema({
        name: String,
        genre: String,
        authorId: String
    });
    
    module.exports = mongoose.model('Book', bookSchema);

Next, head over to **schema.js** and delete the dummy data and all return statements with dummy data. We will add an mutation, which will be used to insert data in our database.

    const graphql = require('graphql');
    const Book = require('../models/book');
    const Author = require('../models/Author');
    
    const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;
    
    const BookType = new GraphQLObjectType({
        name: 'Book',
        fields: ( ) => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            author: {
                type: AuthorType,
                resolve(parent, args){
                    //return authors.find(item => item.id === parent.authorId);
                }
            }
        })
    });
    
    const AuthorType = new GraphQLObjectType({
        name: 'Author',
        fields: ( ) => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
            books: {
                type: new GraphQLList(BookType),
                resolve(parent, args){
                    //return books.filter(obj => obj.authorId === parent.id);
                }
            }
        })
    });
    
    const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            book: {
                type: BookType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    //return books.find(item => item.id === args.id);
                }
            },
            author: {
                type: AuthorType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    //return authors.find(item => item.id === args.id);
                }
            },
            books: {
                type: new GraphQLList(BookType),
                resolve(parent, args){
                    //return books;
                }
            },
            authors: {
                type: new GraphQLList(AuthorType),
                resolve(parent, args){
                    //return authors;
                }
            }
        }
    });
    
    const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            addAuthor: {
                type: AuthorType,
                args: {
                    name: { type: GraphQLString },
                    age: { type: GraphQLInt }
                },
                resolve(parent, args){
                    let author = new Author({
                        name: args.name,
                        age: args.age
                    });
                    return author.save();
                }
            }
        }
    });
    
    
    module.exports = new GraphQLSchema({
        query: RootQuery,
        mutation: Mutation
    });

Next, head over to graphiql to add an author with mutation.

![Author added with mutation](https://cdn-images-1.medium.com/max/2880/1*RZHzyLIOPv9OGuV5t4XsCQ.png)*Author added with mutation*

Also, check in your mlab whether that author was added.

![mlab checking](https://cdn-images-1.medium.com/max/2880/1*aTzjUSOakZ9JwmavXPvplw.png)*mlab checking*

Now, we will add mutation to add a book.

    ...
    ...

    const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            addAuthor: {
                type: AuthorType,
                args: {
                    name: { type: GraphQLString },
                    age: { type: GraphQLInt }
                },
                resolve(parent, args){
                    let author = new Author({
                        name: args.name,
                        age: args.age
                    });
                    return author.save();
                }
            },
            addBook: {
                type: BookType,
                args: {
                    name: { type: GraphQLString },
                    genre: { type: GraphQLString },
                    authorId: { type: GraphQLID }
                },
                resolve(parent, args){
                    let book = new Book({
                        name: args.name,
                        genre: args.genre,
                        authorId: args.authorId
                    });
                    return book.save();
                }
            }
        }
    });
    ...
    ...

Next, head over to graphiql to add an **book** with mutation. Notice, that the **authorId** we have to get from mlab, from the newly created author.

![book mutation](https://cdn-images-1.medium.com/max/2880/1*0xbxmj9pITu3V4xUhC_y1Q.png)*book mutation*

Add some more book and then head over to mlab to verify your additions.

![mlab checking](https://cdn-images-1.medium.com/max/2880/1*TfZPDe9FZbxJyxFWWkMIwA.png)*mlab checking*

This concludes part-2 of the series. You can find code till here in the github [link](https://github.com/nabendu82/react-graphql).


*[This post is also available on DEV.](https://dev.to/nabendu82/build-a-complete-app-with-react-and-graphql-2-4gpd)*


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
