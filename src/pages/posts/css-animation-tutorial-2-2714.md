---
title: CSS Animation Tutorial — 2
date: '2019-11-01T07:24:37.031Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--z3kNdIjp--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--CUyJOgTi--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/gngmyr3bd8ka0b77akhj.jpeg
comments_count: 0
positive_reactions_count: 15
tags: []
canonical_url: 'https://medium.com/@nabendu82/css-animation-tutorial-2-8489cc83ec11'
template: post
---
Welcome to part 2 of the series. 

This series is inspired by [this](https://www.youtube.com/watch?v=jgw82b5Y2MU&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5) awesome YouTube series by **The Net Ninja**.

We will start by learning about keyframes and applying them to create Mario Kart Animations.

So, first create a folder mario and inside it two files index.html and style.css

Next, put this basic html in index.html

![Basic Html](https://cdn-images-1.medium.com/max/2880/1*XQ3Q4V1xlKV5scfmYWsuXw.png)*Basic Html*

Next, put these basic styles in style.css

![Basic styles](https://cdn-images-1.medium.com/max/2880/1*pXnL0LhBFaBkHYG2GnOj0A.png)*Basic styles*

And in the web-browser open the index.html . It will show the background for our Mario to play.

![Basic browser](https://cdn-images-1.medium.com/max/2880/1*I_YOwsCK3-YuqpVwb2oV3g.png)*Basic browser*

Now, it’s time to put Mario image in the tracks. We already have some images in the img folder. Make sure to have it. You can get it from my github source code for the [project](https://github.com/nabendu82/CSSAnimation).

![Adding Mario](https://cdn-images-1.medium.com/max/2880/1*Z8oSBy62j2pL4lqIW2Fgtw.png)*Adding Mario*

Now, it will show our hero Mario in the tracks.

![Mario in tracks](https://cdn-images-1.medium.com/max/2880/1*CW8jj6NNXxLAh-zA0bGrGg.png)*Mario in tracks*

Now, we will animate Mario but first will fix him a bit by moving him up.

![Mario styles](https://cdn-images-1.medium.com/max/2790/1*8bDCZlosGDEORB-TN94JmA.png)*Mario styles*

It will move him a bit up.

![Moving Mario up](https://cdn-images-1.medium.com/max/2880/1*OeYPaJhiCmCaKP17dpcGkg.png)*Moving Mario up*

Now, we will add our animation by keyframes. We declare a keyframe animation **drive** and then have a from and to properties in it. We put translateX inside them. It means Mario will start from 0 on x-axis and go till 1200px on x-axis.

We then add that in our mario class by giving animation-name: drive . We also add an animation-duration: 3s

![Keyframes](https://cdn-images-1.medium.com/max/2792/1*BgqplfjcIKFQumQoYGjCcA.png)*Keyframes*

It will show this nice Mario animation.

![Mario animation](https://cdn-images-1.medium.com/max/2000/1*Yt3tuqb3QYyzi9ipNVN0OQ.gif)*Mario animation*

As, you might have seen in the above animation that after Mario reaches to the end i.e. 1200px, he returns back to his original position.

We can change this by animation-fill-mode: forwards; It means that it should stay at the to position i.e. 1200px after the animation is over.

![animation-fill-mode](https://cdn-images-1.medium.com/max/2778/1*s7rryHzNc7DMXzOIP5IPcg.png)*animation-fill-mode*

It will show the below animation.

![Mario](https://cdn-images-1.medium.com/max/2000/1*7mJNFUKiwIW84JmWLmEy5w.gif)*Mario*

Now, we will use animation-fill-mode: both;to make Mario extend the animation property in both directions. We are also using animation-iteration-count: infinite; to achieve the infinite loop.

We are also staring Mario off screen and ending him off screen.

![infinite animation](https://cdn-images-1.medium.com/max/2784/1*ps2uvxdIZ6vUPhI7xCBdhA.png)*infinite animation*

It will show our hero Mario, moving nicely on the track infinitely.

![Infinite Mario](https://cdn-images-1.medium.com/max/2000/1*j-A4usJDNyGxx9MiyvtU9A.gif)*Infinite Mario*

This concludes part 2 of the series. You can find the code for the same [here](https://github.com/nabendu82/CSSAnimation).


*[This post is also available on DEV.](https://dev.to/nabendu82/css-animation-tutorial-2-2714)*


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
