---
title: Creating an Agency Site in GatsbyJS-3
date: '2019-09-28T14:25:44.873Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--eTLrQXa7--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--qGIX2xxK--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/xzhgai0vaetjs0tk30o4.jpeg
comments_count: 3
positive_reactions_count: 22
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/creating-an-agency-site-in-gatsbyjs-3-357f7bfbdc57
template: post
---
Welcome to part-3 of the series. In the previous part we have created a common footer in the layout component.

Let us first create a Header with Navigation.

![index.js](https://cdn-images-1.medium.com/max/2880/1*MybaeKaEM0GG6E9vbdI-AQ.png)*index.js*

Let’s add some styles now in styled-components.

![The Styles](https://cdn-images-1.medium.com/max/2638/1*SoTsc3Ds-UeZeNk7ogQ-CQ.png)*The Styles*

We now get a header with Menu.

![The Menu](https://cdn-images-1.medium.com/max/2880/1*Ei630T7lDXIyhm2QOQhEdw.png)*The Menu*

Next, we will create our Works page. Create a new file works.js inside pages folder.

![New Works page](https://cdn-images-1.medium.com/max/2880/1*DJg6upVMBW8QPd1p-F0yQQ.png)*New Works page*

Let’s add some Styles for the same in IndexStyles.js

![Styling](https://cdn-images-1.medium.com/max/2880/1*RbZfe5TfLc79bOLK-HdjXw.png)*Styling*

We will soon create a new component Project in which will pass each project. Let’s create an Array of Object containing some projects.

![The Array](https://cdn-images-1.medium.com/max/2788/1*fPjy5ITYZ1mL9MHjRNgcuQ.png)*The Array*

Next, let’s create the Project component inside components folder.

![Project](https://cdn-images-1.medium.com/max/2878/1*wMV7MlHDWhTzG-lIsZoWkA.png)*Project*

Let’s add some styles for the component in global.css

![global styles](https://cdn-images-1.medium.com/max/2880/1*xbCfBm17KKprCyJhixinqA.png)*global styles*

This shows our Works page.

![Works](https://cdn-images-1.medium.com/max/2872/1*gPfvIeGdo_dxkO5N-eUbHg.png)*Works*

We have missed one thing and that is to make the header fixed, so that if we scroll then also the header remains. For this in IndexStyles.js add the following.

![Header fixed](https://cdn-images-1.medium.com/max/2880/1*bsB9DdKQifrBcLIaCwMIrA.png)*Header fixed*

This was causing issues with Our Works text, because the margin: 0 for GenericH2

Let’s edit it using props, so that it can be used in works.js without effecting others.

![Styles updated](https://cdn-images-1.medium.com/max/2880/1*IzMqk8lVvrq96T0phbIzXg.png)*Styles updated*

Now, in works.js we just need to add some

![some added](https://cdn-images-1.medium.com/max/2880/1*aHHumkAB0KPvd42cM6c6sg.png)*some added*

We will next create a new page about.js inside pages folder.

![New page](https://cdn-images-1.medium.com/max/2880/1*Br6Bp_0CaiIGGwRCMe_xLw.png)*New page*

Here, we are reusing most of the part from our index.js, but using a different Banner image. We are doing this again with the help of props of styled components.

![Banner updated](https://cdn-images-1.medium.com/max/2880/1*0_Y35SMw7ZrhO3Onx2e-Aw.png)*Banner updated*

Let’s make SectionTwo now. Here we will again reuse a styled component.

![SectionTwo](https://cdn-images-1.medium.com/max/2784/1*KsJaMAHnobad5hN-sJQp5g.png)*SectionTwo*

We made the below changes in the SectionTwo styled component, to include a white background.

![SectionTwo changes](https://cdn-images-1.medium.com/max/2880/1*POGYaJ8gV3bQb2e09q8eOQ.png)*SectionTwo changes*

We have also added two new styled components.

![New Styled components](https://cdn-images-1.medium.com/max/2786/1*lDd6eSjyt-YguNVEG1J6Hw.png)*New Styled components*

Now our About page looks like below.

![About Us](https://cdn-images-1.medium.com/max/2880/1*XFf1Lu5zQ3UBXq3nPT87UA.png)*About Us*

We will now deploy our site to netlify. We already have a form submission setup in the index.js page with netlify.

If you want to know in details of form submission setup, go through this youtube video by Traversy media.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/6ElQ689HRcY" frameborder="0" allowfullscreen></iframe></center>

I have already pushed all my code to github. Now, let’s deploy to netlify. Open your netlify account.

![Netlify](https://cdn-images-1.medium.com/max/2874/1*kPoYhnSwF40LZ8LyHlV03g.png)*Netlify*

Now, click on New Site from Git

And then choose the provider. I have choose Github as my code is there. Once you authorize, it will show you list of all your Github repositories.

![All repos](https://cdn-images-1.medium.com/max/2876/1*EsE8ZmibQeuCbR5E9IupAw.png)*All repos*

Click on the repo to deploy. In my case it was AgencyDemo

![Defaults](https://cdn-images-1.medium.com/max/2878/1*XftIOhYjYaP2-R-4vq2e5w.png)*Defaults*

Keep the defaults and click on Deploy Site

And the site will be deployed within minutes.

![Site deployed](https://cdn-images-1.medium.com/max/2878/1*ZJyDjEuYy5_YwyuGdpebLA.png)*Site deployed*

Our site is deployed. It’s time to check the form submission feature of netlify. Go to the form in home page and add content.

![Content Added](https://cdn-images-1.medium.com/max/2878/1*CH_k7GwBE4NdbvLLNIpYwA.png)*Content Added*

The form submission didn’t went as expected and gave me a lot of error. After searching found that form handling in site generated through gatsby is a bit different in netlify. Found these two links to solve the issue.

[https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/# form-handling-with-static-site-generators](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/# form-handling-with-static-site-generators)
[https://github.com/sw-yx/gatsby-netlify-form-example-v2](https://github.com/sw-yx/gatsby-netlify-form-example-v2)

So, we will change our functional component to class based component and do the following changes.

![Class based component](https://cdn-images-1.medium.com/max/2880/1*H9o5k9xdXHCpjkWDTxEhlA.png)*Class based component*

And these changes also.

![Changes](https://cdn-images-1.medium.com/max/2880/1*cfP7TtDfrCmNYaGbTO729g.png)*Changes*

We also need to add thanks.js file inside pages folder

![thanks](https://cdn-images-1.medium.com/max/2880/1*bLRRisHB3X4xyFVw5WSJZw.png)*thanks*

Now, when we submitted the form we receive the message in our netlify console.

![Message received](https://cdn-images-1.medium.com/max/2880/1*4OMbcZfWpo9PyjN4rhMsLw.png)*Message received*

You can find the complete code for the project here [https://github.com/nabendu82/AgencyDemo](https://github.com/nabendu82/AgencyDemo)

The netlify deployment is here [https://priceless-panini-95d866.netlify.com/](https://priceless-panini-95d866.netlify.com/)


*[This post is also available on DEV.](https://dev.to/nabendu82/creating-an-agency-site-in-gatsbyjs-3-37kd)*


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
