---
title: CSS Animation Tutorial — 3
date: '2019-11-01T07:26:53.992Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--TSroL0wB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--ms7KoBLO--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/4g2srp367tjbfb128skb.jpeg
comments_count: 0
positive_reactions_count: 18
tags: []
canonical_url: 'https://medium.com/@nabendu82/css-animation-tutorial-3-ad3b43b871e3'
template: post
---
Welcome to part 3 of the series. 

This series is inspired by [this](https://www.youtube.com/watch?v=jgw82b5Y2MU&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5) awesome YouTube series by **The Net Ninja**.

We will start where we left in part 2, and continue with Mario Kart Animations.

We will leave Mario with his infinite animation and bring his brother **Luigi**, to learn further animation. So, go ahead and add Luigi in index.html

![Luigi](https://cdn-images-1.medium.com/max/2880/1*Fz9RS6xNN_7IXKoOgVwHvg.png)*Luigi*

Next, also add styles for him in style.css

![Luigi styles](https://cdn-images-1.medium.com/max/2880/1*UiZOkyEQkCPeiSJRGQVvMg.png)*Luigi styles*

It will show Luigi in browser.

![Luigi in browser](https://cdn-images-1.medium.com/max/2880/1*CZbxJfFWrPT_8i4P3aiECQ.png)*Luigi in browser*

We will use the same animation for Luigi as Mario, but we will give his direction as reverse.

![reverse](https://cdn-images-1.medium.com/max/2880/1*uNURhqF9BBAy-V7LUgfx9w.png)*reverse*

The animation-direction: reverse property, will have Luigi go from right to left.

![Luigi reverse](https://cdn-images-1.medium.com/max/2000/1*e0VBzwgWvvu2xoiJQqNQ3A.gif)*Luigi reverse*

Now, you might have noticed from Mario that he is slowing down towards the right end.

This is because of animation-timing-function, which is like the transition-timing-function we learnt in [part 1](https://dev.to/nabendu82/css-animation-tutorial-1-a5n)

It is by default ease, which slow start, then fast, then end slowly.

We will make Mario travel with linear speed i.e. with the same speed from start to end.

![linear speed](https://cdn-images-1.medium.com/max/2790/1*BidG756tkdVb9lm5hNQ4Xw.png)*linear speed*

So, Mario travel at linear speed now.

![linear mario](https://cdn-images-1.medium.com/max/2000/1*CXfzdImkR688nNcmsUq76A.gif)*linear mario*

All the different animation properties which we have used for Mario and Luigi, can be used in a single line with shorthand notation.

We will learn it with clouds. So, let’s add two clouds images in our sky.

![Clouds](https://cdn-images-1.medium.com/max/2880/1*d6Rd9F2ecs_FD86qFMwrFA.png)*Clouds*

It will show these two clouds.

![Two clouds](https://cdn-images-1.medium.com/max/2880/1*3q56DdmFe_EHCwIV4DAF2g.png)*Two clouds*

Let’s give the two clouds some positioning, so that they overlap each other.

![cloud positioning](https://cdn-images-1.medium.com/max/2784/1*45iuYnoEzwt03T1Y-sBB0g.png)*cloud positioning*

It will show them as below.

![Cloud positioned](https://cdn-images-1.medium.com/max/2880/1*9y--HS2dQJvHO6riMuNhYA.png)*Cloud positioned*

Now, we will animate them with the shortcuts. The animation shortcut takes animation name, duration, timing-function, iteration-count, direction in order.

![animation shortcuts](https://cdn-images-1.medium.com/max/2880/1*j9Eex7CwUocmbBwu00KyRA.png)*animation shortcuts*

It will show these clouds moving slowly from right to left.

![Cloud moving](https://cdn-images-1.medium.com/max/2000/1*Z6K3BQ6Ah1iUEjXu0Qtk8Q.gif)*Cloud moving*

We will now learn about chaining two animations. We will create a jump animation for Mario. Now, it will have 3 states. So, we cannot use from and to. We will use percentages in such cases.

![3 state animations](https://cdn-images-1.medium.com/max/2782/1*BacVCnLcI7b717nE9a94vw.png)*3 state animations*

Now, we will chain it. As you can see, we are using shorthand notation for Mario’s earlier drive animation. After that we are using a comma(,) and putting the jump animation.

![Chaining animation](https://cdn-images-1.medium.com/max/2780/1*_a9R5lQTq5CeKEW4cZyKQw.png)*Chaining animation*

Now, our Mario will jump once for 0.3s after a delay of 1.2s, with ease timing.

![Jumping Mario](https://cdn-images-1.medium.com/max/2000/1*IxWBHUjZufjuhaqDMTWf4Q.gif)*Jumping Mario*

It completes our Mario animation and part 3. You can find the code for the same [here](https://github.com/nabendu82/CSSAnimation).

*[This post is also available on DEV.](https://dev.to/nabendu82/css-animation-tutorial-3-4ja6)*


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
