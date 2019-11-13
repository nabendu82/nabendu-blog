---
title: CSS3 in 10 days — Day 9
date: '2019-10-26T06:29:33.161Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--ZnC8Z_LG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--AvOFXn1M--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/gc2mztih82za4n6ehbrw.jpeg
comments_count: 0
positive_reactions_count: 42
tags: []
canonical_url: 'https://medium.com/@nabendu82/css3-in-10-days-day-9-382419364a28'
template: post
---
Welcome to Day 9 of learning CSS. 

As i have told earlier, this series is inspired by [this](https://www.youtube.com/watch?v=pmKyG3NBY_k&list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU) awesome youtube series in freecodecamp channel.

We will start with 3D Layering Effect on day-9. Open your code editor and create a new 9.1-3DLayer folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basic Html](https://cdn-images-1.medium.com/max/2880/1*jmtvbZ3Sd1bFOZBzvvTprw.png)*Basic Html*

Now, add the img folder containing these images. All the svgs are from the layer.psd file.

![Images](https://cdn-images-1.medium.com/max/2880/1*VEdqjffdEDhEnFh1oj_niQ.png)*Images*

Now, let’s put some basic CSS in sandbox.css to show all the svg images.

![sandbox](https://cdn-images-1.medium.com/max/2880/1*xIvLrRGcL5Xtnk7myZfiEw.png)*sandbox*

It will show as below in browser.

![Initial svgs](https://cdn-images-1.medium.com/max/2880/1*eNMjRRHrvPY_8c3vG-x2fg.png)*Initial svgs*

Next, let’s align the images in svg by putting this in sandbox.css

![Aligning](https://cdn-images-1.medium.com/max/2876/1*ppoM4mTyZvljPSdlIudkZg.png)*Aligning*

It will perfectly align all the svg images.

![Aligned images](https://cdn-images-1.medium.com/max/2880/1*La2t3-sEUoFxFJZCAfu0IA.png)*Aligned images*

Now, it’s time for the 3D effect. We are basically using translate and rotate to rotate each svg image, but the key here is to use perspective as it gives 3D effect.

![3D effect](https://cdn-images-1.medium.com/max/2880/1*YST7PVYKsC67mLkQ5oq6Nw.png)*3D effect*

This gives our image this nice animation, with all layers separating on hover.

![Layer animation](https://cdn-images-1.medium.com/max/2000/1*jsa2Ea15mV6L7YYrCseZ3g.gif)*Layer animation*

We will next start with Dropdown menu on day-9. Open your code editor and create a new 9.2-DropdownMenu folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basic dropdown](https://cdn-images-1.medium.com/max/2880/1*jJcvdw7WdW7-Rf2eBzzp7Q.png)*Basic dropdown*

With the basic html our page looks like below.

![Basic Page](https://cdn-images-1.medium.com/max/2880/1*9IFGTgUnUBsYG7HxylW8BQ.png)*Basic Page*

Let’s put some basic css in sandbox.css

![Basic CSS](https://cdn-images-1.medium.com/max/2880/1*xekys8gf4h_SQ9gSirS0gg.png)*Basic CSS*

It will style the button nicely

![Button styled](https://cdn-images-1.medium.com/max/2880/1*1ZaF_odVTPIDlXg93XgbAQ.png)*Button styled*

Let’s now complete the dropdown css.

![CSS complete](https://cdn-images-1.medium.com/max/2880/1*bR6Kdpzus1WwtLkpMS7ZRg.png)*CSS complete*

It will complete our dropdown and show this nice dropdown on hover.

![The Dropdown](https://cdn-images-1.medium.com/max/2000/1*5fGrafJS3V0tljPGeOaXFA.gif)*The Dropdown*

This completes day 9 of the course. You can find the code for the same [here](https://github.com/nabendu82/CSS10days).

*[This post is also available on DEV.](https://dev.to/nabendu82/css3-in-10-days-day-9-kb4)*


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
