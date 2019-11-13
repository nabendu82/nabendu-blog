---
title: CSS3 in 10 days — Day 3
date: '2019-10-19T04:51:13.005Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--oWq19pLi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--HoQks5Gc--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/1vl28be2wkwbym7m3tty.jpeg
comments_count: 0
positive_reactions_count: 42
tags: []
canonical_url: 'https://medium.com/@nabendu82/css3-in-10-days-day-3-82ab9469cfd7'
template: post
---
Welcome to Day 3 of learning CSS. 

As i have told earlier, this series is inspired by [this](https://www.youtube.com/watch?v=pmKyG3NBY_k&list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU) awesome youtube series in freecodecamp channel.

We will start with Useful Broken Image on day-3. Open your code editor and create a new 3.1-BrokenImage folder and two files index.html and sandbox.css inside it.

![Broken Image](https://cdn-images-1.medium.com/max/2880/1*W2Es6yDjx73vtCLSf5VCMQ.png)*Broken Image*

Next, in index.html put the basic html.

![index.html](https://cdn-images-1.medium.com/max/2880/1*Zm_A1O6JZfTP5HiHh9YcCA.png)*index.html*

Open the index.html in browser and you will see, the ugly default broken image of the browser.

![Default Broken](https://cdn-images-1.medium.com/max/2880/1*NxQ1MkGrRA2rfboM4jKLzg.png)*Default Broken*

Let’s now put two images. One for brokenimage2 and other to be displayed when no image is found. Both images can be downloaded from the github link which i will provide later.

![Images](https://cdn-images-1.medium.com/max/2880/1*U6qt5NG5LX9C7XCMQJ9rXw.png)*Images*

Next, we will put the code to show image using after pseudo element. In sandbox.css put the below code.

![sandbox](https://cdn-images-1.medium.com/max/2880/1*V4Tp5xVlp0SicyUTDpTp5g.png)*sandbox*

Now our index.html, will look like below.

![index.html](https://cdn-images-1.medium.com/max/2880/1*EJWiBev2hv_dMcP4sZmsqw.png)*index.html*

Next, we will learn to make Print Specific Styles. So, that when you hit print of the webpage, you get the minimal texts only.

Again in your code editor and create a new 3.2-PrintStyles folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![index.html](https://cdn-images-1.medium.com/max/2880/1*5ymOg1q1Hp3RWOu5JmcgAg.png)*index.html*

Let’s put some style for print. We will be using media queries for this.

![sandbox](https://cdn-images-1.medium.com/max/2880/1*T5pdmogVhpLdGAzwSZg1lw.png)*sandbox*

Open the index.html in browser and hit Cmd+p to open print preview. We are hiding final-result h2 and doing some default styles.

![](https://cdn-images-1.medium.com/max/2880/1*m8jZgYxOHuCPoMYvMPDkrA.png)

Next, we will add styles for h1 and other tags and we are also expanding the anchor tag for print.

![anchor updates](https://cdn-images-1.medium.com/max/2880/1*V4yYLDIsG3LshE5pzTR2Rg.png)*anchor updates*

So, our print is completed and is perfect to take a print.

![The Print](https://cdn-images-1.medium.com/max/2880/1*NnTtOL4NIMYFfMhPy6x4Ag.png)*The Print*

Next, we will learn Image Manipulation. In CSS3 we can do some cool tricks of blurring and inverting image.

Again in your code editor and create a new 3.3-ImageManipulation folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![index.html](https://cdn-images-1.medium.com/max/2880/1*w7AAd5pzrIHPkeKZPay0nA.png)*index.html*

It will show 4 images from unsplash, which we will manipulate in sometime.

![Default image](https://cdn-images-1.medium.com/max/2880/1*fUpi7ymblmR4-AgZQ5dLEg.png)*Default image*

Let’s add code for first two images. We will make them grey and blur respectively.

![First two](https://cdn-images-1.medium.com/max/2872/1*BxBHKqfTd08JzkNPgthHUA.png)*First two*

Our first two images looks like below. Once we hover over them they will change back to original.

![First two](https://cdn-images-1.medium.com/max/2880/1*7BVAhM802J7r3siotCNudg.png)*First two*

Now we will add code for next two images. We will make them invert and sepia respectively.

![invert](https://cdn-images-1.medium.com/max/2880/1*Y-Ep_wQ3OJiGj4p1Cns2ZQ.png)*invert*

Our next two images looks like below. Once we hover over them they will change back to original.

![Last two](https://cdn-images-1.medium.com/max/2880/1*jgo2H_ch4JA-oQ5DjGjuWA.png)*Last two*

This completes day 3 of the course. 

You can find the code for the same [here](https://github.com/nabendu82/CSS10days).


*[This post is also available on DEV.](https://dev.to/nabendu82/css3-in-10-days-day-3-46fo)*


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
