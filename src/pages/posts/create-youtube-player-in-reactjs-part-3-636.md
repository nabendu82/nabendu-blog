---
title: Create Youtube Player in ReactJs — Part 3
date: '2019-07-12T17:28:07.229Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--yilHphjK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--0lRhaG1Q--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/8bnnqcryn9s59bf5ikqm.jpeg
comments_count: 3
positive_reactions_count: 9
tags: []
canonical_url: 'https://nabendu.blog/posts/create-youtube-player-in-reactjs-part-3-636/'
template: post
---


We now have three main tasks remaining. First showing the Video player, second the option to click on a video to change it in video player and third is Search capabilities to search for videos.

**Add Video Player**
First to add a Video Player, goto **App.js** and change as below

![App.js changes](https://cdn-images-1.medium.com/max/2000/1*Q0EFZKZJkKsaGP4kv2VG9w.png)*App.js changes*

The code for VideoDetails is these two lines

```javascript 
import VideoDetail from ‘./components/video_detail’;
<VideoDetail video={this.state.selectedVideo}/>
```

Notice, we created a new key-value pair **selectedVideo** in state which will be used later to select video. It defaults to the first video when the search is done in YTSearch by **selectedVideo: data[0]** and this gets passed to **VideoDetail** as **props**

Lets update **video_detail.js** next and understand the logic.

![video_detail.js](https://cdn-images-1.medium.com/max/2000/1*QvuHNFVUMUq9Pf87EUaGUg.png)*video_detail.js*

In it we are receiving the single *video object as prop* and extracting **videoId**, **title** and **description** from it. Then displaying in an iframe and showing title and description below it. Also, using a little bootstrap magic for styling.

Notice the below statements, they are very important

```
 if(!video){
  return <div>Loading…</div>;
 }
```

Comment them out and you will get the below error

![null error](https://cdn-images-1.medium.com/max/2000/1*uQ29OPUg4BFLaCVWOB3jgA.png)*null error*

It occurs because in our **App.js**, we have **selectedVideo: null** initially set in state. Then the YTSearch happens which goes to youtube for search and takes maybe 1–2 sec, and then change the **selectedVideo: data[0]**.But React doesn’t wait for it and render() runs, and passes the **selectedVideo** as null to **VideoDetail.**To avoid this situation, we are checking *if no video, then show the Loading…*

**Click to change video**
To do this, we have added *onVideoSelect* in *VideoList* in *App.js*

```javascript
<VideoList 
 onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
 videos={this.state.videos} 
 />
```

This is a special way to props from parent to children and then back to them. This is known as **callback.**It can be used to pass props to more then 1 level deep and receive data back.

Now let’s move to **video_list.js** and receive this props

```javascript
const videoItems = props.videos.map((video) => {
 return (
 <VideoListItem 
  onUserSelected={props.onVideoSelect}
 key={video.etag} 
 video={video} />
 );
 });
```

We are not doing anything here and passing the props to it’s child **VideoListItem**. So, let’s move to **video_list_item.js** and update it.

```javascript
 <li onClick={() => onUserSelected(video)} className=”list-group-item”>
 <div className=”video-list media”>
 <div className=”media-left”>
 <img className=”media-object” src={imageUrl} />
 </div>
 <div className=”media-body”>
 <div className=”media-heading”>{video.snippet.title}</div>
 </div>
 </div>
 </li>
```

We have added an **onClick** event handler on **li** element. So, when the user clicks on it, it passes the **video** to **onUserSelected.**The **onUserSelected** in **video_list.js,**passed it back to **onVideoSelect**in **App.js**

In App.js it is used to update the new video to **selectedVideo** by 
`onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}`


This run the render() again and the new video is passed to **VideoDetail** component and it gets displayed.

**Search capabilities**
To do this, we added onSearchTermChange in *SearchBar* in *App.js*

`<SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>`


We are again using callback here. So, let’s move to **search_bar.js** . Here we will add this to **onInputChange()** method.

```javascript
onInputChange(event) {
 this.setState({ term: event.target.value });
 this.props.onSearchTermChange(event.target.value);
 }
```

So, we are passing the event.target.value, which is nothing but the updated text in the input box.

Back in **App.js** we are using this new text value to run the **videoSearch()** function again.

**Minor style changes**
Goto *index.css* and change it completely

These are minor styles to make our app look better. All of them are self-explainatory.

![index.css](https://cdn-images-1.medium.com/max/2000/1*Ji0DaLNObSsaaQFEDMEcJQ.png)*index.css*

The **index.css** file is called from our **index.js**, which we never changed. So, the styles will be reflected. Only a minor thing need to be added in **search_bar.js**
Add **className=”search-bar”** to the top level div as shown below

```javascript
<div className=”search-bar”>
 <input 
 value={this.state.term}
 onChange={this.onInputChange} 
 /> 
 </div>
```

This completes this tutorial and we get this amazing youtube search app.

![Deployment in Heroku](https://cdn-images-1.medium.com/max/5752/1*q_TlDwZKykQ2Ixh4DuONLA.png)*Deployment in Heroku*

The project is deployed in Heroku. You can find it [here](https://nameless-dusk-36203.herokuapp.com/).

You can find the complete code in this [github repo](https://github.com/nabendu82/youtube-player)


*[This post is also available on DEV.](https://dev.to/nabendu82/create-youtube-player-in-reactjs-part-3-636)*


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
