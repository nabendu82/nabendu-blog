---
title: Creating an Agency Site in GatsbyJS-1
date: '2019-09-28T14:16:48.315Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--oWZFhsDb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--PkTTeVqd--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/w3as3kjoiq0tf3xxuwkf.jpeg
comments_count: 2
positive_reactions_count: 70
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/creating-an-agency-site-in-gatsbyjs-1-9980c559d19f
template: post
---
I have done quite a bit freelance WordPress development around 9 years back(2011). Three things which i didn’t liked at that time with WordPress. First was little coding, as i was creating these sites in WordPress with themes. Second, the sites were really slow and third, a lot of these sites were hacked and client used to come back.

I had came a long way since then and now i work as JS developer (React/Angular). I keep this awesome static site generator, GatsbyJS and decided to dive into it. I need to create a new blog site and some other personal sites. These sites are mostly static and Gatsby is a great way to use my React Skills and seems to also solve the problems which i had with Wordpress.

Will first try it to build a simple demo Agency site(Known as Service company in India). Right now i had gone through only the official docs at [https://www.gatsbyjs.org/tutorial/](https://www.gatsbyjs.org/tutorial/) and it is awesome. Although i can use, one of the many starter kits available at Gatsby site to get a head-start. But decided to writer my own CSS, to brush up my CSS skills.

Let’s start with Gatsby. I will be following along with the tutorial to create the site. Install gatsby globally by npm install -g gatsby-cli

Next to create a new gatsby site give the following command in the terminal. It uses the most basic gatsby starter kit.

    gatsby new agencyDemo [https://github.com/gatsbyjs/gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)

![install](https://cdn-images-1.medium.com/max/2000/1*V6Sdy0VVgxTTNtiyvway2Q.png)*install*

Now, goto the directory and run gatsby develop

![gatsby develop](https://cdn-images-1.medium.com/max/2000/1*B8VjPhUuQUyGTIu31dr5CQ.png)*gatsby develop*

Now, this basic site is up and running at [http://localhost:8000/](http://localhost:8000/)

![Gatsby up](https://cdn-images-1.medium.com/max/2880/1*qhPdoc0kxtpknM_MC7CZSw.png)*Gatsby up*

Will start with creating the home page first. In Gatsby everything is React, so we will create the Home page component. We will first use global styles for the generic styles.

First create a folder styles inside src. Then a file global.css inside it. We will put the below generic global css inside it.

![Basic Styles](https://cdn-images-1.medium.com/max/2880/1*XjZ2Yem7_UF3TRbCQfBTqw.png)*Basic Styles*

Next create a file gatsby-browser.js in the root directory and include this global.css file.

![gatsby-browser.js](https://cdn-images-1.medium.com/max/2880/1*AD_Us16-O3HwGyefJTDopQ.png)*gatsby-browser.js*

We will use the extremely popular and my favorite CSS-in-JS library Styled Component to style the rest of the project.

We need to install some dependencies for styled-components. So, open up the terminal and type the below command.

    npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components

Next, include the below in sites gatsby-config.js This file should be there already in the root folder.

![gatsby-config.js](https://cdn-images-1.medium.com/max/2880/1*U6SHHG3OLKigEkA64MOBEQ.png)*gatsby-config.js*

Then restart the gatsby develop in the terminal.

We will now start with the index page. We will have a full page image and some centered text on top of it. First change your index.js as below.

![index.js](https://cdn-images-1.medium.com/max/2880/1*6yQ1WLkj0Y3ycbEnDgWnXg.png)*index.js*

Now, we will start to write the Styled component. Create a file IndexStyles.js inside styles directory.

First the styles for the Banner. We will show our banner.jpg file as a background-image, so use the :after pseudo element.

Also, upload the image banner.jpg to the static folder. From here in a gatsby project, we can directly use an image.

![Banner Styles](https://cdn-images-1.medium.com/max/2880/1*m_K_fvsU2w0d-Ps2eyw1Rg.png)*Banner Styles*

Next, we will center our text. We need to use the positioning system as we are showing the text over an image. We had already made the parent a position: relative and this div, we are making position: relative. Then we are using the left, top and transform it.

![position: absolute](https://cdn-images-1.medium.com/max/2252/1*HF-j0cqAC5bgsU_F3p97GQ.png)*position: absolute*

It will result in the below.

![Centered text.](https://cdn-images-1.medium.com/max/2866/1*B3QRAXjoPH3BN9qlHWap0Q.png)*Centered text.*

Let’s now add some styles to the h2, p and a(Link tag converts to an anchor tag).

![Styling.](https://cdn-images-1.medium.com/max/2880/1*JDZZKaub520-wKBpNKU_bw.png)*Styling.*

Which will result in this beautiful page.

![The beauty](https://cdn-images-1.medium.com/max/2880/1*GJBrBCBaxtxLmYmJgPy46w.png)*The beauty*

Let’s add the style for the text Learn More. For this also we use the position: absolute logic.

![MoreText](https://cdn-images-1.medium.com/max/2250/1*ZG16gShbwViCxRx1Cun18Q.png)*MoreText*

Let’s start with our Section two. Update the index.js to include this.

![SectionTwo](https://cdn-images-1.medium.com/max/2880/1*egXez6JV34Rewjc2ejHDSw.png)*SectionTwo*

Now, let’s add some styled-components for the SectionTwo.

![SectionTwo](https://cdn-images-1.medium.com/max/2880/1*ylyu-3Kbn1-UruxJtivKbA.png)*SectionTwo*

We will now use some font-awesome icons to give this section a nice finish. Open the terminal and install the dependencies.

    npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons

Then import the libraries in index.js

![fontawesome](https://cdn-images-1.medium.com/max/2880/1*p8ZTvhfiAK85TfNS5zHuBg.png)*fontawesome*

Just add the following code below your div from last.

![Awesome code](https://cdn-images-1.medium.com/max/2788/1*3MHCegNthHKpmsr6pYEVAQ.png)*Awesome code*

And you will get this.

![Our Passion](https://cdn-images-1.medium.com/max/2880/1*oPHb0yLceXgOCayyB-613Q.png)*Our Passion*

We also need some padding in this section. Let’s add it.

![Some padding.](https://cdn-images-1.medium.com/max/2880/1*vH70vVz0AP8G2KZwQs8NrQ.png)*Some padding.*

Next, we will create SectionThree. It will have an image along with text, so we will make use of Flexbox. Add the following in index.js

![SectionThree](https://cdn-images-1.medium.com/max/2880/1*LT37u2kxuXZU42SfILGfQw.png)*SectionThree*

Now, let’s add these styles in IndexStyles.js

![SectionThree](https://cdn-images-1.medium.com/max/2880/1*9602vR7CXn_bhPfc7orruw.png)*SectionThree*

![FlexBoxIndex](https://cdn-images-1.medium.com/max/2880/1*mfrY2o-ayErODertYKdYqA.png)*FlexBoxIndex*

Let’s do some housekeeping by making common code for paragraph. Remove p from TextWrapper, SectionTwo and FlexBoxIndex

Then create a new styled component, with some props.

![Generic Para](https://cdn-images-1.medium.com/max/2880/1*Jh2dXhQ5g7ltksyEXdhwfA.png)*Generic Para*

Now, use it as required.

![Some Para](https://cdn-images-1.medium.com/max/2880/1*EaKs6aCRmipFLrtRDGPvkQ.png)*Some Para*

![More para](https://cdn-images-1.medium.com/max/2660/1*G_szc-6byETjHLpTvY5JFw.png)*More para*

Let’s do the same song and dance for h2 tag. Remove h2 from SectionTwo and FlexBoxIndex

And add a styled component GenericH2 in IndexStyles.js

![GenericH2](https://cdn-images-1.medium.com/max/2880/1*b0QfwrzPc3ffixZ1nVPJHA.png)*GenericH2*

Then replace this in the index.js

![GenericH2 in SectionTwo](https://cdn-images-1.medium.com/max/2748/1*LLO0Hu04WSzRNwMUqz1zrw.png)*GenericH2 in SectionTwo*

![GenericH2 in SectionThree](https://cdn-images-1.medium.com/max/2784/1*VoGatOkNlgLcifAMBxmK5Q.png)*GenericH2 in SectionThree*

This completes Section Three.

![SectionThree](https://cdn-images-1.medium.com/max/2874/1*XUPuZEkCDZ53uo_ZYWVQKA.png)*SectionThree*

We have two more sections to go in the Home Page and then we will create Our Works and About Us Page. We will use Layout component for Header and Footer.

These all for next parts. You can find code for the same [here](https://github.com/nabendu82/AgencyDemo).



*[This post is also available on DEV.](https://dev.to/nabendu82/creating-an-agency-site-in-gatsbyjs-1-1mdd)*


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
