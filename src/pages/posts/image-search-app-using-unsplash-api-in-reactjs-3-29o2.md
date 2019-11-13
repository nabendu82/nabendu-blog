---
title: Image Search App using unsplash API in ReactJS -3
date: '2019-09-15T05:13:37.823Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--2mJfwnWD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--2MxHvDYU--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/o3od32yq6v2lgpl4bq9t.jpeg
comments_count: 0
positive_reactions_count: 7
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/image-search-app-using-unsplash-api-in-reactjs-3-fa69a67dfa2e
template: post
---
Welcome to part-3 to the series. We will start from where we left in part-2.

The network request in part-2 using axios, is an async request. It is because it will take sometime to reach unsplash and get our list of images.

The axios request always returns us a *promise*. Now, there is an old way to get it using the .*then* function. But we will use the new and more efficient *async-await* syntax.

So, we update our *onSearchSubmit* function by adding **async** in-front of it. Next, we add **await** in-front of the *axios.get* method, which actually will cause the api call and will take sometime.

    async onSearchSubmit(term) {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term},
                headers: {
                    Authorization: 'Client-ID YOUR_ACCESS_KEY'
                }
            })
    
            console.log(response);
        }

Now, when we search for any term, we will get an object returned by unsplash api. We are storing that only in **response** variable and then console logging it.

![Unsplash result](https://cdn-images-1.medium.com/max/2880/1*hL1iX_pdIqIs9MMvyl0nbA.png)*Unsplash result*

On further verifying, we can see that our list of images are in data.result array. We will now introduce state to our App component. We will initialize state to contain an empty array **images** and then use setState to update it with the **data.results** array we got from unsplash.

    class App extends React.Component  {
        state = { images: [] };
    
        onSearchSubmit = async (term) => {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term},
                headers: {
                    Authorization: 'Client-ID YOUR_ACCESS_KEYS'
                }
            })
    
            this.setState({ images: response.data.results })
        }
    
        render() {
            return (
                <div>
                    <SearchBar userSubmit={this.onSearchSubmit}/>
                    <span>Found: {this.state.images.length} images</span>
                </div>
            )
        }
    
    }

You we might remember, whenever we use setState in React it re-renders the component including it’s child component.

One more thing to notice in the above code is that, we have changed **onSearchSubmit** to be an arrow function. This is required or else, we will get an error due to **this** used in **setState**.

It’s time to create our imageList component. Create the file **imageList.js** inside the component directory as in below screenshot.

![imageList component](https://cdn-images-1.medium.com/max/2124/1*eukLKq_RIzc4yR9DJ0dt9Q.png)*imageList component*

We will now make change in the App.js to include this ImageList component. Here we are simply passing list of all images, which is inside an array.

    import React from 'react';
    import axios from 'axios';
    import SearchBar from './SearchBar';
    import ImageList from './imageList';
    
    class App extends React.Component  {
        state = { images: [] };
    
        onSearchSubmit = async (term) => {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term},
                headers: {
                    Authorization: 'Client-ID YOUR_ACCESS_KEYS'
                }
            })
    
            this.setState({ images: response.data.results })
        }
    
        render() {
            return (
                <div>
                    <SearchBar userSubmit={this.onSearchSubmit}/>
                    <span>Found: {this.state.images.length} images</span>
                    <ImageList foundImages={this.state.images} />
                </div>
            )
        }
    
    }
    
    export default App;

Let first build a basic imageList component and see what we are getting in the props.

    import React from 'react';
    
    const ImageList = (props) => {
        console.log(props.foundImages);
    
        return (
            <div>images</div>
        )
    }
    
    export default ImageList;

On doing a Search for *Cars*, we an array of objects. It contains the url, description and id which we will require next to show the images.

![Array of Object](https://cdn-images-1.medium.com/max/2880/1*3f_H8IZFS_iri09GqVE_fw.png)*Array of Object*

So, we change the code for **imageList.js** to use the **props.foundImages** array. We are using javascript map to go over it. Then we are displaying the image by assigning to the src the urls.regular.

Note, that we also need to give key, which should be an unique value and also an alt tag. If we don’t give any one of them, then React will give warnings in console.

    import React from 'react';
    
    const ImageList = (props) => {
        const imgs = props.foundImages.map(img => {
            return <img key={img.id} src={img.urls.regular} alt={img.alt_description} />
        });
    
        return (
            <div>{imgs}</div>
        )
    }
    
    export default ImageList;

Now, head over to localhost and again search for *Cars*, and you will get images of beautiful Cars from unsplash.

![Beautiful Cars](https://cdn-images-1.medium.com/max/2880/1*3lp8yNp_Umx6zhEsErmo6w.png)*Beautiful Cars*

This concludes part-3 of the series. We are also done with version 1 of our web-app.

But we will also have a version 2, which will have these images display in a nice way.


*[This post is also available on DEV.](https://dev.to/nabendu82/image-search-app-using-unsplash-api-in-reactjs-3-29o2)*


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
