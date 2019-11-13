---
title: CSS3 in 10 days — Day 6
date: '2019-10-26T05:56:38.194Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--YGDfM2bo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--uyZRcgL9--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/o68flc278q5ntd2n7owi.jpeg
comments_count: 0
positive_reactions_count: 23
tags: []
canonical_url: 'https://medium.com/@nabendu82/css3-in-10-days-day-6-d19d8ea47b5f'
template: post
---
Welcome to Day 6 of learning CSS. 

As i have told earlier, this series is inspired by [this](https://www.youtube.com/watch?v=pmKyG3NBY_k&list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU) awesome youtube series in freecodecamp channel.

We will start with Tooltip on day-6. Open your code editor and create a new 6.1-Tooltip folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basic index](https://cdn-images-1.medium.com/max/2880/1*43YAZl7fx0_O2F_6JrjNQA.png)*Basic index*

Let first put some basic css in sandbox.css to show four boxes.

![tooltip](https://cdn-images-1.medium.com/max/2880/1*rKCnakpldtqD9BkaBzzkww.png)*tooltip*

It will show as below.

![Basic box](https://cdn-images-1.medium.com/max/2880/1*JQ5epnkOU0u-CBJYEH6mzQ.png)*Basic box*

Now, let’s create a tooltip on hover. We will use the after and before pseudo element.

![Tooltip code](https://cdn-images-1.medium.com/max/2880/1*pXZ7uOiWaIgRNYpSa8ciyw.png)*Tooltip code*

It will show below. Both after and before are not in correct position. We will fix it later.

![Tooltip](https://cdn-images-1.medium.com/max/2880/1*XSBFHB3CmL3YGA_hW8nScQ.png)*Tooltip*

We will fix it now, but also create two new CSS rule for top.

![Fixing top](https://cdn-images-1.medium.com/max/2880/1*_OO4hJfipRvOsHFh3eYvXA.png)*Fixing top*

It will fix our first tooltip.

![First one fixed](https://cdn-images-1.medium.com/max/2880/1*KAr38kGTwDIAfDRCDDHc_Q.png)*First one fixed*

Now, we will write the code for tooltip right.

![Tooltip right](https://cdn-images-1.medium.com/max/2880/1*n9eTNfDChFWeHy-k09xI7g.png)*Tooltip right*

It will show as below.

![Right](https://cdn-images-1.medium.com/max/2880/1*e1oKc3mg2-WFM-FinTLdTw.png)*Right*

Next, we will write the code for tooltip bottom.

![Tooltip bottom](https://cdn-images-1.medium.com/max/2880/1*upT7qeieXTzG2rP4H-7U4w.png)*Tooltip bottom*

It will show as below.

![Bottom](https://cdn-images-1.medium.com/max/2880/1*D_akqpOLp6yvYBuWDtJV8w.png)*Bottom*

Next, we will write the code for tooltip left.

![tooltip left](https://cdn-images-1.medium.com/max/2786/1*JQ9nUpW0RlE_Si9C9zm0NQ.png)*tooltip left*

It will show as below.

![Left](https://cdn-images-1.medium.com/max/2880/1*j0l0SOkF2m-D_ihwCkO11g.png)*Left*

Next we will Animated Progress Bar on day-6. Open your code editor and create a new 6.1-ProgressBar folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basic index](https://cdn-images-1.medium.com/max/2880/1*4ofNX6ynjC6Oy0I8nCwgmg.png)*Basic index*

Let’s create the style for the first Progress bar.

![First style](https://cdn-images-1.medium.com/max/2880/1*WyRgWcKq0iW2FeEofkZkuA.png)*First style*

It will show this beautiful Progress bar.

![Beautiful Bar](https://cdn-images-1.medium.com/max/2878/1*9pXMnYra9ituAlK58cw36Q.png)*Beautiful Bar*

Next, we will write code to make it like stripe.

![Stripe effect](https://cdn-images-1.medium.com/max/2780/1*7qQ7zPijvrQVGImurYm-6Q.png)*Stripe effect*

It will show the progress bar with beautiful stripes.

![Stripes](https://cdn-images-1.medium.com/max/2880/1*Ee7NGd7sveUmenFsCqvOHA.png)*Stripes*

Now, we will add animations to the progress bar. We will add animation for both going forward and the stripe moving.

![Code added](https://cdn-images-1.medium.com/max/2880/1*NGhKCkBzLHN0TKEx5lEhXw.png)*Code added*

The animation keyframes.

![Keyframes](https://cdn-images-1.medium.com/max/2880/1*xoBBnb29EELkhONameV9Rw.png)*Keyframes*

The animation is as below.

![The animation](https://cdn-images-1.medium.com/max/2000/1*iGpEQ0tDUVMisqG22BHzrA.gif)*The animation*

We will next write code for the second Progress bar, which will have a tooltip also.

    .animation-bar-2 {
        position: relative;
        display: block;
        font-size: 16px;
        line-height: 16px;
        background: rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
      }
      .animation-bar-2 span {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        height: 20px;
        background-color: # 00e6e7;
        background-size: 100%;
        background-image: linear-gradient(to bottom, # 00b3b4, # 008081);
      }
      .animation-bar-2 span:before {
        position: absolute;
        right: 0;
        bottom: 100%;
        display: inline-block;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-right-width: 0;
        border-bottom-width: 0;
        border-top-color: rgba(0, 0, 0, 1);
        content: "";
      }
      .animation-bar-2 span:after {
        position: absolute;
        right: 0;
        bottom: calc(100% + 5px);
        z-index: 1;
        display: inline-block;
        content: attr(data-label);
        padding: 5px;
        border-radius: 3px;
        font-size: 0.8em;
        background-color: rgba(0, 0, 0, 1);
        color: # FFFFFF;
      }

It will initially show like below.

![Initial bar](https://cdn-images-1.medium.com/max/2880/1*E5giid98fowRuIGe2_m7JQ.png)*Initial bar*

Now, we will add animation to the Progress bar.

![Animation](https://cdn-images-1.medium.com/max/2880/1*Hhl30L3cOD376Dwj314Lkw.png)*Animation*

It will show this nice animation.

![The animation](https://cdn-images-1.medium.com/max/2000/1*p5wO6dLKpZxUE8GASAzvig.gif)*The animation*

This completes day 6 of the course. You can find the code for the same [here](https://github.com/nabendu82/CSS10days).

*[This post is also available on DEV.](https://dev.to/nabendu82/css3-in-10-days-day-6-2j9n)*


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
