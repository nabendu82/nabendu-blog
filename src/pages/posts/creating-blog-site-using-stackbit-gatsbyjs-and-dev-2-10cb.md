---
title: 'Creating Blog site using Stackbit, GatsbyJS and DEV -2'
date: '2019-11-15T15:47:32.569Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--rmd01RTm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--UXOStqVX--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/97d64fo0xofpttd4e9af.jpeg
comments_count: 0
positive_reactions_count: 33
tags: []
canonical_url: >-
  https://nabendu.blog/posts/creating-blog-site-using-stackbit-gatsbyjs-and-dev-2-10cb/
template: post
---
Welcome to part 2 of the series and my **100th blog** :)

After completing my blogging site in [part-1](https://nabendu.blog/posts/creating-blog-site-using-slackbit-gatsbyjs-and-dev-1-55f0/), it’s time to buy and domain name and add the details in netlify.

For adding a custom domain, i generally follow steps from this awesome [Brad Traversy](https://twitter.com/traversymedia) [video](https://www.youtube.com/watch?v=bjVUqvcCnxM&list=PLuOLMA-n-nN9TOxtU11gNLaMZBXxCtvWD&index=19&t=1000s).

The first thing to do is to buy a domain name and we will use the most popular service —[ namecheap](http://www.namecheap.com)

Once you login to your account, you will see this below screen.

![namecheap](https://cdn-images-1.medium.com/max/2880/1*1uC3V1GDCKNfAelagerygg.png)*namecheap*

I had searched for my name and added two domains to my cart.

![Buying domains](https://cdn-images-1.medium.com/max/2880/1*Mb2hx18LEgEw2Zie-B38cQ.png)*Buying domains*

Then we click on **View Cart**, which will show the next screen.

![Finally buying](https://cdn-images-1.medium.com/max/2880/1*bINmUo5-QInTPTglZAnuTw.png)*Finally buying*

Once you click on **Confirm Order**, you will be taken to the next screen where you confirm your Payment options.

![Card options](https://cdn-images-1.medium.com/max/2880/1*s2cCoS5BrXh441Jhjr9r8w.png)*Card options*

Once you click on **Continue**, you will be taken to below screen where you have to pay.

![Pay it](https://cdn-images-1.medium.com/max/2880/1*3TybdEURO_Q1fdea7iQwKw.png)*Pay it*

Once you clicked on **Pay Now** in above screen, the purchase will be completed.

![Finally done](https://cdn-images-1.medium.com/max/2880/1*6xhaY8Q8qZUZGWy-ceedDg.png)*Finally done*

After this we click on the **Manage** button and it will take us to our dashboard. But strangely enough it asking me to Verify Contacts. For this i clicked a link in the mail which they sent me. Hopefully it will be solved by tomorrow.

![The error](https://cdn-images-1.medium.com/max/2880/1*yEpKB2EbGyybE57vEJbSHg.png)*The error*

The error was resolved in a hour and i got the **Manage** button.

![Manage button](https://cdn-images-1.medium.com/max/2880/1*TW61DN_-nSeao-GtjNHGRg.png)*Manage button*

Next, open [netlify](https://app.netlify.com/) and login to your account. You will be having the blog site we created in part-1 there.

![My blog](https://cdn-images-1.medium.com/max/2880/1*yPzqaCqteKlXmO6biCGa9A.png)*My blog*

In the next screen on **Setup a custom domain**.

![Custom domain](https://cdn-images-1.medium.com/max/2880/1*KsZOSMrGIBDY5Z0m5y_IoQ.png)*Custom domain*

In the next screen i will give the domain name(**nabendu.blog**), which i purchased from namecheap. And then click on **Verify** button.

![nabendu.blog](https://cdn-images-1.medium.com/max/2880/1*FXZ3apHrsV6xGyowV_87Bg.png)*nabendu.blog*

Next, it will ask whether i am the owner and we can click on **Yes, add domain** button.

![Yes](https://cdn-images-1.medium.com/max/2880/1*BxlZZ3kL8nhiP_a73ifTwg.png)*Yes*

Now, it’s time to go back to namecheap.com and click on **Manage** button in nabendu.blog in the dashboard.

![Manage button](https://cdn-images-1.medium.com/max/2880/1*XapyLtiluXKHRJPvW362qQ.png)*Manage button*

It will open the below screen. Here click on **Advanced DNS** tab.

![The Advanced DNS](https://cdn-images-1.medium.com/max/2880/1*Qz9y8h65LdeAh5yOW_FsVA.png)*The Advanced DNS*

We can use Netlify DNS to configure the DNS, but we will be using our service provider(namecheap) to do so. You can go through [this](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/# configure-a-subdomain) article for more details.

So, click on **ADD NEW RECORD** button.

![Add new](https://cdn-images-1.medium.com/max/2880/1*bVPNWhB_03H08I3sKOcPzw.png)*Add new*

According to Netlify docs, we need to add an **A record** and add their load balancer IP address **104.198.14.52**

Add the record and then click on the small green tick mark.

![A Record](https://cdn-images-1.medium.com/max/2880/1*bh0zByp6c_ZKGi8suhDFLg.png)*A Record*

Next, we will add a **CNAME record**. Since, i already had one i edited it. The Value should be equal to the random domain name, which netlify had given us.

![CNAME](https://cdn-images-1.medium.com/max/2880/1*ufOsprudbrBcbq4oytxBMw.png)*CNAME*

Also, let’s get rid of the **URL Redirect Record** by clicking on the delete button in it’s row. So, now our Advanced DNS page looks like below.

![Final Advanced DNS](https://cdn-images-1.medium.com/max/2880/1*wBe_JJyF-dN6stk_wRe05A.png)*Final Advanced DNS*

Now, go to your netlify account and refresh the webpage. You will see like below if everything is ok.

![Everything ok](https://cdn-images-1.medium.com/max/2880/1*BNXxvx92BBsapUHRbtT00g.png)*Everything ok*

Now, one of a very good feature of Netlify is to provide free secure htttps site. But it generally takes time. If you scroll down on the same page, it will show that it is **Waiting for DNS propagation**.

![Waiting](https://cdn-images-1.medium.com/max/2880/1*9EZr2xw83GpB07xCmVns5g.png)*Waiting*

It can take up-to a day for DNS propagation. But we can view the http version of our site, with the **Not Secure** warning by the browser.

![Not Secure site](https://cdn-images-1.medium.com/max/2880/1*PzF1j-DXpA9_5RoA13uAGQ.png)*Not Secure site*

Netlify also provide great **Contact form**, which was given to us by Stackbit. We can check whether it is working by heading to it.

![Submitting a form](https://cdn-images-1.medium.com/max/2876/1*_VDVWMmFM7kXVZkxA5id3Q.png)*Submitting a form*

If it is successful, we will get the below screen.

![Success](https://cdn-images-1.medium.com/max/2880/1*sDdDxSiK4JrQrjNz8jaX2A.png)*Success*

Now, head over to Overview in netlify and scroll down. You can see the newly sent message.

![Contact form message](https://cdn-images-1.medium.com/max/2880/1*vGrCsFSV8K4nQORamgBFLw.png)*Contact form message*

I checked my https and it’s got activated in less then 30 mins.

![https site](https://cdn-images-1.medium.com/max/2880/1*LAwFyRCgHgT6wIv5TbxTiA.png)*https site*

Now, if we head over to [https://nabendu.blog/](https://nabendu.blog/) we won’t get any error.

![Finally https](https://cdn-images-1.medium.com/max/2880/1*GT_7yE4C_C_yS3dSDZQPMg.png)*Finally https*

Finally by blog site is live.

Now, this blog i getting long so ending it here. Still some work is remaining but all of it is backend work, which will help me with SEO, analytics, canonical links.

You can find final part [here](https://nabendu.blog/posts/creating-blog-site-using-stackbit-gatsbyjs-and-dev-3-4n31/)


*[This post is also available on DEV.](https://dev.to/nabendu82/creating-blog-site-using-stackbit-gatsbyjs-and-dev-2-10cb)*


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
