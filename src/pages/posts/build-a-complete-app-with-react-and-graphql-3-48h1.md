---
title: Build a complete app with React and GraphQL-3
date: '2019-09-19T15:06:17.318Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--3wMgCo_1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--0F3RQIst--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/pmdas86zu73tu5chxxqo.jpeg
comments_count: 0
positive_reactions_count: 42
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/build-a-complete-app-with-react-and-graphql-3-2abfc76564d9
template: post
---
Welcome to part-3 of the series. This series have been inspired by [this](https://www.youtube.com/watch?v=ed8SzALpx1Q) youtube tutorial from freecodecamp.

We have added two more authors and some of their books, by the mutations from part-2.

![More Books](https://cdn-images-1.medium.com/max/2880/1*mclYrJeuLwnJd32BVhg3EA.png)*More Books*

We will now update our return statements, so that our Queries works again. Now, they contain mongodb methods to get the data. So, let’s edit our **schema.js**

    …
    …
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
                    return Author.findById(parent.authorId);
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
                    return Book.find({authorId: parent.id});
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
                    return Book.findById(args.id);
                }
            },
            author: {
                type: AuthorType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    //return authors.find(item => item.id === args.id);
                    return Author.findById(args.id);
                }
            },
            books: {
                type: new GraphQLList(BookType),
                resolve(parent, args){
                    //return books;
                    return Book.find({});
                }
            },
            authors: {
                type: new GraphQLList(AuthorType),
                resolve(parent, args){
                    //return authors;
                    return Author.find({});
                }
            }
        }
    });
    …
    …

Now, let’s check whether our Queries are working correctly. First query is to get all the Books.

