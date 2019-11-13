---
title: CSS3 in 10 days — Day 5
date: '2019-10-19T04:58:49.764Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--ZBdvkD9b--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--JKxiA2ve--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/qt83zx5v4w90w0daaj4j.jpeg
comments_count: 0
positive_reactions_count: 45
tags: []
canonical_url: 'https://medium.com/@nabendu82/css3-in-10-days-day-5-91afed0a1610'
template: post
---
Welcome to Day 5 of learning CSS. 

As i have told earlier, this series is inspired by [this](https://www.youtube.com/watch?v=pmKyG3NBY_k&list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU) awesome youtube series in freecodecamp channel.

We will start with CSS only Modal Window on day-5. Open your code editor and create a new 5.1-ModalWindow folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basic html](https://cdn-images-1.medium.com/max/2880/1*VzPFdkPVmV3C-DKITEDmRw.png)*Basic html*

Also, put the basic style of the button. On clicking the button, we will display the modal.

![Basic button](https://cdn-images-1.medium.com/max/2878/1*sOl-4NqyQviTdIxa7zspiA.png)*Basic button*

It will show our index.html as the below in browser.

![Basics](https://cdn-images-1.medium.com/max/2880/1*OsqGU5XWrtOCzfmyiGLp6Q.png)*Basics*

We will first style the overlay. So, head over to sandbox.css and put the below code.

![Overlay](https://cdn-images-1.medium.com/max/2880/1*kOrRzVAwTQAshkR2dnS04g.png)*Overlay*

So, now if you click on the button the overlay will cover the whole browser. Now, we will write style for the modal.

![modal style](https://cdn-images-1.medium.com/max/2880/1*22F2hve2TH3aPW9esrf0Fg.png)*modal style*

And our modal is complete. Click on the button Click to launch modal to open the modal and close it by clicking on the Close button.

![Button logic](https://cdn-images-1.medium.com/max/2880/1*P4QAor46ppKj-MtkRdoi9g.png)*Button logic*

Next, we will create a CSS only Pacman. Open your code editor and create a new 5.2-Pacman folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Pacman begins](https://cdn-images-1.medium.com/max/2880/1*9H9USF0EmI7N1O0NMpOr4A.png)*Pacman begins*

The html doesn’t contain any style. All the code happens in CSS. Let’s first create the path for the Pacman.

![Path](https://cdn-images-1.medium.com/max/2880/1*Tz84YDzxhqCB1sxfodOKgg.png)*Path*

It will show the path in the browser.

![The dotted path](https://cdn-images-1.medium.com/max/2880/1*N01ByZLCGWj2Sf4wfJ7S3A.png)*The dotted path*

Let’s create the pacman now. We are creating it from two separate blocks, which we are using in before and after pseudo element.

![Pacman](https://cdn-images-1.medium.com/max/2880/1*-r8OdHawFp5jZG1p-lYkWQ.png)*Pacman*

We will now see the pacman in the browser.

![Pacman in browser](https://cdn-images-1.medium.com/max/2880/1*dz0B-t7T6paSYCK1Vs4yEQ.png)*Pacman in browser*

Now, let’s animate the pacman close and open it’s mouth.

![Animation code](https://cdn-images-1.medium.com/max/2880/1*zeXnMHnWWmK2Bwt9f-c73w.png)*Animation code*

You can now see the below in browser.

![Pacman Closing opening](https://cdn-images-1.medium.com/max/2000/1*O54UnUmQt6ZZSINel9tftw.gif)*Pacman Closing opening*

Now, we will make the pacman move from left to right. For this we will add a moveForward animation.

![moveForward](https://cdn-images-1.medium.com/max/2880/1*HkN2ljPEK2thVopqmrv5ew.png)*moveForward*

Now, our pacman is moving.

![Moving pacman](https://cdn-images-1.medium.com/max/2000/1*0152GF7ptM2JZUKJVvuzng.gif)*Moving pacman*

Let’s create the Ghost now. Put the below in sandbox.css to create the ghost.

![Ghost Code](https://cdn-images-1.medium.com/max/2788/1*cgfLK8vfMoR1sn3BOJGspQ.png)*Ghost Code*

It will show the below in browser.

![Ghost in the browser](https://cdn-images-1.medium.com/max/2880/1*d3C9ucRrX7e2v7qZe1gyWg.png)*Ghost in the browser*

Now, we will make the pupil of the ghost.

![Pupil](https://cdn-images-1.medium.com/max/2880/1*yQcnoxtlHo4syM9Ue0FG0Q.png)*Pupil*

Which will now show the blue pupil of the Ghost.

![Blue pupil](https://cdn-images-1.medium.com/max/2880/1*mBeSXlPjpkCdO-1pLS3qbA.png)*Blue pupil*

Now, we will give the Ghost a nice skirt.

![Skirt code](https://cdn-images-1.medium.com/max/2880/1*U8jzXOiBk7f55gcsqFMVuw.png)*Skirt code*

And we get the skirt.

![The Skirt](https://cdn-images-1.medium.com/max/2880/1*sTQnTk48iR-agHuSCN0UTg.png)*The Skirt*

Now, we will do the animation for the Ghost.

![Code](https://cdn-images-1.medium.com/max/2880/1*EISsNpAAmuCSM1hSlqcuyA.png)*Code*

![The Animation](https://cdn-images-1.medium.com/max/2784/1*eoPAaz0fx5GcGgFu8Raf5A.png)*The Animation*

This completes our pacman animation.

![The final](https://cdn-images-1.medium.com/max/2000/1*Ua61Zk-NOVW30uNOCvYD3A.gif)*The final*

This completes day 5 of the course. 

You can find the code for the same [here](https://github.com/nabendu82/CSS10days).


*[This post is also available on DEV.](https://dev.to/nabendu82/css3-in-10-days-day-5-3be7)*


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
