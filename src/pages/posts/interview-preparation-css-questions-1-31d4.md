---
title: Interview Preparation — CSS Questions-1
date: '2019-09-09T15:54:26.033Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--eZHg0V2C--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--tcgx7KWl--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/gokrb9ndlwwpcclv8x0c.jpeg
comments_count: 0
positive_reactions_count: 6
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/interview-preparation-css-questions-1-2333469a8c36
template: post
---
Welcome to part-13 of the series and the first part in CSS questions.

**Question 79-** *What is the difference between display: block, inline-block and inline*?
**Answer-**These are the different properties which are there in every HTML element on a webpage. By default everything is display: block on a page.

**display:block**
When we give this property to a series of elements, they will come after each other, as pilling up. Each block element will also cover the whole width of the page. By default the block-level elements are 
`<div>, <p>, <hr>, <ul>, <ol>, <li> and more`
. The below jsfiddle shows display: block.

![**display:block**](https://cdn-images-1.medium.com/max/5760/1*ySxaFLPcedZmHw2Zv19KWQ.png)***display:block***

**display:inline-block**
This will set the elements in one row, instead of pilling up. The height and the the width are the size of the content by default. There is also a space between two elements, which is put by the browser. We will update our jsfiddle to show “inline-block” elements.

![**display:inline-block**](https://cdn-images-1.medium.com/max/5760/1*9DFznlCai2ppRoYlKymXnQ.png)***display:inline-block***

**display:inline**
This will also set the elements in one row. There is also a space between two elements, which is put by the browser. By default inline elements are 
`<a>, <img>, <input>, <br>, <select> and more`
. We will update our jsfiddle to show “inline” elements.

![**display:inline**](https://cdn-images-1.medium.com/max/5760/1*SxYvSsp9G9driX_lux3CBg.png)***display:inline***

The jsfiddle for the above can be found [here](http://jsfiddle.net/nabendu/c4t1sogL/).

**Question 80-** *Is it possible to have width and height in display:inline-block and display:inline*?
**Answer-** The “display:inline-block” is a combination of “display:block” and “display:inline”. So, it have some properties of block level elements also.
> *It is possible to have width and height in “display:inline-block” but not in “display:inline”*

Same is displayed in the below jsfiddle. You can find the jsfiddle [here](http://jsfiddle.net/nabendu/bdt7p9vx/).

![display:inline-block vs display:inline](https://cdn-images-1.medium.com/max/5760/1*ZyhwTUuQeHYN7U5HCZRQTA.png)*display:inline-block vs display:inline*

**Question 81-** *Is it possible to have padding and margin in display:inline-block and display:inline*?
**Answer-**It is possible to have padding and margin in both “display:inline-block” and “display:inline”.

Same is displayed in the below jsfiddle. You can find the jsfiddle [here](http://jsfiddle.net/nabendu/L51uzp6r/).

![display:inline-block and display:inline](https://cdn-images-1.medium.com/max/5760/1*3p6Z4e1Whq7gpfcds5_SLA.png)*display:inline-block and display:inline*

**Question 82-** *How to eliminate default gap in “display:inline-block” and “display:inline”*?
**Answer-**There are spaces between elements in both “display:inline-block” and “display:inline” as we have seen earlier.
The reason you get the spaces is because, well, you have spaces between the elements (a line break and a few tabs counts as a space, just to be clear).

There are some tricks to remove the spaces. One of them is to add HTML comments between elements. You can find more tricks in this amazing CSS tricks article [here](https://css-tricks.com/fighting-the-space-between-inline-block-elements/).

![eliminate default gap](https://cdn-images-1.medium.com/max/5760/1*6veQhH54R-_Q79brjfAOrA.png)*eliminate default gap*

The jsfiddle for the above can be found [here](http://jsfiddle.net/nabendu/hu8erogq/).

**Question 83-** *What is CSS box model*?
**Answer-**CSS box model is a box that wraps around every element in HTML, which includes Content, Padding, Border and Margin.

We can have a empty <div> and set Content(height & width), Padding, Border and Margin. Also, open the developer tools which will show our box model. 
You can find the JSfiddle [here](http://jsfiddle.net/nabendu/sbdj0fma/).

![The Box model](https://cdn-images-1.medium.com/max/5760/1*vXlJsNxydPZUYp5VGH0pgQ.png)*The Box model*

**Question 84-** *What is difference between box-sizing: content-box and box-sizing: border-box*?
**Answer-**By default every box(HTML element) is “box-sizing: content-box”. It means the content is separate from border and padding. It is displayed below, where the content(100px) is separate from padding(10px both side) and border(20px both sides).

![“box-sizing: content-box”](https://cdn-images-1.medium.com/max/5760/1*vXlJsNxydPZUYp5VGH0pgQ.png)*“box-sizing: content-box”*

Now, we will change the above to “box-sizing: border-box” and see the difference. As you can see from the below jsfiddle, that the box shrinks. It is because the padding(10px both side) and border(20px both sides) becomes part of the content(100px).
You can find this JSfiddle [here](http://jsfiddle.net/nabendu/9fgyvc1p/).

![“box-sizing: border-box”](https://cdn-images-1.medium.com/max/5760/1*kA33u90zFCn_uUpUELUkOA.png)*“box-sizing: border-box”*

**Question 85-** *Can we have negative padding and negative margin in CSS*?
**Answer-**Let us first understand what is padding and margin in relation to box-model. The box model is displayed below.

![The Box Model](https://cdn-images-1.medium.com/max/2000/1*31a7_cS-iXwRT9BE-9sGKQ.png)*The Box Model*

* Padding pushes away the border from the content, so it makes the space around the content. When it’s set to zero, the padding edge is the same as the content edge.

* Margin pushes away the content from any other existing boxes. It is used to make the horizontal and vertical space between elements. When margin is set to zero, it means that the margin edge is the same as the border edge.

By having margin as negative, we can have many interesting CSS display cases. But negative padding doesn’t make any sense and is not allowed.

*So, we can have negative margin but no negative padding.*

This concludes the part-13 of the series and first part of CSS questions. 


*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-css-questions-1-31d4)*


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