![Get all books](https://cdn-images-1.medium.com/max/2880/1*dcuz6RBGsSwbCd-WOHGUyw.png)*Get all books*

The next one is to get all Authors with their books.

![Get all authors](https://cdn-images-1.medium.com/max/2880/1*0mNW97cMVyHml59JRDQmzw.png)*Get all authors*

Next, is to get details of a book

![Details of a book](https://cdn-images-1.medium.com/max/2880/1*eut8p24jfJiYA5V83ZK8ig.png)*Details of a book*

And the last one is to get details of an author

![Details of an author](https://cdn-images-1.medium.com/max/2880/1*6OoAol0BQyWpl3BiuqgfKA.png)*Details of an author*

Now, there is a minor issue in our logic. We can add a new book or author, with less fields. Consider the below case, where we add a book only with it’s name.

![Junk Book](https://cdn-images-1.medium.com/max/2880/1*RBUHDZGRWGYSTgBR1Ev9JA.png)*Junk Book*

We can verify in mongoDB also.

![mongoDB verification.](https://cdn-images-1.medium.com/max/2880/1*Y0wSa0y3l2A7hyPA_d6vgQ.png)*mongoDB verification.*

Now, to avoid this we add a new GraphQL property **GraphQLNonNull**

So, open your **schema.js** and do the changes, marked in bold.

    …
    …
    const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;
    …
    …
    const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            addAuthor: {
                type: AuthorType,
                args: {
                    name: { type: new GraphQLNonNull(GraphQLString) },
                    age: { type: new GraphQLNonNull(GraphQLInt) }
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
                    name: { type: new GraphQLNonNull(GraphQLString) },
                    genre: { type: new GraphQLNonNull(GraphQLString) },
                    authorId: { type: new GraphQLNonNull(GraphQLID) }
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
    …
    …

Now, if we go to our Graphiql we won’t be able to add anything without mandatory fields.

![Not null not allowed](https://cdn-images-1.medium.com/max/2880/1*chLaXT6WbVLQHyplkfwFnA.png)*Not null not allowed*

Next, we will add front-end logic which is React in our App. So, go ahead to your root directory and create a client with **create-react-app**.

![create-react-app](https://cdn-images-1.medium.com/max/2000/1*n67bLv6hsz7lchKRersZ_w.png)*create-react-app*

Next, we start our react client.

![cd and npm](https://cdn-images-1.medium.com/max/2000/1*OuwkDN4jR8JoWnAcfVJSnQ.png)*cd and npm*

Now, we have our client running at port 3000 and server running at port 4000.

Next, we clear some of the junk which comes with react app. In your **src** folder of **client**, delete everything except **App.js**, **index.js** and

![Keep bare-bones](https://cdn-images-1.medium.com/max/2880/1*UZSq_UjI_WMGcvIJK1Jw_Q.png)*Keep bare-bones*

Also, keep the **index.js** simple as below.

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    
    ReactDOM.render(<App />, document.getElementById('root'));

Now, the **App.js** to be changed like below.

    import React from 'react';
    
    
    function App() {
      return (
        <div className="main">
          <h1>Top books to Read</h1>
        </div>
      );
    }
    
    export default App;

And the **index.css** as below.

    body {
      font-family: "Helvetica Neue", sans-serif;
    }

It will render our react app like below.

![Our React app](https://cdn-images-1.medium.com/max/2880/1*BrVEyJ5Njk5BU45MB5l6NQ.png)*Our React app*

Now, create a new folder **components** inside **src** directory and add a file **BookList.js** to it.

![BookList.js](https://cdn-images-1.medium.com/max/2878/1*nJRNxMF0RpryzAzFgVe26w.png)*BookList.js*

Next, we will add a class based component in **BookList.js**.

    import React, { Component } from 'react'
    
    class BookList extends Component {
      render() {
        return (
          <div>
              <ul className="book-list">
                <li>Book Name</li>
              </ul>
          </div>
        )
      }
    }
    
    export default BookList;

Next, add this component in **App.js**

    import React from 'react';
    import BookList from './components/BookList';
    
    function App() {
      return (
        <div className="main">
          <h1>Top books to Read</h1>
          <BookList />
        </div>
      );
    }
    
    export default App;

We will need a GraphQL client to contact, our GraphQL server and the one which we will use is Apollo.

Go ahead and stop your client and install the below packages needed for graphql client.

    npm install apollo-boost react-apollo graphql --save

![GraphQL client](https://cdn-images-1.medium.com/max/2000/1*yrHJHVagzzbdYZBTy9dxRw.png)*GraphQL client*

**Note:** Ran into an issue here, after **npm install apollo-boost react-apollo graphql — save**. Found the solution [online](https://github.com/facebook/create-react-app/issues/6398) and it was to delete **node_modules** folder inside **client** and do **yarn install**

Now, let’s start using graphql. We will edit our BookList.js file to get data from graphql server.

    import React, { Component } from 'react';
    import { gql } from 'apollo-boost';
    import { graphql } from 'react-apollo';
    
    const getBooksQuery = gql
`
        {
            books {
                name
                id
            }
        }
    `
;
    
    class BookList extends Component {
      render() {
        console.log(this.props);
        return (
          <div>
              <ul className="book-list">
                <li>Book Name</li>
              </ul>
          </div>
        )
      }
    }
    
    export default graphql(getBooksQuery)(BookList);

On checking what we are getting through console.log, we get a nasty cors error.

![cors error](https://cdn-images-1.medium.com/max/2880/1*Uq_AYQmEymfQ-m_5m75EVA.png)*cors error*

So, we will install the **cors** module in our server. Stop the server and npm install it.

![cors install](https://cdn-images-1.medium.com/max/2000/1*1Ppg_Xt5c6dt1xS_tnHyBw.png)*cors install*

Now, go to **app.js** inside **server** folder and add cors

    const express = require('express');
    const graphqlHTTP = require('express-graphql');
    const schema = require('./schema/schema');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const app = express();
    
    app.use(cors());
    
    mongoose.connect('mongodb://nabsNew:delete1@ds159546.mlab.com:59546/graphql-react');
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

Now, refresh your App and you won’t get the error.

![Won’t get cors error](https://cdn-images-1.medium.com/max/2880/1*5sMIBmTXbgAzISpru7QVCw.png)*Won’t get cors error*

Now, that we are getting our books correctly we will update our **BookList.js** to show the books on screen.

    import React, { Component } from 'react';
    import { gql } from 'apollo-boost';
    import { graphql } from 'react-apollo';
    
    const getBooksQuery = gql
`
        {
            books {
                name
                id
            }
        }
    `
;
    
    class BookList extends Component {
        displayBooks() {
            var data = this.props.data;
            if (data.loading) {
                return (<div>Loading books...</div>);
            } else {
                return data.books.map(book => {
                    return (
                        <li key={book.id}>{book.name}</li>
                    );
                })
            }
        }
    
        render() {
            console.log(this.props);
            return (
                <div>
                    <ul className="book-list">
                        {this.displayBooks()}
                    </ul>
                </div>
            )
        }
    }
    
    export default graphql(getBooksQuery)(BookList);

Here, we added a method **displayBooks**() to display the books. If you have noticed the console.log in the earlier part, the first time an empty list is rendered when **loading** is true. We get out book list only on second part when **loading** is false.

![The Loading](https://cdn-images-1.medium.com/max/2880/1*dEHtuKWGHDEEHQLGlRiLug.png)*The Loading*

This completes our call and we get all our books displayed on the App.

![Top Books to read](https://cdn-images-1.medium.com/max/2880/1*DzzLyccAUMWy2GD_fzfvvg.png)*Top Books to read*

This concludes part-3 of the series. You can find code till here in the github [link](https://github.com/nabendu82/react-graphql).


*[This post is also available on DEV.](https://dev.to/nabendu82/build-a-complete-app-with-react-and-graphql-3-48h1)*


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
