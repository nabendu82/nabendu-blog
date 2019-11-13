---
title: Basics of CSS Grid -3
date: '2019-09-05T09:32:46.701Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--KeS7d5Dr--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--BkZsqFt8--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/e08gn2jznwxf3zssm2mo.jpeg
comments_count: 0
positive_reactions_count: 2
tags: []
canonical_url: 'https://medium.com/@nabendu82/basics-of-css-grid-3-bb98a69923a2'
template: post
---
Welcome to part-3 of the series.

We will look into *Sizing Tracks in CSS Grid* how. For this we will use this [codepen](https://codepen.io/nabendu82/full/oPoaYj/).

This is the initial html and css code.

    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
        <div class="item">11</div>
        <div class="item">12</div>
        <div class="item">13</div>
        <div class="item">14</div>
        <div class="item">15</div>

    </div>
      <style>
        .container {
          display: grid;
          grid-gap: 20px;
        }
      </style>

![The initial result](https://cdn-images-1.medium.com/max/5760/1*JgEMyfjXQvv5mjSPZoHxDQ.png)*The initial result*

Let use the percentage to size the column first by-

    .container {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 25% 25% 25% 25%;
        }

This will result in below and is not perfect. As you can see that item 4, 8 and 12 are to the edge and not displayed properly. It is because *25% x 4 = 100%* plus the grid-gap of 20px is also added.

![Not good](https://cdn-images-1.medium.com/max/5760/1*FImAAwLNa4e_Ltq0qUqr3w.png)*Not good*

CSS Grid introduces a new unit called **fr**. It is the free space left after the explicit width are laid out. To understand, let’s have this basic CSS. We are also using a border to get the space taken by Grid. We have two explicit width column of 200px and 150px respectively.

    .container {
          display: grid;
          grid-gap: 20px;
          border: 5px solid black;
          grid-template-columns: 200px 150px;
        }

![The result](https://cdn-images-1.medium.com/max/5760/1*dXjOoYlfFrQJeSjoiqe-oQ.png)*The result*

Now we will add a column with 1fr and it will take the space left after the 200px and 150px column laid out.

    .container {
          display: grid;
          grid-gap: 20px;
          border: 5px solid black;
          grid-template-columns: 200px 150px 1fr;
        }

![The result](https://cdn-images-1.medium.com/max/5752/1*3-roJWse2C4AvYtCiwHqyw.png)*The result*

Let now add another column with 2fr. It means the space left after laying 200px and 150px column will be divided into 1fr and 2fr column into 1:2 ratio.

    .container {
          display: grid;
          grid-gap: 20px;
          border: 5px solid black;
          grid-template-columns: 200px 150px 1fr 2fr;
        }

![The result](https://cdn-images-1.medium.com/max/5760/1*G1yI1NwMtEkP21hL-pp0gg.png)*The result*

Let look at the **auto** use to size a track. The auto property gives the column the width of the content. We are having three column of *auto 1fr and 2fr size*.

    .container {
          display: grid;
          grid-gap: 20px;
          border: 5px solid black;
          grid-template-columns: auto 1fr 2fr;
        }

![The result](https://cdn-images-1.medium.com/max/5760/1*LI9Nz-bjJZ8lc4yNd32hqQ.png)*The result*

Let’s add some larger content in item 4. It will adjust the whole column according to it.

    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">Nabendu - FrontEnd Developer</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
        <div class="item">11</div>
        <div class="item">12</div>
        <div class="item">13</div>
        <div class="item">14</div>
        <div class="item">15</div>

    </div>
      <style>
        .container {
          display: grid;
          grid-gap: 20px;
          border: 5px solid black;
          grid-template-columns: auto 1fr 2fr;
        }
      </style>

![The result](https://cdn-images-1.medium.com/max/5760/1*qY9Pj23HnigsFcraFIZVaA.png)*The result*

We will understand one more concept of **repeat** here. The repeat function takes two parameters -One the times something to be repeated and the other the sizing. For example *repeat(2, 1fr) means 1fr 1fr*.

Let have below code which will create 4 column of **auto 1fr 1fr 2fr** using repeat function.

    .container {
          display: grid;
          grid-gap: 20px;
          border: 5px solid black;
          grid-template-columns: auto repeat(2, 1fr) 2fr;
        }

![The result](https://cdn-images-1.medium.com/max/5760/1*lv3g5U_GP0ynsyTy3ixDtw.png)*The result*

The repeat function can be used in another way also. If we give **repeat(2, 1fr 2fr)** it means create 4 columns as **1fr 2fr 1fr 2fr**.

    .container {
          display: grid;
          grid-gap: 20px;
          border: 5px solid black;
          grid-template-columns: auto repeat(2, 1fr 2fr) ;
        }

![The result](https://cdn-images-1.medium.com/max/5760/1*ky66_dwEtjzlK-dShcyaeQ.png)*The result*

This concludes Part-3 of the series.


*[This post is also available on DEV.](https://dev.to/nabendu82/basics-of-css-grid-3-3nhc)*


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
