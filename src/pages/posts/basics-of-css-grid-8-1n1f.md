---
title: Basics of CSS Grid -8
date: '2019-09-05T10:16:08.916Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--_fCPhV3Z--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--QXGl2Cfr--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/7gsgvlwmyae9u6es060e.jpeg
comments_count: 0
positive_reactions_count: 2
tags: []
canonical_url: 'https://medium.com/@nabendu82/basics-of-css-grid-8-b2539f93920b'
template: post
---
Welcome to the final part of the series. 

We will use this [codepen](https://codepen.io/nabendu82/full/qMKBOw/) for the album layout page. The basic code without any style(except the general style) is here.

    <body>

    <div class="albums">
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=1](https://source.unsplash.com/random/300x300?v=1)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=2](https://source.unsplash.com/random/300x300?v=2)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">short.</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=3](https://source.unsplash.com/random/300x300?v=3)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=4](https://source.unsplash.com/random/300x300?v=4)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=5](https://source.unsplash.com/random/300x300?v=5)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=6](https://source.unsplash.com/random/300x300?v=6)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=7](https://source.unsplash.com/random/300x300?v=7)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=8](https://source.unsplash.com/random/300x300?v=8)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=9](https://source.unsplash.com/random/300x300?v=9)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
          </div>
        </div>
        <div class="album">
          <img class="album__artwork" src="[https://source.unsplash.com/random/300x300?v=10](https://source.unsplash.com/random/300x300?v=10)">
          <div class="album__details">
            <h2>Album Title</h2>
            <p class="album__artist">Artist Name</p>
            <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
          </div>
        </div>

    </div>

    <style>

    </style>
    </body>

We have an **albums** class, which contains all the **album**. Each **album** then have a random image of size 300x300 from unsplash. Then there is an **album__details** class, which contains a heading(**h2**), the paragraph with **album__artist** class and also one or two paragraph with **album__desc** class.

![Without any style](https://cdn-images-1.medium.com/max/5760/1*nazw1s0C8qGiUUHajc3ckg.png)*Without any style*

We want to make our album completely responsive, so we will use the code below for **albums** class.

    .albums {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 5px;
        }

Our columns are using minmax and are either 300px wide or 1fr. This will result in most of our fully responsive layout been done.

![Nice one](https://cdn-images-1.medium.com/max/5760/1*TeX6RnLf073oJ0wv8Z0eMw.png)*Nice one*

Let give each individual album, a background, box-shadow and padding.

    .albums {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 5px;
        }
        
       .album {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }

This will result in below.

![The result](https://cdn-images-1.medium.com/max/5760/1*WQtHeZ4gIrUH9hcWxCdyyg.png)*The result*

Now, we want the album details to be shown on the right side of the image. So, we will make each individual album also a grid. It will have two columns- 150px and 1fr wide.

    .album {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: grid;
          grid-template-columns: 150px 1fr;
          grid-gap: 10px;
        }

We are running into an issue here. Our image is not taking the desired 150px column, but it is taking it’s original size of 300px.

![A bug](https://cdn-images-1.medium.com/max/5760/1*Jv5d9_bG72rmgqfk4sSeFA.png)*A bug*

We can fix it by selecting the image class **album__artwork** and making the width 100%.

    .album__artwork {
          width: 100%;
        }

![Problem solved](https://cdn-images-1.medium.com/max/5760/1*HdeGb8Ba2eYWSifliRhafA.png)*Problem solved*

Let do one last thing of vertically aligning our columns of album class.

    .albums {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 5px;
        }
        
       .album {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: grid;
          grid-template-columns: 150px 1fr;
          grid-gap: 10px;
          align-items: center;
        }   
        
        .album__artwork {
          width: 100%;
        }

Which will result in our final product.

![Desktop view](https://cdn-images-1.medium.com/max/5760/1*JzKLQoXa6BJPXLgBVq7boQ.png)*Desktop view*

![Tablet view](https://cdn-images-1.medium.com/max/4384/1*uCjO7Kl5qU2W_N0fr0V72g.png)*Tablet view*

![Mobile view](https://cdn-images-1.medium.com/max/2144/1*sT1RGWguUcZMdfGujmrcrA.png)*Mobile view*
> So, you can see we had made a completely responsive album layout, *without using any media queries*.

This concludes the CSS Grid series. Hoping you learned something useful from it.


*[This post is also available on DEV.](https://dev.to/nabendu82/basics-of-css-grid-8-1n1f)*


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
