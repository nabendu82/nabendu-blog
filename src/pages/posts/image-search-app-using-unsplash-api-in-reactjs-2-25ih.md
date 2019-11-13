---
title: Image Search App using unsplash API in ReactJS -2
date: '2019-09-15T05:03:17.727Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--lM8SR5ak--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--EB2HEmLd--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/klu7u31l02ynuklm0hyd.jpeg
comments_count: 0
positive_reactions_count: 7
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/image-search-app-using-unsplash-api-in-reactjs-2-8ce777f9171d
template: post
---
Welcome to part-2 to the series. We will start from where we left in part-1.

We will work on **SearchBar.js** file and use the standard React syntax to handle form.

    import React from 'react';
    import './SearchBar.css';
    
    class SearchBar extends React.Component {
        state = { val: '' }
    
        onInputChange = (event) => {
            this.setState({ val: event.target.value })
        }
    
        onFormSubmit = (event) => {
            event.preventDefault();
            console.log(this.state.val);
        }
    
        render() {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit}  className="flexContainer">
                        <label><h2>Image Search: </h2></label>
                        <input
                            className="inputStyle"
                            type="text"
                            value={this.state.val}
                            onChange={this.onInputChange}
                        />
                    </form>
                </div>
            )
        }
    }
    
    export default SearchBar;

Here, the bold things are changed. Details of this whole logic can be found, in another of my blog post at this [link](https://dev.to/nabendu82/interview-preparation-react-redux-2-2ohj). Check **Question 50** and **Question 51**.

We can see this in action by typing anything in Search Bar and pressing enter. It will console log the same.

![Magic of Arrow Function](https://cdn-images-1.medium.com/max/2880/1*IJ0KSUCJ-9TPQY_eIPJJuA.png)*Magic of Arrow Function*

Now, we will start implementing the logic to use our Search term entered by the user. We could use the Search Term(*this.state.val*) in our Search Component only, but we will pass it Back to Parent App component. We want the image list to be shown by a different component ImageList.

For this we will first change our **App.js** to a class based component, as we have to deal with state later on.

    import React from 'react';
    import SearchBar from './SearchBar';
    
    class App extends React.Component  {
        onSearchSubmit(term) {
            console.log(term);
        }
    
        render() {
            return (
                <div>
                    <SearchBar userSubmit={this.onSearchSubmit}/>
                </div>
            )
        }
    
    }
    
    export default App;

In the above code the new terms are marked in bold. Here, we are passing a *prop* to SearchBar component called **userSubmit**. It calls a callback function **onSearchSubmit**.

Now in our **SearchBar.js** file, we will change the **onFormSubmit** method to send the user entered Search term in **this.state.val** through the props **userSubmit** to App.js

    onFormSubmit = (event) => {
            event.preventDefault();
            this.props.userSubmit(this.state.val);
        }

Now, on entering anything in our Search bar and then pressing enter, we get the console.log from our App.js file. Details of this whole logic can be found, in another of my blog post at this [link](https://dev.to/nabendu82/interview-preparation-react-redux-2-2ohj). Check **Question 52.**

![console from App.js](https://cdn-images-1.medium.com/max/2880/1*ELhlxs_45zrB3NvVvSXulA.png)*console from App.js*

Now, it’s time to load some real data from *unsplash api*. The idea is to take the Search term entered in the Search Bar and use it. Then search those pictures in unsplash and show those pictures in our App.

So, head over to [https://unsplash.com/developers](https://unsplash.com/developers) and register as a developer. Once, you register, it will show the below page.

![unsplash register](https://cdn-images-1.medium.com/max/2880/1*b-XabJ0OUez0CshwGxXjoQ.png)*unsplash register*

Now, click on New Application and it will ask for some basic things to be checked. Check the same as below screenshot.

![Basic Checks](https://cdn-images-1.medium.com/max/2878/1*-kX3LVWQkrm8NdERhnptTg.png)*Basic Checks*

And then scroll down and click on **Accept Terms**. It will open the below popup, where you have to enter your **Application Name** and **Description**.

![Accept Term](https://cdn-images-1.medium.com/max/2880/1*luygHbn1sjy7uxlux_RpCA.png)*Accept Term*

Once you click on **Create application**, it will take you to the completion page. Here you will find the **Access Keys**. Copy it by clicking on the clipboard. Mine is hidden, as you show create your own.

![Access Keys hidden](https://cdn-images-1.medium.com/max/2880/1*BrnILw3rF0mY8GuKN8iEZg.png)*Access Keys hidden*

Now, we will create the AJAX client to call the unsplash API. We will use the popular third party library **axios** as our AJAX client. We have to install axios first, so head over to your terminal. Close the running app(the npm start) by pressing *Ctrl+c* and type *npm install — save axios*

![axios install](https://cdn-images-1.medium.com/max/2000/1*kwzz1iX-oAxkWG0aeRGCtQ.png)*axios install*

Don’t forget to start the app again by **npm start**

Now, we will go to our App.js and use axios to make API call to unsplash.

    import React from 'react';
    import axios from 'axios';
    import SearchBar from './SearchBar';
    
    class App extends React.Component  {
        onSearchSubmit(term) {
            axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term},
                headers: {
                    Authorization: 'Client-ID YOUR_ACCESS_KEY'
                }
            })
        }
    
        render() {
            return (
                <div>
                    <SearchBar userSubmit={this.onSearchSubmit}/>
                </div>
            )
        }
    
    }
    
    export default App;

Here, we are importing axios first. Then we are using the *axios.get* method. The endpoint of [https://api.unsplash.com/search/photos](https://api.unsplash.com/search/photos) and other details are from unsplash api [documentation](https://unsplash.com/documentation).

In the above code in place of **YOUR_ACCESS_KEY** ,use the **Access Keys** you got while creating the app in unsplash site.

Now head to your [http://localhost:3000/](http://localhost:3000/) and open the developer console. In developer console, open the *Network tab*. Now search for any item and you will see a network request been made, as in screenshot below.

![Network Request.](https://cdn-images-1.medium.com/max/2880/1*BGZC7aJ32w6I2SXL8Bv9FQ.png)*Network Request.*

This concludes part-2 of the series. 

*[This post is also available on DEV.](https://dev.to/nabendu82/image-search-app-using-unsplash-api-in-reactjs-2-25ih)*


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
