---
title: CSS3 in 10 days — Day 7
date: '2019-10-26T06:00:30.716Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--gnI6QtZV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--DW0WPYlP--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/0dr2xew9fszaw00e8qwf.jpeg
comments_count: 0
positive_reactions_count: 11
tags: []
canonical_url: 'https://medium.com/@nabendu82/css3-in-10-days-day-7-c08d00312a4c'
template: post
---
Welcome to Day 7 of learning CSS.

As i have told earlier, this series is inspired by [this](https://www.youtube.com/watch?v=pmKyG3NBY_k&list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU) awesome youtube series in freecodecamp channel.

We will start with Animated Pyramid on day-7. Open your code editor and create a new 7.1-AnimatedPyramid folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basics](https://cdn-images-1.medium.com/max/2880/1*H53GzUL4rCVfXG0jcin8cA.png)*Basics*

Let first put some basic css in sandbox.css to show three boxes.

![Three](https://cdn-images-1.medium.com/max/2880/1*xsNTpTmonfgYUOZP4NcsmA.png)*Three*

It will show as below.

![The basics](https://cdn-images-1.medium.com/max/2880/1*bC5_t_dMIp__4ohfLDJ4YQ.png)*The basics*

Now we will change it into triangle by using clip-path.

![clip-path](https://cdn-images-1.medium.com/max/2880/1*MEDoS7J_1-txa5vQ4YjX9w.png)*clip-path*

And now it shows the perfect triangles.

![Perfect Triangles](https://cdn-images-1.medium.com/max/2880/1*Wd4QZSe3Nsw9e_GPm_dTog.png)*Perfect Triangles*

Next, we will add animations for the mid triangle. We will only show the top triangle and on hovering over it, will show the mid triangle.

![Mid triangle](https://cdn-images-1.medium.com/max/2880/1*h9J0iXFp37I737io8KGaWw.png)*Mid triangle*

Now, it will show this nice animation.

![Nice animation](https://cdn-images-1.medium.com/max/2000/1*fokHID0hPuIFqYn-OTtM5Q.gif)*Nice animation*

Next, we will add code for the bottom triangle and will also add, a transition.

![bottom triangle](https://cdn-images-1.medium.com/max/2880/1*5ohT0w6im1m_0fpSpBEfgg.png)*bottom triangle*

This will complete our Animated Pyramid and show this nice animation, on hovering the mouse over the initial triangle.

![Animated Triangle](https://cdn-images-1.medium.com/max/2000/1*wvBAhzcsSDpozG4IdRdBqw.gif)*Animated Triangle*

Next, we will do CSS only Spinners on day-7. Open your code editor and create a new 7.2-Spinners folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basics](https://cdn-images-1.medium.com/max/2880/1*JkXdZW2MS7fz2w73vkprKA.png)*Basics*

Let first put some basic css in sandbox.css to show the first spinner.

![First spinner](https://cdn-images-1.medium.com/max/2880/1*oHJV1Zv03mjC-L3CbFIO_Q.png)*First spinner*

It will show the nice half arc.

![arc](https://cdn-images-1.medium.com/max/2880/1*heBvrG90IudHaUPVOy8UFg.png)*arc*

Let’s make the spinner rotate now. We will add the below transition effect in css.

![CSS transition](https://cdn-images-1.medium.com/max/2880/1*XMOq6IUHzZkKcu9un0SmlQ.png)*CSS transition*

It will show this nice spinner, which also changes size.

![Spinner 1](https://cdn-images-1.medium.com/max/2000/1*ckqY3XHHRRgWJjJc-VFSjg.gif)*Spinner 1*

Let’s start with spinner 2 and put some basic CSS.

![Spinner 2](https://cdn-images-1.medium.com/max/2880/1*iElnAhtr_5QSyK1f8TnrSQ.png)*Spinner 2*

It will show two circles as of now.

![Two circles](https://cdn-images-1.medium.com/max/2880/1*Qwq0bokyOZHZcusRP3Rc0w.png)*Two circles*

Now, let’s add animation for the circle.

![orbit-1](https://cdn-images-1.medium.com/max/2880/1*sFOHN3B-SAde0H9qgGfOBA.png)*orbit-1*

It will show this nice animation as below.

![Nice animation](https://cdn-images-1.medium.com/max/2000/1*1ovTRZvXuTmRdY3BK7pnLQ.gif)*Nice animation*

Now, we will put the animation for after which will add another circle.

![The other](https://cdn-images-1.medium.com/max/2880/1*mfC3fttHELLcB5Mgb0GXhg.png)*The other*

It will show this nice animation of two circles, orbiting a circle.

![Nice one](https://cdn-images-1.medium.com/max/2000/1*UhgOGPoMTtNBCSeXJ0MltQ.gif)*Nice one*

This completes day 7 of the course. 

You can find the code for the same [here](https://github.com/nabendu82/CSS10days).


*[This post is also available on DEV.](https://dev.to/nabendu82/css3-in-10-days-day-7-14oi)*


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
