---
title: Interview Preparation — CSS Questions-2
date: '2019-09-09T16:03:33.978Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--rivezIsz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--5L8O_u5f--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/co5vojy7vuwt8byzocdz.jpeg
comments_count: 0
positive_reactions_count: 5
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/interview-preparation-css-questions-2-ad67e243c451
template: post
---
Welcome to part-14 of the series and the second part in CSS questions. 

**Question 86-** *What is specificity in CSS*?
**Answer-**If you have for an HTML element, having two conflicting styles then the browser decides which one to apply based on it’s specificity. Specificity is nothing but set of rules the browser has. Let’s look into the important rules here -

**Last Style Rule**
If we have two same styles applied to an element, then the browser picks the last style. Consider the below example and the “background: red” will be picked by the browser.

![**Last Style**](https://cdn-images-1.medium.com/max/5756/1*2JAZg-9LiBc5wmKRaFV1lw.png)***Last Style***

**Class rule**
If one of the rule have class property, then it’s specificity becomes high and it is displayed by browser.

![**Class rule**](https://cdn-images-1.medium.com/max/5760/1*ePVz5JqLxsI_kMG-hqB02A.png)***Class rule***

**ID rule**
If we have an ID property in the element, it’s specificity is more then the class. So, browser will pick it up.

![**ID rule**](https://cdn-images-1.medium.com/max/5760/1*Z1IhJ-DWE0TuYBNqMUaR1A.png)***ID rule***

**!important rule**
The highest specificity is of the !important. If applied to any element, the browser will pick that rule.

![**!important rule**](https://cdn-images-1.medium.com/max/5756/1*3dCTQdTtNpdzQqNE8ugPXA.png)***!important rule***

You can find jsfiddle for the same [here](http://jsfiddle.net/nabendu/pk7x1uzv/).

**Question 87-** *How to centrally align a block element inside another element in using plain CSS*?
**Answer-**We will first have two <div>,one an outer and other an inner. The basic style will cause the inner <div> to be placed at the top-left.

![Initial step](https://cdn-images-1.medium.com/max/5760/1*FBEB0KzxCSzjkhLP2MBljw.png)*Initial step*

To make it exactly at the centre, the outer div will have a “position: relative” and inner div will have a “position: absolute”. Then we will move the inner div to “top: 50%”. It will result in the below.

![top: 50%](https://cdn-images-1.medium.com/max/5760/1*zsCnv_1vP1gRcVoEK7Dakg.png)*top: 50%*

Next we will move it to “left: 50%”. It will result in the below. As you might have notice it is not exactly centre, because the box was moved top and left from it’s edge.

![left: 50%](https://cdn-images-1.medium.com/max/5760/1*__K6SBu9rzesgeyBgL5e_w.png)*left: 50%*

To exactly centre it we will use the “tranform” property to move the div.

![transform: translate(-50%, -50%)](https://cdn-images-1.medium.com/max/5760/1*toegHoW9Dzw1ByMabTK8kQ.png)*transform: translate(-50%, -50%)*

You can find the JSfiddle for the above [here](http://jsfiddle.net/nabendu/f3ra84vw/).

**Question 88-** *How to centrally align a block element inside another element in using flexbox or CSS Grid*?
**Answer-**Using flexbox or CSS Grid to centrally align a block element inside another element is very easy. We will use two properties —“ justify-content” and “align-items”. One is used to align along the row axis and other along the column axis.

![Using flexbox](https://cdn-images-1.medium.com/max/5760/1*N_WmeTtcZHd30V1oV_EzpQ.png)*Using flexbox*

The same can be done using CSS grid as it also have those two properties.

![Using CSS Grid](https://cdn-images-1.medium.com/max/5760/1*HSNs6RdgRr5rGMsw3n0acg.png)*Using CSS Grid*

**Question 89-** *What is the difference between static, relative, absolute and fixed position*?
**Answer-**My default the position property of elements are **static**. So, if we have 3 elements then they will have a basic flow as shown in below [jsfiddle](http://jsfiddle.net/nabendu/ubfvnpsm/).

![**position: static**](https://cdn-images-1.medium.com/max/5760/1*VYYAArxp6bZ9JLh9zmdQBw.png)***position: static***

**position: relative**
Let’s change the position of second element to relative and move it 50px from top. As you might have notice that it moved 50px down from it’s original position, without affecting the element “one” and “three”. So, “position: relative” doesn’t disturbs it’s environment that much. The JSfiddle for the same is [here](http://jsfiddle.net/nabendu/83uecvo6/).

![**position: relative**](https://cdn-images-1.medium.com/max/5760/1*qQm-Dr0EyqFyZrw75Y20oQ.png)***position: relative***

**position: absolute**
We will now change the position of second element as absolute. When we give “two” absolute, then “three” moves up below of “one” as if “two” doesn’t exists. I have given “two” some opacity, so that we can see what happening behind it. So, “position: absolute” does disturbs it’s environment as it is referenced to it’s parent. The JSfiddle for the same is [here](http://jsfiddle.net/nabendu/cjstz0gm/).

![**position: absolute**](https://cdn-images-1.medium.com/max/5760/1*hIMJknrQzjT-xdx06rzi8g.png)***position: absolute***

**position: fixed**
The position fixed is like absolute but it is referenced to the entire page and not to it’s parent like absolute. So, it will stay at it’s position even after whatever happen to other elements. We will replicate the “three” element many times to see what happen. Now, scroll the jsfiddle and you will notice that “two” stays at it’s place. This is very useful position property to have a always present header navbar, even after scrolling down the page. Or to display a pop-up.
The JSfiddle for the same is [here](http://jsfiddle.net/nabendu/hgdn2L3x/).

![**position: fixed**](https://cdn-images-1.medium.com/max/5760/1*hBsS7owiwSbkiluipukOMw.png)***position: fixed***

**Question 90-** *What is the difference between visibility: hidden and display: none*?
**Answer-** With “visibility: hidden” set to an element, the element hides but it’s space is left blank and an empty space is visible.
But with “display: none”, it is totally removed from the DOM and no space is shown behind. The below [jsfiddle](http://jsfiddle.net/nabendu/hkc634v9/) displays the same.

![visibility: hidden and display: none](https://cdn-images-1.medium.com/max/5760/1*DDV0V4fQ-3F_BRZpn-jRWg.png)*visibility: hidden and display: none*

**Question 91-** *What is shadow DOM*?
**Answer-** CSS is basically global. If i write an style for one element, it can effect other element. The Shadow DOM is a way to attach hidden separated DOM to an element, so that the CSS stays encapsulated.

Let’s look at the below example. Here we have an 
`<h3>`
 “Welcome to Our Website”, which takes style from the global CSS and displayed as blue.
Now, we have a template which we have programmatically inserted into id “shadowHost” . It have it’s own 
`<h3>`
 style, so “News Widget” get displayed in green text. This is how we achieve shadow DOM.
The JSfiddle for the same can be found [here](http://jsfiddle.net/nabendu/ypgej827/).

![shadow DOM](https://cdn-images-1.medium.com/max/5760/1*Vesaa48_RagGF3z97mIfWg.png)*shadow DOM*

**Question 92-** *How to built triangle using plain CSS*?
**Answer-** We will first have a simple 
`<div>`
, which will be a square box with equal width and height as shown below.

![Square Box](https://cdn-images-1.medium.com/max/5760/1*j6cxwVQgRVLa5jFNd-YO2w.png)*Square Box*

Now we will have all borders of different color.

![borders of different color](https://cdn-images-1.medium.com/max/5760/1*Ro0vpCZr4fuP40JnNrscsw.png)*borders of different color*

Now, we will make the height and width of 0. We will now see four small triangles.

![four small triangles](https://cdn-images-1.medium.com/max/5760/1*sDgC7H_0c7-FZV_Wtc0n0A.png)*four small triangles*

Now, we increase the size of border and we will get four big triangles.

![four big triangles](https://cdn-images-1.medium.com/max/5760/1*TE6hMRSsKymKxXJPJBvjAg.png)*four big triangles*

So, now we can show any of the triangle we need. We first removed the “background: red”. Then we have to remove the opposite triangle of the triangle which we need and also to make the other two transparent. Below is what we need to do for a “Blue Triangle”.

![Blue triangle](https://cdn-images-1.medium.com/max/5760/1*6N-z8EpIXGiksI2K8LtgEg.png)*Blue triangle*

The below is what need to be done for “Green Triangle”.

![Green Triangle](https://cdn-images-1.medium.com/max/5760/1*QbcqShOquUzfOdtjQ561Cw.png)*Green Triangle*

**Question 93-** *What are pseudo elements in CSS*?
**Answer-** Pseudo elements are used to give you selector some special effects and it will allow some extra markup for the elements without disturbing it’s environment.

In the example below we have two pseudo elements ::after and ::before. As, per there name they inject content after and before an element respectively.

![::after and ::before](https://cdn-images-1.medium.com/max/5760/1*5dnQ2qMLzdBd5yxiamMaMQ.png)*::after and ::before*

One of the practical use of pseudo elements is to create a tooltip. We can create tooltip with help of pseudo class hover as below. Now, when we hover over the button, the “Welcome” changes to “Welcome My Martian friend”

![tooltip using hover](https://cdn-images-1.medium.com/max/5760/1*Exg4H3A8pCA6q9fTTHHlbw.png)*tooltip using hover*

You can find the JSfiddle for the above [here](http://jsfiddle.net/nabendu/qmkorLw9/).

**Question 94-** *What are data attributes and there utilities*?
**Answer-** In HTML if you want to store data, you can use data attributes. You can see in the below example, we have a button with various data attributes. Note that data attributes always starts with keyword “data”. Now, we can access the data attributes inside our CSS like a variable using “attr”. We used the dat attribute to create a tooltip, which will add data-name(Nabendu) to Profile if we hover over it.

![data attributes](https://cdn-images-1.medium.com/max/5760/1*UxFyqGfLc4M1ljMaAplzww.png)*data attributes*

After hovering, it shows as below.

![After hovering](https://cdn-images-1.medium.com/max/5760/1*gpTOAZk604aGhirwUqADcQ.png)*After hovering*

The JSfiddle for the above is [here](http://jsfiddle.net/nabendu/znaw0784/).

**Question 95-** *What is z-index*?
**Answer-** The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.

Let’s consider the below jsfiddle. There are four element stack over each other, but we are able to see only “D” as it is the last one.

![Four element stack over each other](https://cdn-images-1.medium.com/max/5760/1*qS5i022lg8LW1ml5NTkL3Q.png)*Four element stack over each other*

We will add some left to 3 element to be able to see the elements.

![left to see elements](https://cdn-images-1.medium.com/max/5760/1*bJ1vt4yYJhxMgQh9VnCgVw.png)*left to see elements*

Now, we will see the z-index property. All four elements have a z-index 0 by default. We are making **z-index: 1** for “C”. Now, “C” with green background will come on top.

![z-index: 1](https://cdn-images-1.medium.com/max/5760/1*G2LdPWJ7le54j18Aqa4vyw.png)*z-index: 1*

We are now making element “B” with aqua background, **z-index:2** so now it will show as it is having the highest z-index.

![**z-index:2**](https://cdn-images-1.medium.com/max/5760/1*3f6ibo-DBGpe-c9XXB0fmA.png)***z-index:2***

The jsfiddle for the above is [here](http://jsfiddle.net/nabendu/5xoqas4b/).

This concludes the part-14 of the series and final part of CSS questions. 

*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-css-questions-2-fo7)*


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
