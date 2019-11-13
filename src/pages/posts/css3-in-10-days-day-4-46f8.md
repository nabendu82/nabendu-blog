---
title: CSS3 in 10 days — Day 4
date: '2019-10-19T04:55:10.758Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--bg6WUW6o--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--AvR7NwXg--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/dgwwqvhz5kxm2s0x2idy.jpeg
comments_count: 0
positive_reactions_count: 45
tags: []
canonical_url: 'https://medium.com/@nabendu82/css3-in-10-days-day-4-f2b4727116a6'
template: post
---
Welcome to Day 4 of learning CSS. 

As i have told earlier, this series is inspired by [this](https://www.youtube.com/watch?v=pmKyG3NBY_k&list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU) awesome youtube series in freecodecamp channel.

We will start with 8-Bit Mario on day-4. Open your code editor and create a new 4.1-8BitMario folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![index.html](https://cdn-images-1.medium.com/max/2880/1*1k7DIKfdojhRV2IVax0U1A.png)*index.html*

Let’s create mario now. Head over to sandbox.css and copy the below code. We are giving background-color: # e7eef1 and some box-shadow also as # e7eef1. Then we are painting the color over it.

    .mario-block {
     display: inline-block;
     position: relative;
     margin: 80px auto;
     width: 16em;
     height: 16em;
    }

    .mario {
     display: block;
     width: 1em;
     height: 1em;
     background-color: # e7eef1;
     box-shadow: 0em 0em # e7eef1,
                1em 0em # e7eef1,
                2em 0em # e7eef1,
                3em 0em # e7eef1,
                4em 0em # e7eef1,
                5em 0em # e7eef1,
                6em 0em # e7eef1,
                7em 0em # e7eef1,
                8em 0em # e7eef1,
                9em 0em # e7eef1,
                10em 0em # e7eef1,
                11em 0em # e7eef1,
                12em 0em # e7eef1,
                13em 0em # e7eef1,
                14em 0em # e7eef1,
                15em 0em # e7eef1,
                0em 1em # e7eef1,
                1em 1em # e7eef1,
                2em 1em # e7eef1,
                3em 1em # e7eef1,
                4em 1em # e7eef1,
                5em 1em red,
                6em 1em red,
                7em 1em red,
                8em 1em red,
                9em 1em red;
    }

The above will result in showing a little part of Mario’s hat.

![Hat](https://cdn-images-1.medium.com/max/2880/1*smONxRDLbBgSyL2hTtOMbw.png)*Hat*

Let’s complete the Mario by putting all the code.

    .mario {
        display: block;
        width: 1em;
        height: 1em;
        background-color: # e7eef1;
        box-shadow: 0em 0em # e7eef1,
                1em 0em # e7eef1,
                2em 0em # e7eef1,
                3em 0em # e7eef1,
                4em 0em # e7eef1,
                5em 0em # e7eef1,
                6em 0em # e7eef1,
                7em 0em # e7eef1,
                8em 0em # e7eef1,
                9em 0em # e7eef1,
                10em 0em # e7eef1,
                11em 0em # e7eef1,
                12em 0em # e7eef1,
                13em 0em # e7eef1,
                14em 0em # e7eef1,
                15em 0em # e7eef1,
                0em 1em # e7eef1,
                1em 1em # e7eef1,
                2em 1em # e7eef1,
                3em 1em # e7eef1,
                4em 1em # e7eef1,
                5em 1em red,
                6em 1em red,
                7em 1em red,
                8em 1em red,
                9em 1em red,
                10em 1em # e7eef1,
                11em 1em # e7eef1,
                12em 1em # ffc966,
                13em 1em # ffc966,
                14em 1em # ffc966,
                15em 1em # e7eef1,
                0em 2em # e7eef1,
                1em 2em # e7eef1,
                2em 2em # e7eef1,
                3em 2em # e7eef1,
                4em 2em red,
                5em 2em red,
                6em 2em red,
                7em 2em red,
                8em 2em red,
                9em 2em red,
                10em 2em red,
                11em 2em red,
                12em 2em red,
                13em 2em # ffc966,
                14em 2em # ffc966,
                15em 2em # e7eef1,
                0em 3em # e7eef1,
                1em 3em # e7eef1,
                2em 3em # e7eef1,
                3em 3em # e7eef1,
                4em 3em brown,
                5em 3em brown,
                6em 3em brown,
                7em 3em # ffc966,
                8em 3em # ffc966,
                9em 3em black,
                10em 3em # ffc966,
                11em 3em # e7eef1,
                12em 3em red,
                13em 3em red,
                14em 3em red,
                15em 3em # e7eef1,
                0em 4em # e7eef1,
                1em 4em # e7eef1,
                2em 4em # e7eef1,
                3em 4em brown,
                4em 4em # ffc966,
                5em 4em brown,
                6em 4em # ffc966,
                7em 4em # ffc966,
                8em 4em # ffc966,
                9em 4em black,
                10em 4em # ffc966,
                11em 4em # ffc966,
                12em 4em # ffc966,
                13em 4em red,
                14em 4em red,
                15em 4em # e7eef1,
                0em 5em # e7eef1,
                1em 5em # e7eef1,
                2em 5em # e7eef1,
                3em 5em brown,
                4em 5em # ffc966,
                5em 5em brown,
                6em 5em brown,
                7em 5em # ffc966,
                8em 5em # ffc966,
                9em 5em # ffc966,
                10em 5em black,
                11em 5em # ffc966,
                12em 5em # ffc966,
                13em 5em # ffc966,
                14em 5em red,
                15em 5em # e7eef1,
                0em 6em # e7eef1,
                1em 6em # e7eef1,
                2em 6em # e7eef1,
                3em 6em brown,
                4em 6em brown,
                5em 6em # ffc966,
                6em 6em # ffc966,
                7em 6em # ffc966,
                8em 6em # ffc966,
                9em 6em black,
                10em 6em black,
                11em 6em black,
                12em 6em black,
                13em 6em red,
                14em 6em red,
                15em 6em # e7eef1,
                0em 7em # e7eef1,
                1em 7em # e7eef1,
                2em 7em # e7eef1,
                3em 7em # e7eef1,
                4em 7em # e7eef1,
                5em 7em # ffc966,
                6em 7em # ffc966,
                7em 7em # ffc966,
                8em 7em # ffc966,
                9em 7em # ffc966,
                10em 7em # ffc966,
                11em 7em # ffc966,
                12em 7em red,
                13em 7em red,
                14em 7em # e7eef1,
                15em 7em # e7eef1,
                0em 8em # e7eef1,
                1em 8em # e7eef1,
                2em 8em red,
                3em 8em red,
                4em 8em red,
                5em 8em red,
                6em 8em blue,
                7em 8em red,
                8em 8em red,
                9em 8em red,
                10em 8em blue,
                11em 8em red,
                12em 8em red,
                13em 8em # e7eef1,
                14em 8em # e7eef1,
                15em 8em brown,
                0em 9em # ffc966,
                1em 9em # ffc966,
                2em 9em red,
                3em 9em red,
                4em 9em red,
                5em 9em red,
                6em 9em red,
                7em 9em blue,
                8em 9em red,
                9em 9em red,
                10em 9em red,
                11em 9em blue,
                12em 9em # e7eef1,
                13em 9em # e7eef1,
                14em 9em brown,
                15em 9em brown,
                0em 10em # ffc966,
                1em 10em # ffc966,
                2em 10em # ffc966,
                3em 10em red,
                4em 10em red,
                5em 10em red,
                6em 10em red,
                7em 10em blue,
                8em 10em blue,
                9em 10em blue,
                10em 10em blue,
                11em 10em yellow,
                12em 10em blue,
                13em 10em blue,
                14em 10em brown,
                15em 10em brown,
                0em 11em # e7eef1,
                1em 11em # ffc966,
                2em 11em # e7eef1,
                3em 11em # e7eef1,
                4em 11em blue,
                5em 11em red,
                6em 11em blue,
                7em 11em blue,
                8em 11em yellow,
                9em 11em blue,
                10em 11em blue,
                11em 11em blue,
                12em 11em blue,
                13em 11em blue,
                14em 11em brown,
                15em 11em brown,
                0em 12em # e7eef1,
                1em 12em # e7eef1,
                2em 12em brown,
                3em 12em brown,
                4em 12em brown,
                5em 12em blue,
                6em 12em blue,
                7em 12em blue,
                8em 12em blue,
                9em 12em blue,
                10em 12em blue,
                11em 12em blue,
                12em 12em blue,
                13em 12em blue,
                14em 12em brown,
                15em 12em brown,
                0em 13em # e7eef1,
                1em 13em brown,
                2em 13em brown,
                3em 13em brown,
                4em 13em blue,
                5em 13em blue,
                6em 13em blue,
                7em 13em blue,
                8em 13em blue,
                9em 13em blue,
                10em 13em # e7eef1,
                11em 13em # e7eef1,
                12em 13em # e7eef1,
                13em 13em # e7eef1,
                14em 13em # e7eef1,
                15em 13em # e7eef1,
                0em 14em # e7eef1,
                1em 14em brown,
                2em 14em brown,
                3em 14em # e7eef1,
                4em 14em # e7eef1,
                5em 14em # e7eef1,
                6em 14em # e7eef1,
                7em 14em # e7eef1,
                8em 14em # e7eef1,
                9em 14em # e7eef1,
                10em 14em # e7eef1,
                11em 14em # e7eef1,
                12em 14em # e7eef1,
                13em 14em # e7eef1,
                14em 14em # e7eef1,
                15em 14em # e7eef1,
                0em 15em # e7eef1,
                1em 15em # e7eef1,
                2em 15em # e7eef1,
                3em 15em # e7eef1,
                4em 15em # e7eef1,
                5em 15em # e7eef1,
                6em 15em # e7eef1,
                7em 15em # e7eef1,
                8em 15em # e7eef1,
                9em 15em # e7eef1,
                10em 15em # e7eef1,
                11em 15em # e7eef1,
                12em 15em # e7eef1,
                13em 15em # e7eef1,
                14em 15em # e7eef1,
                15em 15em # e7eef1;
      }

It will show our cute 8-bit Mario.

![Mario](https://cdn-images-1.medium.com/max/2880/1*fJY82KVlINzTjLmyyEt-Hg.png)*Mario*

Next, let’s give some jumping animation to Mario. Add the below code in sandbox.css and then click and hold the Wahoo! button for a jumping Mario.

![Jumping Mario](https://cdn-images-1.medium.com/max/2790/1*3OaXrsFIfGth9gZkvTufaA.png)*Jumping Mario*

Next we will create Pricing Table. Open your code editor and create a new 4.2-PricingTable folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Pricing Table | Code 10 Things in 10 Days with CSS3</title>
        <link rel="stylesheet" href="sandbox.css">
        <link href="[https://fonts.googleapis.com/css?family=Bubblegum+Sans|Nova+Mono|Roboto+Condensed](https://fonts.googleapis.com/css?family=Bubblegum+Sans|Nova+Mono|Roboto+Condensed)" rel="stylesheet">
    </head>
    <body>
        <div class="sandbox">
            <div class="content">
                <section>
                     <div class="pricing-table">
                        <div class="pricing-block">
                            <div class="pricing-header">
                                <div class="pricing-heading">Basic</div>
                                <div class="pricing-price">
                                    <span class="pricing-     price__currency">$</span>
                                    <span class="pricing-price__value">60</span>
                                    <span class="pricing-price__duration">/mo</span>
                                </div>
                            </div>
                            <div class="pricing-body">
                                <ul class="pricing-features">
                                    <li><strong>Primary</strong> Feature</li>
                                    <li><strong>Additional</strong> Benefit</li>
                                    <li><strong>1</strong> Bonus</li>
                                </ul>
                            </div>
                            <div class="pricing-footer">
                                <a href="# " class="pricing-button">Select</a>
                            </div>
                        </div>
                        <div class="pricing-block pricing-popular">
                            <div class="pricing-header">
                                <div class="pricing-heading">Awesome</div>
                                <div class="pricing-price">
                                    <span class="pricing-price__currency">$</span>
                                    <span class="pricing-price__value">90</span>
                                    <span class="pricing-price__duration">/mo</span>
                                </div>
                            </div>
                            <div class="pricing-body">
                                <ul class="pricing-features">
                                    <li><strong>Primary</strong> Feature</li>
                                    <li><strong>Additional</strong> Benefit</li>
                                    <li><strong>2</strong> Bonuses</li>
                                    <li><strong>4</strong> Perks</li>
                                    <li><strong>24/7</strong> Support</li>
                                </ul>
                            </div>
                            <div class="pricing-footer">
                                <a href="# " class="pricing-button">Select</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </body>
    </html>

It will show the basic html.

![Basic](https://cdn-images-1.medium.com/max/2880/1*fCrE5wmq6iFVMdqdEbk46w.png)*Basic*

Next, we will add some basic styles in sandbox.css

![sandbox](https://cdn-images-1.medium.com/max/2880/1*Ixo-n7pcPXbS-BncCUen_w.png)*sandbox*

It will show our web-page as below now.

![Basics](https://cdn-images-1.medium.com/max/2880/1*aFXE9iGB8wqLQWVO6WaSjg.png)*Basics*

Next, we will add more styles for pricing-table

![More](https://cdn-images-1.medium.com/max/2784/1*xMY2nCybE-_ol2uGzoBt6g.png)*More*

And it will change the web-page as below

![New page](https://cdn-images-1.medium.com/max/2880/1*ehFYCYecH_HnsgAaXloY0A.png)*New page*

Let’s complete our pricing-price now.

![Pricing-price](https://cdn-images-1.medium.com/max/2880/1*Qln50_n2BOBhW6bYS0tGkw.png)*Pricing-price*

It will result in below.

![The result](https://cdn-images-1.medium.com/max/2880/1*PYq1xAaZc5M3RvCr4AYK8A.png)*The result*

Now, lets style the li and ul.

![li and ul](https://cdn-images-1.medium.com/max/2880/1*bgfbtjbn2mFtfWZlEgAa1w.png)*li and ul*

It will result in below.

![ul and li style](https://cdn-images-1.medium.com/max/2880/1*KwEjwV73pJzw_AoDPNnN9Q.png)*ul and li style*

Next, we will style the footer.

![Footer](https://cdn-images-1.medium.com/max/2880/1*mo7lwrhucUj1CfooaViJqw.png)*Footer*

It almost completes our pricing table.

![Pricing Table](https://cdn-images-1.medium.com/max/2880/1*GOmytMAtBB_sXCtpJAg2yw.png)*Pricing Table*

Now, it’s time to style the popular table differently.

![popular](https://cdn-images-1.medium.com/max/2880/1*IcB55RZ5qck_gprQG1fibA.png)*popular*

It completes our Pricing table

![Completed](https://cdn-images-1.medium.com/max/2880/1*VSBc7zw-ZEU0L9OUgTOE7g.png)*Completed*

Next, we will look into CSS Variables. We can use them to assign values to a variable and use it later in other parts of the program.

Open your code editor and create a new 4.3-CSSVariables folder and two files index.html and sandbox.css inside it.

Next, in index.html put the basic html.

![Basic Html](https://cdn-images-1.medium.com/max/2880/1*LvDhGsIeHk3wlHVI7sAnzA.png)*Basic Html*

Now, put the variable declaration in sandbox.css . Notice it will cause nothing as we are not using it.

![sandbox](https://cdn-images-1.medium.com/max/2880/1*cPqzD9-FhnXa2-efak115w.png)*sandbox*

Nothing is done in browser.

![Nothing](https://cdn-images-1.medium.com/max/2880/1*Lb421yUdyG9BL8KGjQHvJg.png)*Nothing*

Now, we will use these variables. You can also do math on the numeric units.

![Using variables](https://cdn-images-1.medium.com/max/2880/1*q0iUea1x-c_Vibp74HIFwg.png)*Using variables*

It will show the boxes in browser.

![Boxes in browser](https://cdn-images-1.medium.com/max/2880/1*g-TqnXwiUL9SwJIvPEr8Pw.png)*Boxes in browser*

This completes day 4 of the course. 

You can find the code for the same [here](https://github.com/nabendu82/CSS10days).


*[This post is also available on DEV.](https://dev.to/nabendu82/css3-in-10-days-day-4-46f8)*


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
