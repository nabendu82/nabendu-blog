---
title: Basics of Flexbox — 1
date: '2019-07-24T17:00:19.346Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--J-jx8LRV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--wcezvjTy--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/uge65ittv4nin12xg1db.jpeg
comments_count: 0
positive_reactions_count: 11
tags: []
canonical_url: 'https://medium.com/@nabendu82/basics-of-flexbox-1-54d07f3b8b01'
template: post
---
I have been developing sites for quite sometime now. First using Javascript, then React. Always have sort of ignored CSS because floats were weird and not responsive. So, taken the shortcut and start designing these cool layouts in Bootstrap and concentrating on the programming in JS part. But now been excited about CSS again. I am learning CSS again, now with flexbox and soon will learn CSS grid.

I used to think Flexbox is just a display property, but heard about them a lot on the awesome Podcast by Wes Bos and Scott Tolinski - [Syntax](https://syntax.fm/)

The best resource to learn about Flexbox is [this](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) article on CSS tricks. Also if you want to learn designing a complete web layout, check [here](https://css-tricks.com/designing-a-product-page-layout-with-flexbox/)

And then there is this awesome **free** tutorial from [Wes Bos](https://flexbox.io/)

I am creating this in [codepen](https://codepen.io/nabendu82/pen/mLRxLR). Let’s first create our html structure.

```
<html>
<head>
 <title>Flexbox Basics</title>
</head>
<body>
<div class=”container”>
 <div class=”box box1">1</div>
 <div class=”box box2">2</div>
 <div class=”box box3">3</div>
 <div class=”box box4">4</div>
 <div class=”box box5">5</div>
 <div class=”box box6">6</div>
 <div class=”box box7">7</div>
 <div class=”box box8">8</div>
 <div class=”box box9">9</div>
 <div class=”box box10">10</div>
</div>
</body>
</html>
```

And then the CSS

```
* {
 box-sizing: border-box;
}
.box{
 color: white;
 font-size: 100px;
 text-align: center;
 padding: 10px;
}
.box1 {background: red;}
.box2 {background: green;}
.box3 {background: yellow;}
.box4 {background: brown;}
.box5 {background: orange;}
.box6 {background: purple;}
.box7 {background: black;}
.box8 {background: magenta;}
.box9 {background: silver;}
.box10 {background: teal;}
```

After adding this you will see, this as output.

![Output](https://cdn-images-1.medium.com/max/2836/1*h4EUTkAh--FueNdtt8_-lg.png)*Output*

Now, lets make our container a flex and also, show a border to understand what it does.

```
.container {
 display: flex;
 border: 5px solid goldenrod
}
```

Now, what it basically does is align everything in a single row.

![display: flex](https://cdn-images-1.medium.com/max/2850/1*IjXZqlZJrhiqVHPQxavZ9A.png)*display: flex*

There is an inline-flex also, which will have the width only till the elements.

```
.container {
 display: inline-flex;
 border: 5px solid goldenrod
}
```

![display: inline-flex](https://cdn-images-1.medium.com/max/2848/1*cEmmEJGbiG2xNxVRmpRLfw.png)*display: inline-flex*

**Flex Direction**
Now, we will learn about flex-directions, but let’s first make the height of our flex-items to be 100%.

```
.container {
 display: flex;
 border: 5px solid goldenrod;
 height: 100vh;
}
```

It will show the output as below.

![height: 100vh](https://cdn-images-1.medium.com/max/2840/1*NOeM8s7UB1PWZOKcbPllpg.png)*height: 100vh*

Now the flex-direction is the direction in which the main axis flow. It is default row.

```
.container {
 display: flex;
 border: 5px solid goldenrod;
 height: 100vh;
 flex-direction: row;
}
```

It will output the same as above, but note Main axis is left to right-

![Main axis is left to right](https://cdn-images-1.medium.com/max/2840/1*rtfeFW3EBpv3_lIDzbUhnQ.png)*Main axis is left to right*

Now let’s do flex-direction: column.

```
.container {
 display: flex;
 border: 5px solid goldenrod;
 height: 100vh;
 flex-direction: column;
}
```

Check the output, all the items are stacked top to bottom, as the main axis is now top to bottom.

![main axis is now top to bottom.](https://cdn-images-1.medium.com/max/2838/1*z0W0W53K8bgbilKh7horDQ.png)*main axis is now top to bottom.*

Now, there are two more properties, which we hardly use in Production sites but they are there. They are 
**row-reverse** - Main axis will become **right to left**
**column-reverse** — Main axis will become **bottom to top**.

**Flex wrap**
Now we will learn about the property flex-wrap. We will use the below.

```
.container {
 display: flex;
 border: 5px solid goldenrod;
 height: 100vh;
}
.box {
 width: 300px
}
```

It will show as below. What flex is doing, is first calculating the width ie 300px x 10 = 3000px. But by display is not 3000px wide. It is around 1280 px.

So, flexbox distribute the space among 10 rows.

![Distributing space](https://cdn-images-1.medium.com/max/2832/1*zq87AHQHTjgBpblZhB8HyA.png)*Distributing space*

Now, we don’t want this. And want our flex-items to be 300 px wide. We do it by setting **flex-wrap: wrap** on the parent container.

```
.container {
 display: flex;
 border: 5px solid goldenrod;
 height: 100vh;
 flex-wrap: wrap
}
.box {
 width: 300px
}
```

It will make every item of 300 px wide and if not find any space on the row, then wrap it to the next row.

![flex-wrap: wrap](https://cdn-images-1.medium.com/max/2830/1*Xwk9ZllA61Qw2FzBYLMk-w.png)*flex-wrap: wrap*

We can also give the width 33.333% for 3 items to nicely fill a row (33.333 x 3 = 99.999)

```
.container {
 display: flex;
 border: 5px solid goldenrod;
 height: 100vh;
 flex-wrap: wrap
}
.box {
 width: 33.3333%
}
```

It will show as below.

![width: 33.3333%](https://cdn-images-1.medium.com/max/2832/1*wPN8b_-DG0d-BWK2axp6Tg.png)*width: 33.3333%*

Below is a cool trick, to give margin between these boxes. We have to do this as margin is not part of box model.

```
.container {
 display: flex;
 border: 5px solid goldenrod;
 height: 100vh;
 flex-wrap: wrap
}
.box {
 width: calc(33.3333% — 20px);
 margin: 10px;
}
```

This will produce.

![width: calc(33.3333% — 20px);](https://cdn-images-1.medium.com/max/2826/1*oHSxGNxbFDzaFbyev1Bx3Q.png)*width: calc(33.3333% — 20px);*

The same can be applied with help of border. As border is part of box model, we don’t need the calc to minus anything.

![space using border](https://cdn-images-1.medium.com/max/2838/1*p9UH7q0rmjwQqkb_0Tf6Zw.png)*space using border*

**Flexbox Ordering**
Is a way to move the ordering of your flex-items.

For this demo, we will use **flex: 1** in our flex-item. We will learn more about this later. It basically fills the whole row.

![flex:1](https://cdn-images-1.medium.com/max/2844/1*cKavXy-m_PdQtHap1tf7aw.png)*flex:1*

The order property takes the item to the order of flow and place it as mentioned. As from below image the item 3 and 5 are at the end, because we have set there order to 1 and 2 respectively. The items 1 to 10 will become order 0, by default.

![order: 1](https://cdn-images-1.medium.com/max/2850/1*wc1LF0O2AzTTl1Kv2g-YFQ.png)*order: 1*


*[This post is also available on DEV.](https://dev.to/nabendu82/basics-of-flexbox-1-4dnk)*


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
