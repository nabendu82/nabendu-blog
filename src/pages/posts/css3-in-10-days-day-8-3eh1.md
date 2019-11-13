---
title: CSS3 in 10 days — Day 8
date: '2019-10-26T06:10:37.669Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--NUuX4x9H--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s---_drEp6Z--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/sx5q5li6wuuquu6cjzr2.jpeg
comments_count: 1
positive_reactions_count: 39
tags: []
canonical_url: 'https://medium.com/@nabendu82/css3-in-10-days-day-8-f2709d90e0eb'
template: post
---
Welcome to Day 8 of learning CSS. 

As i have told earlier, this series is inspired by [this](https://www.youtube.com/watch?v=pmKyG3NBY_k&list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU) awesome youtube series in freecodecamp channel.

We will start with Accordionon day-8. Open your code editor and create a new 8.1-Accordion folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basics](https://cdn-images-1.medium.com/max/2880/1*OYM2GVmhFsieDva4FMc2aA.png)*Basics*

Let first put some basic css in sandbox.css to show the layout.

![Basic style](https://cdn-images-1.medium.com/max/2880/1*1ljlfkLy5Hra5QPeon2vug.png)*Basic style*

It will show the below.

![Basic layout](https://cdn-images-1.medium.com/max/2880/1*Sz6OFVJE3KrGne_dHbNtTA.png)*Basic layout*

We will now complete the Accordion functionality, but putting the below styles.

![More Styles](https://cdn-images-1.medium.com/max/2880/1*HobIBfqFdUXkpj-lFGs1Lg.png)*More Styles*

It will complete the accordion functionality.

![](https://cdn-images-1.medium.com/max/2000/1*finM1ymcTThXpduzio6CUA.gif)

We will now style the accordion. Put the below in sandbox.css

![sandbox](https://cdn-images-1.medium.com/max/2880/1*JwC8fe_ok1IGb8JBaNNdog.png)*sandbox*

It will style the Accordion nicely.

![Accordion Styled](https://cdn-images-1.medium.com/max/2880/1*l6jjoTpEy_VRYtk57pyrUg.png)*Accordion Styled*

Let’s add a hover style and a small down arrow in the Accordion.

![hover and arrow](https://cdn-images-1.medium.com/max/2880/1*JZVFj7nPQa3nYysX_cCA1Q.png)*hover and arrow*

And that’s complete our Accordion.

![Accordion](https://cdn-images-1.medium.com/max/2880/1*FRqPhfYeMgssTQGWHLk4SA.png)*Accordion*

Next, we will start with Sliding Panels on Images on day-8. Open your code editor and create a new 8.2-SlidingPanels folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Sliding Panels | Code 10 Things in 10 Days with CSS3</title>
        <link rel="stylesheet" href="sandbox.css">
      </head>
      <body>
        <div class="sandbox">
          <div class="content">
            <section>
              <h4>Slide from Top</h4>
              <div class="slide slide-top">
                <div class="slide-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <img src="[https://placeimg.com/300/200/animals](https://placeimg.com/300/200/animals)">
              </div>
            </section>
            <section>
              <h4>Slide from Right</h4>
              <div class="slide slide-right">
                <div class="slide-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <img src="[https://placeimg.com/300/200/tech](https://placeimg.com/300/200/tech)">
              </div>
            </section>
            <section>
              <h4>Slide from Bottom</h4>
              <div class="slide slide-bottom">
                <div class="slide-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <img src="[https://placeimg.com/300/200/architecture](https://placeimg.com/300/200/architecture)">
              </div>
            </section>
            <section>
              <h4>Slide from Left</h4>
              <div class="slide slide-left">
                <div class="slide-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <img src="[https://placeimg.com/300/200/people](https://placeimg.com/300/200/people)">
              </div>
            </section>
          </div>
        </div>
      </body>
    </html>

It will show this basic page with images

![Only images](https://cdn-images-1.medium.com/max/2880/1*RrOkCsw5oymWNL2whfJk8Q.png)*Only images*

Next, we will put some styles in sandbox.css

![Some styles](https://cdn-images-1.medium.com/max/2880/1*VRYk6Ep4XarpChS3HUD84g.png)*Some styles*

It will cover all of the images.

![All images covered](https://cdn-images-1.medium.com/max/2880/1*W8zjtFsH1krCTtTxWYQmuA.png)*All images covered*

Now, let’s hide it and show only when the user hovers over the images.

![hovering](https://cdn-images-1.medium.com/max/2880/1*tcn_pThH33fyv85swcpWAg.png)*hovering*

The first two will slide as below.

![First two](https://cdn-images-1.medium.com/max/2000/1*3GCwvVvV8LxSlETtUPVUZA.gif)*First two*

The next two will slide as below.

![Last two](https://cdn-images-1.medium.com/max/2000/1*cqQMAuZdHqMWKB52criGHA.gif)*Last two*

This completes day 8 of the course. You can find the code for the same [here](https://github.com/nabendu82/CSS10days).

*[This post is also available on DEV.](https://dev.to/nabendu82/css3-in-10-days-day-8-3eh1)*


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
