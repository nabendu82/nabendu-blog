---
title: 'Creating Blog site using Stackbit, GatsbyJS and DEV -1'
date: '2019-11-14T06:24:21.646Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--0TNAUMZs--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--9xZdYA-y--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/06jpncnwyu02rnq5vnbg.jpeg
comments_count: 10
positive_reactions_count: 96
tags: []
canonical_url: >-
  https://nabendu.blog/posts/creating-blog-site-using-slackbit-gatsbyjs-and-dev-1-55f0/
template: post
---
I started my blogging journey 1.5 years back on medium and had written 98 blogs till date. It had soon become an habit to write technical articles.

I had got good traction on medium, but once **dev.to** was launched i started re-publishing my articles there also. I got a lot of followers and views in dev.to.

It is time for me to create my own blog site and was thinking to create the same in GatsbyJS. There are many ways to create blog site with GatsbyJS, but i found an [article](https://dev.to/devteam/you-can-now-generate-self-hostable-static-blogs-right-from-your-dev-content-via-stackbit-7a5) from [Ben Halpern](https://twitter.com/bendhalpern) (Creator of dev.to) about there collaboration with Stackbit.

You need to follow the very simple process in [this](https://dev.to/connecting-with-stackbit) article and your personal blog site will be ready in no time.

You just need to follow 4 steps.

1. Visit the [Stackbit Creation Workflow](https://app.stackbit.com/edit/5dcc19f8ef1bec0017ec0910/theme) and choose a theme. I had chosen **Fjord**.

![Choose theme](https://cdn-images-1.medium.com/max/2880/1*K_z6qMxpzs7-gwD5O3WSmw.png)*Choose theme*

2. Then you need to choose your static site generator. Here i had chosen Gatsby.

![Choose Gatsby](https://cdn-images-1.medium.com/max/2880/1*imdKFdvOk2G0KC_OBtsHSg.png)*Choose Gatsby*

3. Then you need to connect to your **Github** and **DEV** accounts.

![Connect both DEV and Github](https://cdn-images-1.medium.com/max/2000/1*Cf3Fu-wfY-WsYvdmtEj_6Q.jpeg)*Connect both DEV and Github*

4. Next, you need to click on “Create your Project” and stackbit will create a new blog site for you. Then you need to connect to a Netlify account to keep the site live.

![Site is live](https://cdn-images-1.medium.com/max/2880/1*VKBtcVeGI-osgSLgRFm6Gg.png)*Site is live*

And by following these simple steps, my blog site became live at [https://nabendu-blog-d8fee.netlify.com/](https://nabendu-blog-d8fee.netlify.com/)

![Live site](https://cdn-images-1.medium.com/max/2880/1*ZsWP9wg8gjMBm0IG0wzK2w.png)*Live site*

Now, whenever i publish a post in DEV(dev.to), it will be reflected here. This actually makes DEV a headless CMS for my site.

Now, as you can see from above there is some work to be done, like editing the Home page, buying a good domain name and connecting in netlify, adding some plugins from gatsby.

Now, stackbit created an repository in my [github](https://github.com/nabendu82/nabendu-blog). So, i am heading over there and following the instructions.

![Stackbit instructions](https://cdn-images-1.medium.com/max/2880/1*uZupQj5L0T2oFj57XP8HMw.png)*Stackbit instructions*

But first i will git clone my repository in my Desktop

![git clone](https://cdn-images-1.medium.com/max/2000/1*UIKQhjdDdOofHCsVjN_OIQ.png)*git clone*

Next, i will change to the directory an do npm install

![npm install](https://cdn-images-1.medium.com/max/2880/1*v99kCqJRQyjSK8CpOU0q6g.png)*npm install*

Now, we need to go to the [Stackbit dashboard](https://app.stackbit.com/dashboard) to get our API keys.

![API Keys](https://cdn-images-1.medium.com/max/2880/1*EWHdsPAxA0NgzJWottOIPw.png)*API Keys*

Then we need to assign this key to STACKBIT_API_KEY

![](https://cdn-images-1.medium.com/max/2880/1*1n0fazWmunJVmPp-HgpunA.png)

Then as per the github instruction, run the below command. It seems to fetch all posts.

![Fetching all posts](https://cdn-images-1.medium.com/max/2880/1*LACwYUQk1_TeU5dQvlkPSw.png)*Fetching all posts*

Then as per the instructions, running npm run develop

![npm run](https://cdn-images-1.medium.com/max/2870/1*jgD-62oeACtF9fzF3jebTg.png)*npm run*

Once it complied successfully, opening [http://localhost:8000/](http://localhost:8000/) . And we successfully created our local development environment.

![localhost](https://cdn-images-1.medium.com/max/2880/1*_DLxgOInEhbaOu2eQy0bFg.png)*localhost*

Now, let’s open the project in VSCode. The main thing which we need to edit is the Home Page. The content comes from src -> pages -> index.md

![index.md](https://cdn-images-1.medium.com/max/2880/1*JnxXV3sAJy_dOIxQDwW98w.png)*index.md*

We will now update the content in index.md

![Updated index.md](https://cdn-images-1.medium.com/max/2880/1*1uZiIt_wd-pHXMy1gKsGhg.png)*Updated index.md*

Let’s commit the changes and push it to our github.

![Push to github](https://cdn-images-1.medium.com/max/2000/1*Kqbx_N5NiHdznHPX1_XOxw.png)*Push to github*

It will also start updating the site in netlify.

![Site getting updated](https://cdn-images-1.medium.com/max/2880/1*XKYgaYKGXn2w1FgA4IEh2w.png)*Site getting updated*

And after sometime the changes are pushed to production.

![Site updated](https://cdn-images-1.medium.com/max/2880/1*Nf53pv2Usffkj5x2YQdUBg.png)*Site updated*

This completes first part of the post. In the next part(and my 100th blog), i will be buying a good domain name and connecting in netlify, adding some plugins from gatsby like SEO, google analytics.

You can find Part 2 [here](https://nabendu.blog/posts/creating-blog-site-using-stackbit-gatsbyjs-and-dev-2-10cb/)

*[This post is also available on DEV.](https://dev.to/nabendu82/creating-blog-site-using-slackbit-gatsbyjs-and-dev-1-55f0)*


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
