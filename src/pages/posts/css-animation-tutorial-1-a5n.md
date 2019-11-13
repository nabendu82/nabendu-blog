---
title: CSS Animation Tutorial — 1
date: '2019-11-01T07:16:56.699Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--EdV0580o--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--CfZa7Gh9--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/5cdg7368oory5hxg17zj.jpeg
comments_count: 0
positive_reactions_count: 100
tags: []
canonical_url: 'https://medium.com/@nabendu82/css-animation-tutorial-1-642d0b7cc70d'
template: post
---
Welcome to a brand new series on CSS animation. While creating my earlier series [CSS3 in 10 days](https://dev.to/nabendu82/css3-in-10-days-day-1-23da), i did some animations and got hooked with them. So, decided to create a CSS animation tutorial.

This series is inspired by [this](https://www.youtube.com/watch?v=jgw82b5Y2MU&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5) awesome youtube series by **The Net Ninja**.

We will start with learning a bit about CSS animation and then creating some cool animations.

So, go ahead and create an index.html file and put the below code. It is just showing a cloud image.

![CSS Animation](https://cdn-images-1.medium.com/max/2880/1*zKg153cxI332S2YS4FDenw.png)*CSS Animation*

We will then have a style.css file, which will contain the basic styles.

![Basic styles](https://cdn-images-1.medium.com/max/2880/1*cjBz1Qkn8_5_a3UH9TwF-Q.png)*Basic styles*

It will show this nice centered cloud in our webpage, with light blue background.

![Cloud image](https://cdn-images-1.medium.com/max/2880/1*guJNyB6ERn1RiI996Tqhig.png)*Cloud image*

We will first learn about **transform**. A 2-dimentional transformation is applied to the element, through the transform property.

It have got many other properties. We will first learn about **translate** properties. The translateX moves the element on the x-axis.

Add the below in our style.css.

![translateX](https://cdn-images-1.medium.com/max/2792/1*J6oWCYx-N49p4BgmJaRYdQ.png)*translateX*

And it will move our cloud by 120px on x-axis i.e. to the right.

![Moving along x-axis](https://cdn-images-1.medium.com/max/2880/1*RErZC7Sg1xVSX0tg3un6GQ.png)*Moving along x-axis*

Similarly, a negative unit will move to the left on the x-axis.

![negative translateX](https://cdn-images-1.medium.com/max/2782/1*P-oTURvABlzp1cvFE4cn7A.png)*negative translateX*

Will show as below.

![Moving along x-axis](https://cdn-images-1.medium.com/max/2880/1*d16NMaXAtEpYH8L7kbyh-g.png)*Moving along x-axis*

Now, as you might have guessed — The translateY moves the element on the y-axis.

Below is a positive translateY.

![positive translateY](https://cdn-images-1.medium.com/max/2784/1*r4cVPvjqStUP_bDN67OuAA.png)*positive translateY*

And it will move the element down.

![Moving along y-axis](https://cdn-images-1.medium.com/max/2880/1*l5dQrnPvwxemYvUfT6Fw0w.png)*Moving along y-axis*

Similarly, a negative translateY.

![negative translateY](https://cdn-images-1.medium.com/max/2782/1*zFEPYQVhMyxnyNT9P9BtMw.png)*negative translateY*

Will move the element up, which can also result in image getting cut.

![Moving along y-axis](https://cdn-images-1.medium.com/max/2880/1*fFnvW8bV05SnIH_g7qbLNw.png)*Moving along y-axis*

We can move the element in, both x-axis and y-axis by passing two values in translate.

![translate](https://cdn-images-1.medium.com/max/2786/1*9MSMzynMyx7_-qk3JcBD3Q.png)*translate*

Will result in below.

![Moving along x-axis and y-axis](https://cdn-images-1.medium.com/max/2880/1*xNVp7uoH64vUOXaUxbAtHA.png)*Moving along x-axis and y-axis*

Next, we will look into scale. It basically stretches or shrinks an element.

First, we will look into scaleX which stretches or shrinks an element, along x-axis.

![scaleX](https://cdn-images-1.medium.com/max/2784/1*QHXZ35TXJQ8Z3uOCySmX0Q.png)*scaleX*

It will stretch 1.5 times along x-axis.

![x-axis](https://cdn-images-1.medium.com/max/2880/1*c6eLosFylYDGzSL5aS3xzQ.png)*x-axis*

Now, scaleY stretches or shrinks an element, along y-axis.

![scaleY](https://cdn-images-1.medium.com/max/2784/1*YieygWggJDjNnpoOkm-UWA.png)*scaleY*

It will shrink the element 0.5 times along y-axis.

![y-axis](https://cdn-images-1.medium.com/max/2880/1*OWYFvSYvpEEANMxiKyBLnA.png)*y-axis*

We can also use to scale on both axis by using scale.

![scale](https://cdn-images-1.medium.com/max/2784/1*iNMSyCjZem7i384V0i7a5A.png)*scale*

It will scale on both axis.

![On both axis](https://cdn-images-1.medium.com/max/2880/1*Gv2z9I22lbJ-Bz6_jVGaNQ.png)*On both axis*

Next, we will look into the transform property of rotate. It rotates the 2-D element, along x, y or z-axis.

We will see rotateX first, which rotates the element along x-axis.

![rotateX](https://cdn-images-1.medium.com/max/2794/1*ZnokA-grvu44DZXUQHVSzw.png)*rotateX*

It is sort of difficult to visualize, as the image got smaller. But it actually is rotating along x-axis so, it became smaller to human eyes.

![Along x-axis](https://cdn-images-1.medium.com/max/2880/1*y1zseasEK3xpIF4ZJ1utkQ.png)*Along x-axis*

Similarly, rotateY will rotates the element along y-axis.

![rotateY](https://cdn-images-1.medium.com/max/2782/1*C1nWDdM785m76hgcDea5rQ.png)*rotateY*

Will show below.

![Along y-axis](https://cdn-images-1.medium.com/max/2880/1*K4WF55-UHJPXdMspUV6sIA.png)*Along y-axis*

Now, rotateZ will rotates the element along z-axis.

![rotateZ](https://cdn-images-1.medium.com/max/2784/1*MXq5vhSPcdK0t5L8ir8Fkg.png)*rotateZ*

It is more easy to visualize as it rotate along z-axis.

![Along z-axis](https://cdn-images-1.medium.com/max/2880/1*rQNtlNSxwnZ1F98p-h0s9g.png)*Along z-axis*

We can also chain all three transform properties, which we learnt together like below.

![All together](https://cdn-images-1.medium.com/max/2788/1*kDElNHWt7VLKIS5fTUJH7A.png)*All together*

It will apply the result of one property on the other. First will rotate, the translate and then scale.

![transform together](https://cdn-images-1.medium.com/max/2880/1*n3AP1Z8mwyYyT-E6IQr1PQ.png)*transform together*

Next, we will learn **transition** property. Add a new circle to index.html

![New element](https://cdn-images-1.medium.com/max/2880/1*q6p8YV2ScEjmggHIEDe5eg.png)*New element*

Also, add some styles for this circle in style.css

![New style](https://cdn-images-1.medium.com/max/2880/1*7Ss7F5WfMZQrgkqYr7y3wg.png)*New style*

It will show as below in browser.

![New element](https://cdn-images-1.medium.com/max/2880/1*RVlHagLrgKYikn7fQLxFXQ.png)*New element*

Now, let add a hover state on the circle.

![Hover state](https://cdn-images-1.medium.com/max/2796/1*t2ODW55K5WGqQYWp7vr-QQ.png)*Hover state*

As we can see from below, only the background changes and the transform doesn’t shows. This happens because the state change happens instantaneously.

![only background](https://cdn-images-1.medium.com/max/2000/1*80umw5pWLQwznVk-464Jiw.gif)*only background*

Now, if we put a transition of 1 sec in the parent element it will apply all hover state transition, smoothly in 1 sec.

![transition](https://cdn-images-1.medium.com/max/2784/1*HvLvIMTGCQKpuvajOJG6TQ.png)*transition*

Now, it will change both background color and rotate 360 degrees.

![Both hover states applied](https://cdn-images-1.medium.com/max/2000/1*rDDu0jsy1ABqUD48f4YCbw.gif)*Both hover states applied*

We can also have background and transform, transitions to take different time. We have to add code like below.

![transition differently](https://cdn-images-1.medium.com/max/2788/1*1AYkpR3pLVESVOCCH8DVKw.png)*transition differently*

Now, the background changes in 1 second but the rotate happens more quickly.

![Quick rotation](https://cdn-images-1.medium.com/max/2000/1*tpzJ6j2SG7wPWOSvsoBtXQ.gif)*Quick rotation*

We also have two other properties in transition. They are transition-timing-function and transition-delay.

Now, the transition-timing-function specifies the speed at which the transition happens.

And the transition-delayspecifies the delay after which the transition should start.

Now, in the below example transition: 1s ease-in 0.8s; means apply the transition for 1 sec, with function ease-in and after a delay of 0.8 sec.

![All properties](https://cdn-images-1.medium.com/max/2788/1*AXyQcDcnxWVY0CeUNPFsIQ.png)*All properties*

It will show the transition as below.

![The complete transition](https://res.cloudinary.com/dxkxvfo2o/image/upload/v1572592829/38_ivsd3i.gif)*The complete transition*

Now, there are some other transition-timing-function like below-

* ease — specifies an effect with a slow start, then fast, then end slowly (this is default)

* linear — specifies an effect with the same speed from start to end

* ease-in — specifies an effect with a slow start

* ease-out — specifies an effect with a slow end

* ease-in-out — specifies an effect with a slow start and end

You can try them all, but the most used one are linear and ease-in.

This completes the part 1 of the series. You can find the code for the same [here](https://github.com/nabendu82/CSSAnimation).


*[This post is also available on DEV.](https://dev.to/nabendu82/css-animation-tutorial-1-a5n)*


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
