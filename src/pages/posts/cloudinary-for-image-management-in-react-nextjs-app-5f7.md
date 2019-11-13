---
title: Cloudinary for image management in React NextJS App
date: '2019-09-23T10:36:59.862Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--LoKBZ__4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--Diy7kVAW--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/noiar140c0ja5vmu6g3a.jpeg
comments_count: 0
positive_reactions_count: 7
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/cloudinary-for-image-management-in-react-nextjs-app-9f93751706db
template: post
---
I recently started building Indian Restaurant Billing App as a part of applying my learning's , after completing [Advanced React](https://advancedreact.com/) course by Wes Bos.

In my first article i changed the menu to [hamburger menu](https://dev.to/nabendu82/creating-a-hamburger-menu-in-react-nextjs-app-1hpb) from the normal menu.

Back to the topic, when we give user to upload image to the web-app, we generally need to store the image somewhere. That somewhere nowadays is cloud.

Now, there are many different services out there but cloudinary is one of the best and easy to use in a React NextJS app and also taught in the course by Wes Bos.

According to them — *Cloudinary allows any web application to manage all images in the cloud: upload, resize, crop, detect faces, Facebook & Twitter support, fast CDN delivery*.

Now, i have done some backend changes like adding a Prisma database and a Yoga server above it, since my last article and the app looks like this currently.

![Current State of App](https://cdn-images-1.medium.com/max/2876/1*ZdR7Jq9W3XdBunLzaut9dA.png)*Current State of App*

So, it’s time to add some image. Head over to [https://cloudinary.com/](https://cloudinary.com/) and create an account. You will be taken to the below dashboard.

![Cloudinary dashboard](https://cdn-images-1.medium.com/max/2880/1*ZYhQpvwJ4podNLrIlbSKcA.png)*Cloudinary dashboard*

Next click on Settings in the top right corner of the dashboard.

![Open settings](https://cdn-images-1.medium.com/max/2880/1*netkC5sPdYxYWNVWZYFvWg.png)*Open settings*

Then we click on Upload tab in Settings.

![Goto Upload](https://cdn-images-1.medium.com/max/2880/1*ZscrVzK8c7Gp2lEbKoLA8A.png)*Goto Upload*

Then scroll down and find the link “**Add upload preset**” and click on it.

![Scroll down and “Add upload preset”](https://cdn-images-1.medium.com/max/2176/1*yEVoVZ7sVoRqpcQiMjPujg.png)*Scroll down and “Add upload preset”*

In the next screen, give a **Upload preset name**, the **Signing Mode** to be *unsigned* and also give a **Folder** name.

![Add some details](https://cdn-images-1.medium.com/max/2352/1*addGOxr-5zpj5cyZfbg7DQ.png)*Add some details*

Click on **Upload Manipulations** tab and click on **Edit** inside **Incoming Transformation**

In the pop-up give **Width** as *180*, **Height** leave *blank*, **Mode** as *Scale* and **Format & shape** as *Auto*

Click on **OK** button in pop-up.

![Incoming Transformation Edit](https://cdn-images-1.medium.com/max/2288/1*2R8o0nibWbw__kgJ5gG3gQ.png)*Incoming Transformation Edit*

Now, click on **+Add Eager Transformation**, which will open a similar popup as above case.

In the pop-up give **Width** as *1000*, **Height** as *1000*, **Mode** as *Scale* and **Format & shape** as *Auto*

Click on **OK** button in pop-up.

![Eager Transformation Edit](https://cdn-images-1.medium.com/max/2168/1*GhLGaIv36wQRFkrJ8-_cwg.png)*Eager Transformation Edit*

Now, Click on the Big Orange **Save** button on the top right corner of the page to save the configuration.

It will open this screen, which shows our newly added **BillingRestro** configuration.

Note, that the **Incoming Transformation** is for the smaller images which is been shown at the Home or Item page in my app and **Eager transformation** is for the larger images, which the user gets to the product details page. I will not be using Eager transformation in my project, but taught just for completion sake.

![The saved menu](https://cdn-images-1.medium.com/max/2876/1*n8OwztiVvx22oOOccFHSSg.png)*The saved menu*

Two things to note from here, before moving to coding is the Nmae of Upload Preset which is **BillingRestro** in my case. And also the username, which you can find by scrolling up in the page and getting it from Invalidate versioned URLs(highlighted one) or from the upper right corner.

![The username](https://cdn-images-1.medium.com/max/2000/1*nxguSeiEEJZmzx1zrH_Ukg.png)*The username*

I have a **CreateItem** component, which is a plain React form containing input to enter **Title** and **Price**.

I added the highlighted code to upload a file by using *input type=”file”*. On adding a file will call **onChange**, which calls a method **uploadFile**.

Also, showing a small Preview to the user of the uploaded image before submitting.

![New File upload](https://cdn-images-1.medium.com/max/2880/1*BqqrT8hs-qyORrCe2JbPzA.png)*New File upload*

Now, In the **uploadFile** method we do the API call to Cloudinary with our username and also the **upload_preset** name from the earlier screenshots.

We get the response back in **file.secure_url** from cloudinary which we use to update the state, using setState.

![The upload File function](https://cdn-images-1.medium.com/max/2880/1*b3XCQtCjd1fW5QPwPgdnCg.png)*The upload File function*

Now, time to test the code. In my **adddish** page, the **CreateItem** components gets load.

![The adddish page](https://cdn-images-1.medium.com/max/2880/1*a8hlam-wEKfbNxBQRG3nCg.png)*The adddish page*

Here, i upload an image, add a title and price(in paisa).

![Adding an item](https://cdn-images-1.medium.com/max/2880/1*cWfckqE_6lvCsIhwX3OOlA.png)*Adding an item*

The new item gets added in the home page.

![The homePage](https://cdn-images-1.medium.com/max/2880/1*jIcmPuuy2ZjlBJRHJVML0Q.png)*The homePage*

You can get the code till this for the same in this Github [link](https://github.com/nabendu82/BillingRestro).


*[This post is also available on DEV.](https://dev.to/nabendu82/cloudinary-for-image-management-in-react-nextjs-app-5f7)*


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
