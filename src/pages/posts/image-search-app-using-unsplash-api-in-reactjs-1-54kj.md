---
title: Image Search App using unsplash API in ReactJS -1
date: '2019-09-15T04:51:16.336Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--4L3WX_rQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--jO0yA4YI--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/ls5cg0yg3ckfx7x46zup.jpeg
comments_count: 0
positive_reactions_count: 9
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/image-search-app-using-unsplash-api-in-reactjs-1-bb75c4a39a67
template: post
---
Welcome to the brand new series to build an web app from scratch using ReactJS. We will be using the latest ReactJS syntax of 2019 to create this app. This app have been created from the learning from the great course *Modern React with Redux* by *Stephen Grider* on udemy. You can find the link [here](https://www.udemy.com/react-redux/).

Let’s start building our app. Go, to your terminal and create a brand new app by *npx create-react-app image-search*. This command only works, if you have npm 5.2+. Head on to this [link](https://github.com/facebook/create-react-app) to learn more about this wonderful tool by facebook and the other way to create a new react app.

![create-react-app](https://cdn-images-1.medium.com/max/2000/1*OJJm9wSW9iYwokDoWixmdw.png)*create-react-app*

Now, you will get the *Happy Hacking* message and the instruction if successful. We will cd to the newly created folder and do a *npm start*.

![Happy hacking](https://cdn-images-1.medium.com/max/2000/1*Zyg2JUfOZ8P-EWz16CFVIg.png)*Happy hacking*

If the compiling is successful, you will get the below message.

![Successful](https://cdn-images-1.medium.com/max/2000/1*EprxV63RosjrgDWHqLww5w.png)*Successful*

It will open automatically [http://localhost:3000/](http://localhost:3000/) or you open it in any modern browser. It will show the basic React app.

![Basic React app](https://cdn-images-1.medium.com/max/2880/1*TwxpoUbDNJgkTYLJZnj25Q.png)*Basic React app*

Now, React is all about dividing our app into components. Here, also we will have two main components — SearchBar and ImageList.

Open the project in VSCode. Select everything inside src folder(as in screenshot below) and delete it.

![Start new](https://cdn-images-1.medium.com/max/2880/1*hRp3Za2vgl5VvRLAyLoZkg.png)*Start new*

Next, create a new folder *components* inside *src* and a file *App.js* inside it. Also, create *index.js* in *src* folder.

In App.js we create a basic functional component now. Type the following code in **App.js**.

    import React from 'react';
    
    const App = () => {
        return (
            <div>App</div>
        )
    }
    
    export default App;

Goto index.js and render this App.js in it. Type the following code in **index.js**.

    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';
    
    ReactDOM.render(<App />, document.querySelector('# root'));

This will now show the text App on our localhost like below.

![Basic app](https://cdn-images-1.medium.com/max/2880/1*ptpS0Y9DthFtur9Z1By1TQ.png)*Basic app*

We will now create **SearchBar.js** file inside our component folder. It will be a basic class based component, which will have a input field inside a form.

    import React from 'react';
    
    class SearchBar extends React.Component {
        render() {
            return (
                <div>
                    <form>
                        <input type="text" />
                    </form>
                </div>
            )
        }
    }
    
    export default SearchBar;

Head over to **App.js** now to render our SearchBar component.

    import React from 'react';
    import SearchBar from './SearchBar';
    
    const App = () => {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
    
    export default App;

Now, our tiny SearchBar shows in localhost. We are going to style it soon.

![Tiny Searchbar at top-left corner](https://cdn-images-1.medium.com/max/2880/1*Wk5RUqw6ze4Yd8DN9KMY6w.png)*Tiny Searchbar at top-left corner*

Lets style a bit our SearchBar now will good old CSS. Headover to **SearchBar.js** and give some *classNames*, which we will use in our css file.

    import React from 'react';
    **import './SearchBar.css';**
    
    class SearchBar extends React.Component {
        render() {
            return (
                <div>
                    <form **className="flexContainer"**>
                        <label>**<h2>**Image Search: **</h2>**</label>
                        <input **className="inputStyle"** type="text" />
                    </form>
                </div>
            )
        }
    }
    
    export default SearchBar;

Now create a file **SearchBar.css** in the same directory and add some styles as below.

    .flexContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }
    
    .inputStyle{
        font-size: 1.5em;
        padding: 3px;
        display: inline-block;
        width: 30%;
    }

These simple CSS now make our SearchBar a bit more styled. Headover, to localhost to see our changes.

![Styled SearchBar](https://cdn-images-1.medium.com/max/2880/1*pFyMe-Hw9-x-z28iPAE2Kw.png)*Styled SearchBar*

This concludes Part-1 of the series.

*[This post is also available on DEV.](https://dev.to/nabendu82/image-search-app-using-unsplash-api-in-reactjs-1-54kj)*


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
