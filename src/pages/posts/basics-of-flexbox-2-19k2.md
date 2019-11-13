---
title: Basics of Flexbox — 2
date: '2019-07-24T17:10:50.013Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--nxy5ud64--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--h68ouN3H--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/bvckq056lgdux77lm588.jpeg
comments_count: 0
positive_reactions_count: 7
tags: []
canonical_url: 'https://medium.com/@nabendu82/basics-of-flexbox-2-f8a43878566a'
template: post
---
### Alignment & Centring
We will learn alignment and centring here.

We will use this basics CSS here and modify it.

![Basic CSS to be used](https://cdn-images-1.medium.com/max/3834/1*L2H3WLYqlLGv-sT_37gMlA.png)*Basic CSS to be used*

We will use **justify-content** here. This [CSS tricks article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is a great place for reference. We will see all the options here. We will have a border to make things clear.

![**justify-content: flex-start;**](https://cdn-images-1.medium.com/max/3830/1*NJKa-al992aqCfFs909RXw.png)***justify-content: flex-start;***

![**justify-content: flex-end;**](https://cdn-images-1.medium.com/max/3836/1*YdBiKJhdj-6A0usMgRRKrA.png)***justify-content: flex-end;***

![**justify-content: center;**](https://cdn-images-1.medium.com/max/3828/1*r4UDPXvir4tpiJNvhf1cpA.png)***justify-content: center;***

![**justify-content: space-between;**](https://cdn-images-1.medium.com/max/3832/1*78P8vNbdwasi-OGhugxqgg.png)***justify-content: space-between;***

![**justify-content: space-around;**](https://cdn-images-1.medium.com/max/3836/1*et7qPvsepSo2YHCgESTJUg.png)***justify-content: space-around;***

![**justify-content: space-evenly;**](https://cdn-images-1.medium.com/max/3838/1*pQly0z-CncUFgyYV6Bu5XQ.png)***justify-content: space-evenly;***

### Flex Direction
The direction of the main-axis

The flex-direction is the direction of the main axis. By default it is row ie from left to right.
Let’s keep this settings, then we will change the flex-direction.

```
.box{
 color: white;
 font-size: 30px;
 text-align: center;
 padding: 10px;
}
.container {
 display: flex;
 justify-content: flex-end;
 border: 5px solid gold;
 flex-direction: column;
 min-height: 100vh;
}
```

Now, when we make the **flex-direction: column**, it changes the main axis from top to bottom and we will get this.

Now, when we change the justify-content to different properties, we will get everything from top to down.

```
.container {
 display: flex;
 justify-content: flex-start;
 border: 5px solid gold;
 flex-direction: column;
 min-height: 100vh;
}
```

![justify-content: flex-start;](https://cdn-images-1.medium.com/max/3838/1*2rXmYskujsrIMfXZ9wkrIQ.png)*justify-content: flex-start;*

```
.container {
 display: flex;
 justify-content: flex-end;
 border: 5px solid gold;
 flex-direction: column;
 min-height: 100vh;
}
```

![justify-content: flex-end;](https://cdn-images-1.medium.com/max/3838/1*VwqMckRfQaOVHWumFqyEYw.png)*justify-content: flex-end;*

```
.container {
 display: flex;
 justify-content: center;
 border: 5px solid gold;
 flex-direction: column;
 min-height: 100vh;
}
```

![justify-content: center; — Nice trick to center the content on the screen](https://cdn-images-1.medium.com/max/3834/1*y1Up7h9wUUUlZrU0i-ji7g.png)*justify-content: center; — Nice trick to center the content on the screen*

```
.container {
 display: flex;
 justify-content: space-between;
 border: 5px solid gold;
 flex-direction: column;
 min-height: 100vh;
}
```

![justify-content: space-between;](https://cdn-images-1.medium.com/max/3830/1*5DTSd6Ek_-a8bUwqWG8PiQ.png)*justify-content: space-between;*

### Align Item
To align the item on the cross-axis. It is opposite of justify-content.

We will use this as base.

```
.box{
 color: white;
 font-size: 100px;
 text-align: center;
 padding: 10px;
}
.container {
 display: flex;
 border: 5px solid gold;
 height: 100vh;
}
```

My default the align-item value is stretch

```
.container {
 display: flex;
 border: 5px solid gold;
 height: 100vh;
 align-items: stretch
}
```

![align-items: stretch](https://cdn-images-1.medium.com/max/3830/1*bsMIxMUAg8L5Qu1LVlAZ-g.png)*align-items: stretch*

![align-items: flex-start](https://cdn-images-1.medium.com/max/3806/1*3WwNIwV62iJUYfYYk4PpUA.png)*align-items: flex-start*

![align-items: flex-end](https://cdn-images-1.medium.com/max/3832/1*0zM2SO5dcOEruzRCTjahag.png)*align-items: flex-end*

![align-items: center](https://cdn-images-1.medium.com/max/3796/1*4WxFLXjKsvBqUmJTFTiRZg.png)*align-items: center*

The property **align-items: baseline** is very useful as it aligns the base of all the items. *It’s really useful when aligning different text in the page at the same level.*

We will use this.

```
.container {
 display: flex;
 border: 5px solid gold;
 height: 100vh;
 align-items: baseline;
}
.box1 {font-size: 30px;}
.box2 {font-size: 60px;}
.box3 {font-size: 90px;}
.box4 {font-size: 120px;}
.box5 {font-size: 160px;}
.box6 {font-size: 180px;}
.box7 {font-size: 160px;}
.box8 {font-size: 120px;}
.box9 {font-size: 90px;}
.box10 {font-size: 60px;}
```

![**align-items: baseline**](https://cdn-images-1.medium.com/max/2864/1*__Rv3qmXAKtHsCj7nJts-Q.png)***align-items: baseline***




*[This post is also available on DEV.](https://dev.to/nabendu82/basics-of-flexbox-2-19k2)*


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
