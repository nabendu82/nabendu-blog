---
title: Creating an Agency Site in GatsbyJS-2
date: '2019-09-28T14:21:46.505Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--4CMD9gWs--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--rqV-7dvp--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/fvg22zet8gtesvx4um2b.jpeg
comments_count: 0
positive_reactions_count: 9
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/creating-an-agency-site-in-gatsbyjs-2-a0b50a28a95f
template: post
---
Welcome to part-2 of the series. We will start with Section Four here.

We will have the usual Heading and paragraph, followed by six sections containing some details about the technologies.

We are adding SectionFour in the index.js

![index.js](https://cdn-images-1.medium.com/max/2778/1*wE160oOB9ylRx9ViLYk1Fg.png)*index.js*

Now, let’s add CSS for the same in IndexStyles.js. Also, don’t forget to export the newly created Styled component.

![The CSS](https://cdn-images-1.medium.com/max/2746/1*r3LjbOS55LgYw1GGLquAjw.png)*The CSS*

Now, we will create the Grid which will contain the six sections. The six sections will be exactly the same, only the background will be different.

![CSS grid](https://cdn-images-1.medium.com/max/2880/1*2DEAr4xsHe3L98DQvLvVGQ.png)*CSS grid*

Now, we will add the CSS to our IndexStyles.jsfile, inside the SectionFour styled component.

![Styles](https://cdn-images-1.medium.com/max/2786/1*ZJ7LPNGnqWMm3_LAHP2SMA.png)*Styles*

We also need to install a new fontawesome library, as we are using some brand icons here. So, in the terminal stop gatsby and install this via npm

    npm install [@fortawesome/free-brands-svg-icons](http://twitter.com/fortawesome/free-brands-svg-icons)

The changes made to the header of our index.js is below.

![Including Font-awesome](https://cdn-images-1.medium.com/max/2880/1*D2Mnvnw0IDFnvt3X8XRJdA.png)*Including Font-awesome*

Now, our Section Four looks like

![Section Four](https://cdn-images-1.medium.com/max/2880/1*z3ripV2QmgxwSk_Mi5z05w.png)*Section Four*

The next section, will have a parallax image with an Contact Us form. We will be reusing the Banner styled component used in Section 1 here.

![index.js update](https://cdn-images-1.medium.com/max/2782/1*0yRElYmA36m0RG6qRdbYXw.png)*index.js update*

But, we need to update the Banner styled component to contain the parallax effect.

![Parallax effect.](https://cdn-images-1.medium.com/max/2880/1*YE2BDlRYogml9wlhPIPhqA.png)*Parallax effect.*

Next, lets add a form on top of the image.

![The form](https://cdn-images-1.medium.com/max/2786/1*3u2KLMPo2ZGMXgcnzNwaXw.png)*The form*

Next, let’s add some Styles in IndexStyles.js

![Some styles](https://cdn-images-1.medium.com/max/2642/1*mGLl00grPyx4Y9dmHXi8Vw.png)*Some styles*

Let’s add some more styles for the form.

![More Styles](https://cdn-images-1.medium.com/max/2880/1*MiJf07wB-C4qQUtLFFVfWw.png)*More Styles*

This will result in the below section.

![Contact Us](https://cdn-images-1.medium.com/max/2880/1*-g8G4_UDItweYdwcMNSclQ.png)*Contact Us*

Now, we will create the footer section. But our Footer will be common to all our pages. So, we will put it in the layout component.

Create a folder components inside src and a file called layout.js inside it. The content contains a simple footer with different icons. Here the {children} will show the components, which we will soon wrap Layout component with.

![Footer](https://cdn-images-1.medium.com/max/2880/1*CVJQuHshlCwvvA7j30qOVQ.png)*Footer*

Let’s put some styles in IndexStyles.js for Footer.

![The Footer Styles](https://cdn-images-1.medium.com/max/2258/1*v_IEM9WJZFAlFtozUidiXg.png)*The Footer Styles*

Now, let’s wrap our HomePage with this Layout component.

![index.js](https://cdn-images-1.medium.com/max/2880/1*unalRdNuU956IRmQRRyd3g.png)*index.js*

Now, our homepage is almost complete with the Footer.

![Footer](https://cdn-images-1.medium.com/max/2870/1*vmYfujY0IEBdPbM0a4VYyg.png)*Footer*

We have one more thing left in the Home Page and that is the Menu. We will create that also in the Layout component as it will be shared with our Our Work and About Us page.



*[This post is also available on DEV.](https://dev.to/nabendu82/creating-an-agency-site-in-gatsbyjs-2-3nc5)*


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
