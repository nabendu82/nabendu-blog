---
title: Basics of CSS Grid -1
date: '2019-09-05T09:19:21.640Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--O1QU3FKk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--JcXSqlcQ--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/nu8aiaq1nwjmavkzp8i0.jpeg
comments_count: 0
positive_reactions_count: 8
tags: []
canonical_url: 'https://medium.com/@nabendu82/basics-of-css-grid-1-92e447d4f1e9'
template: post
---
As i have written in my previous blog on [flexbox](https://dev.to/nabendu82/basics-of-flexbox-1-4dnk), that it helped me get out of the bootstrap trap. I also use another new addition to CSS, which is know as grid. It is an awesome system which can be used to develop the whole website.

I generally use a combination of flexbox and Grid in my projects. CSS grid can divide the whole page into columns and rows easily and there are many ways in which you can place the elements.

The best resource to quickly reference Grid [this](https://css-tricks.com/snippets/css/complete-guide-grid/) article on CSS tricks.

And then there is this awesome **free** tutorial from [Wes Bos](https://cssgrid.io/). This blog series is also inspired and based upon that series.

I will be using this [codepen](https://codepen.io/nabendu82/full/zJddGM/) for the tutorial.

Let first have some divs with class items inside a div with class container. As, you have assumed, the container will be Grid and the items will be it’s children.

![The basic div](https://cdn-images-1.medium.com/max/2608/1*jyBELuQZa8vvVc9sz4DfiQ.png)*The basic div*

It will produce the below. Since div are row level elements, each will be stack one below other.

![The result](https://cdn-images-1.medium.com/max/2344/1*eeKzoPkJI-CDpp_BrpwzyQ.png)*The result*

Let style it a bit, so that it looks good. The same basic style will be used in all tutorials. It contains the basic font, background color and the css to center the content of the items.

![basic css-1](https://cdn-images-1.medium.com/max/3696/1*H-XbRINY-HJzNxTwRDD55A.png)*basic css-1*

![basic css -2](https://cdn-images-1.medium.com/max/3688/1*_UfdnzxVBJvc-_bK5K7BGg.png)*basic css -2*

Now our codepen looks like.

![The beauty](https://cdn-images-1.medium.com/max/5756/1*1DaWCVG6CNHYDSoX1bK97w.png)*The beauty*

Now let’s start griding. As with flexbox, we add the display property. We will add the below in CSS.

    .container {
     display: grid;
     }

As if we check, it changes nothing. Because in grid we have to specify the column and/or row property. The column property is specified by **grid-template-columns**. So, below means create two columns. One of 200px and other of 500px.

    .container {
          display: grid;
          grid-template-columns: 200px 500px;
        }

This will arrange our 10 items in two columns of 200px and 500px .

![The arrangement](https://cdn-images-1.medium.com/max/5760/1*76Ia3nIqKL2Z8x4qS36gQg.png)*The arrangement*

Now lets add the row property by grid-template-rows. The below will create 3 rows — 100px, 50px and 200px;

    .container {
          display: grid;
          grid-template-columns: 200px 500px;
          grid-template-rows: 200px 100px 300px;
        }

This will result in the below. But wait we have 5 rows and the last 2 rows, doesn’t takes the sizes we specified. 
They were created because we had more items then that could be fitted in our 2 column and 3 rows system.
So, grid created them and kept the row height as default height of the number inside it. We will learn more about these later in the series.

![](https://cdn-images-1.medium.com/max/5760/1*rXrdqTTQ-2aSk7IZZR4nZQ.png)

Finally, lets add some gaps between the items. This can be easily done in Grid by the property **grid-gap**.

    .container {
          display: grid;
          grid-template-columns: 200px 500px;
          grid-template-rows: 100px 50px 200px;
          grid-gap: 5px;
        }

Which results in 5px gap in both rows and columns.

![The final image of this tutorial](https://cdn-images-1.medium.com/max/5760/1*_TxXU0NDM16MGP0Cfmn2mA.png)*The final image of this tutorial*


*[This post is also available on DEV.](https://dev.to/nabendu82/basics-of-css-grid-1-3c9a)*


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
