---
title: Complete Production Grade Restaurant Billing App built in React NextJS GraphQL
date: '2019-09-24T03:09:01.801Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--suewbaso--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--M36WPA2l--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/9qyu4dw4qt9cyj2xcj15.jpeg
comments_count: 4
positive_reactions_count: 163
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/complete-production-grade-restaurant-billing-app-built-in-react-nextjs-graphql-d4efac352be6
template: post
---
I had completed building the Indian Restaurant Billing App , which i started from the learning of [Advanced React](https://advancedreact.com/) course by Wes Bos.

I also wrote four articles earlier related to the app, which included some of the problems which i faced and also some settings.

In this article i will give the way to install the app on localhost after taking it from my [github](https://github.com/nabendu82/BillingRestro) . There is a prisma setup, transactional email setup , admin user generation.

I will also walk you through the app. My motive is to have this app serve as a basis of the more advanced Restaurant or general Point-Of-Sale app for anyone or to be used by small Restaurant owners. Fell free to fork it, use it, raise issue(and fix them)

So, go to your favorite terminal and clone the project.

![git clone](https://cdn-images-1.medium.com/max/2000/1*gyz46PiI1tSdI1yg1dZcmw.png)*git clone*

Now, you will see two folders —**backend** and **frontend**. Go inside each folder and do **npm install**

![npm install](https://cdn-images-1.medium.com/max/2000/1*SPHh5u1nX9Ov4AXjCghQcw.png)*npm install*

Now, it’s time to setup a Prisma database. So, go to [https://www.prisma.io/](https://www.prisma.io/) and setup an account.

Once it is done, you can check your prisma dashboard.

![Prisma Dashboard](https://cdn-images-1.medium.com/max/2880/1*sQR4FUV8jZZdU8_4bMJtcg.png)*Prisma Dashboard*

We will do some of the deployment through the terminal, so go ahead in **backend** folder and first install prisma globally by **npm i -g prisma**

![prisma globally](https://cdn-images-1.medium.com/max/2000/1*W4iolzDQiNLV-oWORNhh-Q.png)*prisma globally*

Now, while in backend folder only give command prisma login.

![prisma login](https://cdn-images-1.medium.com/max/2174/1*XSYBfsijP53FOMiEk8GUcQ.png)*prisma login*

It will open your default browser, where you need to enter your credentials which were been used to create the prisma account.

![Enter your credentials](https://cdn-images-1.medium.com/max/2880/1*RlAzKCNRDnorM-lQ_jb7eQ.png)*Enter your credentials*

Then it will ask to **Grand Permission** for use.

![Grant Permission](https://cdn-images-1.medium.com/max/2880/1*oYZI6bL6Li4qWIurEpxBkg.png)*Grant Permission*

Once you click on Grant permission, it will ask you to close the browser. Once done you are authenticated in the console.

Now, we need to type **prisma init** to initialize a new Prisma service in the terminal. You will get some errors as below.

![prisma init error](https://cdn-images-1.medium.com/max/2000/1*l4Mu0-LzjHtgxNRL9li7QA.png)*prisma init error*

We are getting these errors because our project is already complete and have some of the prisma related auto-generated files.

You need to go ahead and delete some of them. Delete the below files.

    .graphqlconfig.yml
    datamodel.prisma
    prisma.yml
    variables.env
    src/generated/prisma.graphql

Again type the **prisma init** and it will let you go through. Here use mouse keys to go down and enter **Demo Server + MySQL database**

![Select Demo Server](https://cdn-images-1.medium.com/max/2000/1*HWWfkA0AUmqEbb5Q36GSnA.png)*Select Demo Server*

Then choose the least latency one in next screen.

![Choose the least latency one](https://cdn-images-1.medium.com/max/2000/1*FM91hgSfaOmUzLESDfwuGA.png)*Choose the least latency one*

After that choose a name for your service and give stage as **dev**.

![stage is dev](https://cdn-images-1.medium.com/max/2000/1*_oQMmWOLIrtCCHIThJcIgQ.png)*stage is dev*

In select programming language give **Don’t generate**

![Don’t generate](https://cdn-images-1.medium.com/max/2000/1*HHJ3MOkfiI_vw9kPqOuflg.png)*Don’t generate*

And prisma created two files for us.

![Two files created](https://cdn-images-1.medium.com/max/2000/1*U7ghgFkN3n4de3M7CHVW-A.png)*Two files created*

Let’s now open the **prisma.yml** and we will notice that prisma gave us an endpoint.

![endpoint](https://cdn-images-1.medium.com/max/2880/1*Nr4crcbZOQPSK-QJ1tHPAg.png)*endpoint*

We will put this endpoint information, along with some other sensitive information to our environment file.

So, go ahead and create a **variables.env** in your **backend** folder. The PRISMA_ENDPOINT will be the endpoint we got from **prisma.yml** file. Put PRISMA_SECRET and APP_SECRET, anything of your choice.

![variables.env](https://cdn-images-1.medium.com/max/2880/1*QTZ_ACMAkjI-H9U6g9tTNw.png)*variables.env*

Next, go to **prisma.yml** to use these variables. Notice that we have commented out the secret. It is done because we are in development and we don’t want the database to ask us password everytime.

![prisma.yml](https://cdn-images-1.medium.com/max/2880/1*2IISv-TMo9OCOiuf4ShMYw.png)*prisma.yml*

We need to update our **datamodel.prisma** to the latest code. We had to delete it for *prisma init* to succeed. Get it from [here](https://github.com/nabendu82/BillingRestro/blob/master/backend/datamodel.prisma).

![**datamodel.prisma**](https://cdn-images-1.medium.com/max/2880/1*Ye-DHgIODQwg0sfASkvo6Q.png)***datamodel.prisma***

Now in the **backend** folder run **npm run deploy**

![npm run deploy](https://cdn-images-1.medium.com/max/2000/1*o0vBAxcEJxF9-qHQv0qgHw.png)*npm run deploy*

If everything is successful, you can see the service in your prisma dashboard.

![Our service](https://cdn-images-1.medium.com/max/2880/1*H_L_cNNlm7ffZ9OGIDmTbQ.png)*Our service*

Click on the service and you will see all our datamodel items.

![All our models](https://cdn-images-1.medium.com/max/2880/1*MhRaoyB4P6ELLzz6l5Fsng.png)*All our models*

Before, we run our backend and frontend one last step is remaining. Prisma uses something called **prisma.graphql,** which we had to delete for *prisma init* to succeed. Get it from [here](https://github.com/nabendu82/BillingRestro/blob/master/backend/src/generated/prisma.graphql).

Add it in **src/generated/prisma.graphql**

![prisma.graphql](https://cdn-images-1.medium.com/max/2880/1*2koh2UDNx4_MoJ0RGw27_Q.png)*prisma.graphql*

Now goto **backend** and **frontend** folder and run **npm run dev**

![npm run dev](https://cdn-images-1.medium.com/max/2000/1*Cv94EL8JBgMZBg5ntw1xXQ.png)*npm run dev*

If both are successful your app will start in [http://localhost:7777/](http://localhost:7777/)

![[http://localhost:7777/](http://localhost:7777/)](https://cdn-images-1.medium.com/max/2880/1*dhzymaL12rnuwLlsku3smA.png)*[http://localhost:7777/](http://localhost:7777/)*

Now, in the app the admin user have the privilege to create new user. So, we have to create an admin user first from the backend via graphql playground.

Goto [http://localhost:4444/](http://localhost:4444/) and give the below mutation to create an admin user.

![The mutation to create admin user](https://cdn-images-1.medium.com/max/2880/1*_xIfrarDAAxi_EASAwpAEQ.png)*The mutation to create admin user*

Then head over to prisma dashboard and add an Admin privileges to this user. You need to click on the three dots beside permissions and click on **ADMIN**. Then click on the button **Save to Database** at the bottom

![Adding ADMIN privileges](https://cdn-images-1.medium.com/max/2880/1*-HHaQddsUvGWzs1YeGbfrA.png)*Adding ADMIN privileges*

Now login with the Admin user by clicking on SIGNIN. You will see a lot of different admin options here.

Next, we will create a normal user. Click on the SIGNUP.

![SIGNUP](https://cdn-images-1.medium.com/max/2880/1*PNV4xpLjjKZAHpDl7-s6NA.png)*SIGNUP*

Create a user with real gmail credentials, as we have reset password facility also.

![Real credentials](https://cdn-images-1.medium.com/max/2880/1*2pe_ngD0VyF8WFykUkeUTA.png)*Real credentials*

Next, we will do Transactional email setup for password reset. For this follow all steps from my earlier dev.to article [here](https://dev.to/nabendu82/sending-transactional-emails-through-gmail-in-react-nextjs-graphql-app-1ap5).

You will get three new values for **CLIENT_ID**, **CLIENT_SECRET** and **REFRESH_TOKEN**, which you will add in **variables.env**

![Three new values](https://cdn-images-1.medium.com/max/2880/1*GCBxyfYzTBUpyxKwigHUnA.png)*Three new values*

Also, in **Mutation.js** add, the gmail id which you had used to setup the transactional email.

![Mutation.js](https://cdn-images-1.medium.com/max/2880/1*3wZHUY13A6Y3C2cWCthDLQ.png)*Mutation.js*

You need to restart the **backend** server and then click on RESET.

![reset password](https://cdn-images-1.medium.com/max/2870/1*jvpRU823uLhhlT9QWS4IPw.png)*reset password*

If it is successful and you will get the message.

![Password reset successful](https://cdn-images-1.medium.com/max/2876/1*SaJrKzyzhvbKnyBD3hKQWw.png)*Password reset successful*

You will get a nice email in your gmail account with the link, to reset the password.

![Mail for password reset](https://cdn-images-1.medium.com/max/2174/1*mH6vhOH-bwivMNmOJ_PpSQ.png)*Mail for password reset*
> You also need to setup an cloudinary account for image upload and management. Follow all instructions from my earlier dev.to article on it [here](https://dev.to/nabendu82/cloudinary-for-image-management-in-react-nextjs-app-5f7).

Just change username with the one you got from following the steps in above mentioned article in **CreateItem.js**

![cloudinary](https://cdn-images-1.medium.com/max/2880/1*KFZt5ww0iD0bkIhSqu8yzg.png)*cloudinary*

It’s time to test some image uploads. Login with your ADMIN user and click on ADD DISH in hamburger menu. You can also create additional type of users from PERMISSIONS, who can just create and item, or delete or edit an item.

![Adding a Dish](https://cdn-images-1.medium.com/max/2880/1*rOs75QBbqeObV6K_9GT7kg.png)*Adding a Dish*

Click on Submit and the dish gets successfully added.

![Dish Successfully added](https://cdn-images-1.medium.com/max/2878/1*8Mcu7prGo9gBUBQUye9irw.png)*Dish Successfully added*

This completes the setup. Go ahead and check all the functionality of Billing, Admin privileges and others. Everything gets saved in the cloud in Prisma database.

![Cloud Prisma databse](https://cdn-images-1.medium.com/max/2880/1*0-DVvaaqChPpmYa6VSqHPg.png)*Cloud Prisma databse*

If you like this project, please give me star on my GitHub link
[BillingRestro](https://github.com/nabendu82/BillingRestro)

Hope you liked this article and you want to deploy this project using heroku. Click [here](https://dev.to/nabendu82/deploying-react-nextjs-graphql-app-in-heroku-10e3) for the article on **Deploying React NextJS GraphQL App in Heroku**.

This open-source app has also been launched on Product Hunt. Please upvote it.

https://www.producthunt.com/posts/billing-restro


*[This post is also available on DEV.](https://dev.to/nabendu82/complete-production-grade-restaurant-billing-app-built-in-react-nextjs-graphql-p10)*


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
