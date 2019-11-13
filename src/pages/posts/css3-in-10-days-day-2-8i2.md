---
title: CSS3 in 10 days — Day 2
date: '2019-10-19T04:46:32.481Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--Ug-AgTo4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--jOrNLwg3--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/cilxjqmgkyymzu1vp8n5.jpeg
comments_count: 0
positive_reactions_count: 56
tags: []
canonical_url: 'https://medium.com/@nabendu82/css3-in-10-days-day-2-546c801ac5d0'
template: post
---
Welcome to Day 2 of learning CSS. 

As i have told earlier, this series is inspired by [this](https://www.youtube.com/watch?v=pmKyG3NBY_k&list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU) awesome youtube series in freecodecamp channel.

We will start with Typography on day-2. Open your code editor and create a new 2.1-Typography folder and two files index.html and sandbox.css inside it.

![New folder](https://cdn-images-1.medium.com/max/2880/1*_Y-EAx3qUfS3UdFZVpp4BA.png)*New folder*

Next, in index.html put the basic html.

![index.html](https://cdn-images-1.medium.com/max/2880/1*yUbF0nWXQB-Vmys12B3rRw.png)*index.html*

Now in sandbox.css, we will add code for the Cool Shadow first. We are just using a cursive font from google font and a text-shadow property for the cool effect.

![sandbox.css](https://cdn-images-1.medium.com/max/2880/1*uRehYpzr5dqO-YCMhQHdNA.png)*sandbox.css*

Now, when you open the index.html in a web-browser, we can see the cool shadow effect.

![Cool Shadow](https://cdn-images-1.medium.com/max/2880/1*qscHkBEdBR0uiwcDJAcrHA.png)*Cool Shadow*

Now, we will create the cool 3D button. Head over to sandbox.css and add the below style.

![3D button](https://cdn-images-1.medium.com/max/2878/1*WemHL0dZJmFq97OVGrSWuw.png)*3D button*

This, will show our cool 3D button.

![Cool 3D](https://cdn-images-1.medium.com/max/2880/1*IYnQL845Lp1qLLDtPkXEQw.png)*Cool 3D*

Next, we will learn how to clip images. Open your code editor and create a new 2.2-ClippingImages folder and two files index.html and sandbox.css inside it.

In the index.html put the basic bare-bones.

![index.html](https://cdn-images-1.medium.com/max/2880/1*Yu02Z6frbj9kiy9wNz9WLQ.png)*index.html*

It will show four images from unsplash.

![basics](https://cdn-images-1.medium.com/max/2880/1*R04CsN4J0Isgj821jdsuIg.png)*basics*

It’s time to use clip-path property of CSS, to make the first image a perfect circle. Add below code for first image in sandbox.css

![clip-image-1](https://cdn-images-1.medium.com/max/2880/1*p0UD2cY6IhPIM-Bb_2romw.png)*clip-image-1*

So, our first image will become perfect circle.

![result](https://cdn-images-1.medium.com/max/2880/1*cFovGNybApbXe7bWBu79Ww.png)*result*

Next, we will head over to the awesome clip maker site [https://bennettfeely.com/clippy/](https://bennettfeely.com/clippy/)

Here, you can use any of the provide clips. We will be using the comment one first.

![clippy](https://cdn-images-1.medium.com/max/2880/1*20UPlQYi1NdjCkaFQSAMBw.png)*clippy*

Just, copy the code and put it for clip-image-2 in sandbox.css

![clip-image-2](https://cdn-images-1.medium.com/max/2880/1*FXqFKhFeFIfXkD9pflgzuw.png)*clip-image-2*

And you will get the beautiful comment image.

![Comment image](https://cdn-images-1.medium.com/max/2880/1*QnHH90UBV-S3vGLl_a_bCA.png)*Comment image*

Again head over to clippy and copy the code for a cross.

    .clip-image-3{
    -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);

    }

It will transform the image to a cross.

![Cross](https://cdn-images-1.medium.com/max/2880/1*x3lTX-3XaekrX65rmv_TAQ.png)*Cross*

Head again to clippy and edit the provided left arrow. You can drag any point.

    .clip-image-4{
    -webkit-clip-path: polygon(40% 0%, 39% 34%, 100% 20%, 100% 80%, 38% 68%, 40% 100%, 0% 50%);
    clip-path: polygon(40% 0%, 39% 34%, 100% 20%, 100% 80%, 38% 68%, 40% 100%, 0% 50%);
    }

It will show the left arrow.

![custom left arrow](https://cdn-images-1.medium.com/max/2880/1*h6upYcYn2AjIyBToh6Q8KQ.png)*custom left arrow*

Next, we will create a beautiful registration form. Again in your code editor and create a new 2.3-RegistrationForm folder and two files index.html and sandbox.css inside it.

In the index.html put the basic bare-bones.

![Registration FOrm](https://cdn-images-1.medium.com/max/2880/1*1kdmLRgmxXa49_dAJ396uQ.png)*Registration FOrm*

This will show a basic form in the browser.

![Basic form](https://cdn-images-1.medium.com/max/2880/1*flxk9uSA0-6XcUZVLJLNPA.png)*Basic form*

Next, we will add some basic styles to the form to show a background gradient.

![Basic Styles](https://cdn-images-1.medium.com/max/2880/1*nrOymQ610OMP-750irFnEg.png)*Basic Styles*

It will now show our form as below.

![Basic form](https://cdn-images-1.medium.com/max/2880/1*3nX0v0RQG-kyHM-mI6Vnig.png)*Basic form*

Next, we will add code for input boxes in sandbox.css

![sandbox.css](https://cdn-images-1.medium.com/max/2880/1*GFNv0XE1snJB5GSRZwdynw.png)*sandbox.css*

It will now show our form as below.

![index.html](https://cdn-images-1.medium.com/max/2880/1*ZY9yYLWU5Vz8XCiKd93Xog.png)*index.html*

Next, we will style the Submit button. We will create a stripe effect fro the button.

![Button](https://cdn-images-1.medium.com/max/2880/1*4yHJ3Pp0lIyMt0sh-YcNWw.png)*Button*

Let’s add some hover effect also.

    .register-wrapper form input[type="submit"]:hover {
        background-size: 40px 40px;
    }

And now our button looks like below.

![Our Button](https://cdn-images-1.medium.com/max/2880/1*cPgv6xV8IemalJJl4M948Q.png)*Our Button*

Next, we will add style for our title and the box wrapping this form.

![title](https://cdn-images-1.medium.com/max/2880/1*kZXkW_2SYBI8t2jEkOmveA.png)*title*

Our Form is almost complete and looks like below.

![Almost done](https://cdn-images-1.medium.com/max/2880/1*aJajOx1O7A8yVp2GrC1zCA.png)*Almost done*

Next, we will create a tile effect which, will happen when we hover over the form.

![tile style](https://cdn-images-1.medium.com/max/2880/1*7XYJcke2VMMEYKItwwZLZQ.png)*tile style*

It will show the below.

![Tile effect](https://cdn-images-1.medium.com/max/2880/1*8rao2LA55cyi_gtvAft41w.png)*Tile effect*

This completes day 2 of the course. 

You can find the code for the same [here](https://github.com/nabendu82/CSS10days).


*[This post is also available on DEV.](https://dev.to/nabendu82/css3-in-10-days-day-2-8i2)*


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
