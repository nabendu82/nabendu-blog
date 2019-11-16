---
title: 'Creating Blog site using Stackbit, GatsbyJS and DEV -3'
date: '2019-11-16T14:21:49.926Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--MThpC8yK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--O5vYzLMw--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/jbw5de7wcxxsc03eg1r6.jpeg
comments_count: 0
positive_reactions_count: 2
tags: []
canonical_url: >-
  https://nabendu.blog/posts/creating-blog-site-using-stackbit-gatsbyjs-and-dev-3-4n31/
template: post
---
Welcome to part-3 of the series. You can find part-2 [here](https://nabendu.blog/posts/creating-blog-site-using-stackbit-gatsbyjs-and-dev-2-10cb/).

We will start by adding some Gatsby plugins to my newly created [blog site](https://nabendu.blog/). I have found a great article [Emeruche Cole](https://dev.to/cole_ruche/my-top-plugins-for-a-gatsbyjs-powered-blog-1oo1) on the same.

So, let’s head over to the terminal and run the command to get the latest data from Stackbit on our local machine. This command i had got from my [github repo](https://github.com/nabendu82/nabendu-blog) for my blog site, which was initially created by stackbit.

![Stackbit](https://cdn-images-1.medium.com/max/2880/1*IdvMaOzrmZ_9JonK7b-WMw.png)*Stackbit*

I will be adding two SEO plugins first.

## gatsby-plugin-robots-txt

So, let’s head over to the [plugin page](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/?=gatsby-plugin-robots-txt). As the name suggest it creates a **robots.txt** file for our gatsby site. It’s good for SEO as it tells google bots on how to crawl your site.

We will follow the instruction and do an npm install in our directory.

![npm install](https://cdn-images-1.medium.com/max/2870/1*FSa6hcMzyeKeN2oaSfSs4A.png)*npm install*

In the **gatsby-config.js** , we need to add the marked code in our plugin array.

![robot](https://cdn-images-1.medium.com/max/2880/1*URp7bCW8IoxbVE3hpLCh3w.png)*robot*

## gatsby-plugin-sitemap

This plugin generates sitemap for your site, which is very important for SEO. As per the instruction on [plugin page](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/?=) , let’s do npm install.

![npm install](https://cdn-images-1.medium.com/max/2870/1*EX5uju0_VUtrrRbzL4Te9A.png)*npm install*

Now, this plugin is easy to use. We need to add the plugin name in our **gatsby-config.js** inside the plugins array.

![sitemap](https://cdn-images-1.medium.com/max/2880/1*ilH7bUTGJ9yNjQZcxcAH4w.png)*sitemap*

We also need to have a **siteUrl** in our **siteMetaData**. But Stackbit create a json for us. So, we need to add there. We will also add some other useful keywords for SEO in the **site-metadata.json** file.

I found a helpful list in **Emeruche Cole** github [link](https://github.com/kingingcole/myblog/blob/master/gatsby-config.js)

![siteMetaData](https://cdn-images-1.medium.com/max/2880/1*-sMTiwj5MK-LZ0j5VDoN-g.png)*siteMetaData*

Next, let’s start our server to see if there are any error.

![npm run develop](https://cdn-images-1.medium.com/max/2880/1*0CTzZg5B6dVSPFFfJCANIQ.png)*npm run develop*

I have also checked in [http://localhost:8000/](http://localhost:8000/) and there were no errors. Next, let’s add these changes to our production. With Netlify, it’s just pushing the changes to GitHub.

So, i had just committed my changes and pushed to GitHub.

![Pushed to github](https://cdn-images-1.medium.com/max/2000/1*UxirZZoh7iVkdpYgb3nimQ.png)*Pushed to github*

Once i head over to my netlify dashboard for this site, it will show building.

![Building](https://cdn-images-1.medium.com/max/2880/1*Sh5siENGal3LpCXfwvQ0SQ.png)*Building*

It got published in less then 5 minutes. Now, when i head over to my site my change of title is there. Everything else is behind the scenes.

![nabendu’s blog](https://cdn-images-1.medium.com/max/2880/1*WoS5wsHJX9N8Ccu_fzRuEQ.png)*nabendu’s blog*

Next, we will add one of the most important plugin and i.e. for analytics.

## gatsby-plugin-google-analytics

This plugin will be used to add google analytics to our website. As per the [gatsby docs](https://www.gatsbyjs.org/docs/adding-analytics/) on setting up google analytics we have first setup a google analytics account and then get the tracking id.

Let’s open [google analytics](https://analytics.google.com/analytics/web/provision/# /provision). If you are not logged in, please login to your google account.

![Welcome page](https://cdn-images-1.medium.com/max/2880/1*68IAZKkcNkS-VFVeMAk-DA.png)*Welcome page*

Once i click on **Start Measuring** button, it will take you to the below page. Here you will be asked to give your account name. Then click on **Next** button.

![Account name](https://cdn-images-1.medium.com/max/2880/1*x-wEff1jF4dk2oE9Gf_Obg.png)*Account name*

In the screen below select **Web** and click **Next**.

![Web](https://cdn-images-1.medium.com/max/2880/1*INWa7XaS2k2NeP3NwrGY7A.png)*Web*

In this screen, we give some basic site information including the site url.

![Basic site information](https://cdn-images-1.medium.com/max/2880/1*nZpDq9NIMWODwhpcSIkqqw.png)*Basic site information*

Once you clicked on Create button in the above screen, a pop-up will be opened.

![The popup](https://cdn-images-1.medium.com/max/2880/1*FiNiyGWu7SgXzoCqgCaGnQ.png)*The popup*

Here, you have to accept two Terms and conditions. Then click on **Accept** button.

![I Accept](https://cdn-images-1.medium.com/max/2880/1*ZANb6A3m_S_mnNp-P8J2Lg.png)*I Accept*

The next screen will contain your **Tracking ID**. It is in the format UA-XXXXXXXXX-X

![Tracking ID](https://cdn-images-1.medium.com/max/2880/1*nNqa32mlZmmJhC9P4WQ_YQ.png)*Tracking ID*

Now, it’s time to install the gatsby google analytics plugin.

![analytics plugin](https://cdn-images-1.medium.com/max/2880/1*yAkgX-QSsDeLvDQ9WUuV-Q.png)*analytics plugin*

Next, we need to add the plugin in **gatsby-config.js** file. Here, we need to put the Tracking ID, we got from google.

![gatsby config](https://cdn-images-1.medium.com/max/2880/1*dz2ooahVHBD4nk-lCjbVdQ.png)*gatsby config*

Next, let’s start the dev server to see if any issues. We need to restart the server by **npm run develop**

I have also checked agin in [http://localhost:8000/](http://localhost:8000/) and there were no errors. Next, let’s add these changes to our production.

So, i had just committed my changes and pushed to GitHub. It will again build our production site in Netlify.

![Changes published](https://cdn-images-1.medium.com/max/2880/1*CtVXdpiAnLGHpcMVmM5n_Q.png)*Changes published*

Once the site is published, go back to google analytics page and click on Home tab. You will see your site data. It is very less now, please visit more to read my blogs and increase my count :).

![Site data](https://cdn-images-1.medium.com/max/2880/1*557Ql2HgvXXWuG28v4JBqQ.png)*Site data*

One more important thing i want to do on my personal blog site and that is to change the **canonical link** in my **medium** and **dev** posts.

If a post occurs at more then one place then google bots give more priority to the original post. Now, it doesn’t matter where you published the blog first, because all big blogging platforms have ways to give canonical links.

My process is to create the blog in medium first because that is what i am doing since the last 1.5 years. After that i use an awesome package called [mediumexporter](https://medium.com/@macropus/export-your-medium-posts-to-markdown-b5ccc8cb0050) to change the post to Mark Down file.

After that i paste the content of Mark Down file to a new dev post. Since dev is also serving as my headless CMS for my site, due to the awesome service of Stackbit, it gets published in my personal site.

Will show the process on one of my earlier blog. First will add link to a medium post.

I had opened one of my earlier medium post. Since i am logged in, i also get the edit button. First click on the Setting icon, after that the **Edit Story**.

![Editing Medium](https://cdn-images-1.medium.com/max/2880/1*XHySxNT_vom4BOXu8ll8sA.png)*Editing Medium*

After that click on the three dots and then click on **Customize canonical link**.

![More editing](https://cdn-images-1.medium.com/max/2880/1*YON9oV1-LcBy0uObavsCRQ.png)*More editing*

After that we need to paste the original story link in the **Set canonical URL:** Here i gave the link from my blog site. After that click on **Save** button.

![Set Canonical URL](https://cdn-images-1.medium.com/max/2880/1*5i7OayumsXEicYXWUXbnaw.png)*Set Canonical URL*

Next it time to head over to **dev.to** and change the canonical link there also. When i head over to my same blog in dev, i get the **Edit** button.

![DEV editing](https://cdn-images-1.medium.com/max/2880/1*qKy0fZhNVX3RD2h8IPqNnQ.png)*DEV editing*

Next, we click on the three dots.

![Click the arrow](https://cdn-images-1.medium.com/max/2880/1*5X-3t9cwxcJz7txQpychZg.png)*Click the arrow*

It will open a pop-up, where we had to give the canonical link. I again give it the link from my blog site in **Canonical URL**. After that click on **Done** button, which will close this pop-up. Also, click on **SAVE CHANGES** button after this.

![Canonical URL](https://cdn-images-1.medium.com/max/2880/1*CZT8KxkY1gfjiv0_xhIKbw.png)*Canonical URL*

Now i have to repeat the above process of changing the canonical links of my 100 blogs manually for [my site](https://nabendu.blog/) to get better SEO :)

Hope, you liked this series as i liked making it.


*[This post is also available on DEV.](https://dev.to/nabendu82/creating-blog-site-using-stackbit-gatsbyjs-and-dev-3-4n31)*


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
