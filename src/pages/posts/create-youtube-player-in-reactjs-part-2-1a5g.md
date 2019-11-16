---
title: Create Youtube Player in ReactJs — Part 2
date: '2019-07-12T17:06:36.085Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--nHd3u3B---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--Yy0VmOcK--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/xibx7jynh7bx9j75cppp.jpeg
comments_count: 0
positive_reactions_count: 4
tags: []
canonical_url: 'https://nabendu.blog/posts/create-youtube-player-in-reactjs-part-2-1a5g/'
template: post
---
Welcome to part 2. Let’s start from where we left, but first add bootstrap to our project so that it looks a bit ok.

Add this in index.html in the head part.

*<link rel=”stylesheet” href=”https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css">*

![adding bootstrap to index.html](https://cdn-images-1.medium.com/max/2142/1*zhflCrYaDUPQ00IBqusoCA.png)*adding bootstrap to index.html*

Let’s start by updating **App.js**

![App.js](https://cdn-images-1.medium.com/max/2000/1*fTTVk9I9KLLP-lsIdREftQ.png)*App.js*

Here we are first importing the **youtube-search-api**, which we install through npm in previous part. Then in the constructor we are creating a state object which contains a key-value pair of **videos: []**. So, basically an empty array.

In constructor only we are calling a function with parameters ‘React tutorials’ by **this.videoSearch(‘React Tutorials’);**

Now, in this function we are doing a Youtube search by using the **youtube-search-api.** We are passing the API_KEY and the term **(‘React Tutorials’ here).** So, it does a youtube search with the term and returns us the result from youtube in **data.**It is an array of object as shown below. Do a console.log to find more about it.

![data from youtube search](https://cdn-images-1.medium.com/max/2226/1*hA4sdMty7hR1mH10d2xDvA.png)*data from youtube search*

Now we are setting this data array videos by 
`this.setState({videos: data})`


Now in the render() we are a new line 
`<VideoList videos={this.state.videos} />`
. Here we have a new component **VideoList** in which we are passing parameter, like in normal HTML tag. But these parameters have special name and this is called passing **props.**In react we have a one-directional data flow, and this props were are passing from **App(parent)** to **VideoList(children)**

Now lets use this props **videos** which is a array of object, in the **VideoList** component. Open the file **video_list.js** and update the below.

![video_list.js](https://cdn-images-1.medium.com/max/2000/1*nT_x9WiOKJEpcV6EgDzLVg.png)*video_list.js*

This is a simple functional component, here in **(props)** we will receive the **videos** passed by **App** as **props.videos**

As it’s an array of object, we iterate through it using map and pass each object to **VideoList** child component **VideoListItem** by 
`<VideoListItem key={video.etag} video={video} />`


Notice, we need a unique key when dealing with array or React will throws us warning. As our data from youtube returns an unique **etag**, we are using that.

Whatever we are getting back from **VideoListItem**, we are storing in a constant **videoItems** and displaying inside a unordered list.

The unordered list 
`<ul className=”col-md-4 list-group”>`
 contains a **className**, which is same a **class** in normal HTML tag.But in react we have to use a **className.** The **col-md-4** is a bootstrap thing.

Lets move to **VideoListItem** now, which is our individual row. We will update the **video_list_item.js** now as below

![**video_list_item.js**](https://cdn-images-1.medium.com/max/2000/1*ybq_pj6k5hOpCsVoOlVqJA.png)***video_list_item.js***

Here again we are receiving props video and accessing it by **props.video**. We will take image and title from here. Let’s see what we receive.

![video object](https://cdn-images-1.medium.com/max/3610/1*nI7B8d846ElzdUHiUfwv4Q.png)*video object*

Most of the thing in the code is for styling in bootstrap. But the **imageUrl** we are getting from the video object by **const imageUrl = video.snippet.thumbnails.default.url;**

Displaying it in the image by 
`<img className=”media-object” src={imageUrl} />`
 and also the title by 
`<div className=”media-heading”>{video.snippet.title}</div>`


This is what we get from the above updated to our code in **App.js**, **video_list.js** and **video_list_item.js**

![Updated app](https://cdn-images-1.medium.com/max/2000/1*n_DsVgewdINOJS60eCbJqw.png)*Updated app*


This concludes part 2 , the final [part 3](https://dev.to/nabendu82/create-youtube-player-in-reactjs-part-3-636).


*[This post is also available on DEV.](https://dev.to/nabendu82/create-youtube-player-in-reactjs-part-2-1a5g)*


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
