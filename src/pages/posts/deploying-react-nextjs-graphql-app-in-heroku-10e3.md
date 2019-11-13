---
title: Deploying React NextJS GraphQL App in Heroku
date: '2019-09-24T03:28:33.122Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--FHQjKms9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--5EbaBvr4--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/bsv5mfpb6hhh3jf9cz1s.jpeg
comments_count: 2
positive_reactions_count: 16
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/deploying-react-nextjs-graphql-app-in-heroku-52472805d75e
template: post
---
Now that we have completed our Restaurant Billing app, it’s time to deploy it to the web. You can find my earlier article related to the same [Complete Production Grade Restaurant Billing App built in React NextJS GraphQL](https://dev.to/nabendu82/complete-production-grade-restaurant-billing-app-built-in-react-nextjs-graphql-p10)

Most apps have just the frontend to deploy or the frontend and backend to deploy. But our app have three pieces, so we need 3 deploys.
> **Prisma Server**— MySQL database
**Yoga Server** — Mutation and Query Resolvers
**React App** — Next.js app

We will use heroku for this, as we can deploy all three there. We will start with Prisma

## Prisma Server

First go to you Prisma dashboard and goto **Servers**. And then click on **ADD SERVER.**

![ADD SERVER](https://cdn-images-1.medium.com/max/2880/1*r_9DWZzHEG6Y_05AXWTz1g.png)*ADD SERVER*

After this in this screen give the Server a name and description.

![New Prisma Server](https://cdn-images-1.medium.com/max/2874/1*uAHJpTyKMIycaNm-aFqp4g.png)*New Prisma Server*

Then click on **Create a new database** in this screen.

![Set up a database](https://cdn-images-1.medium.com/max/2880/1*YUeB9eWPAY1ou--6ReXWlA.png)*Set up a database*

then in **Choose database provider**, we choose Heroku

![Choose database provider](https://cdn-images-1.medium.com/max/2880/1*1uD_o8Nlhg58M-rrwlBmkg.png)*Choose database provider*

then click on **Connect to Heroku**

![Connect to Heroku](https://cdn-images-1.medium.com/max/2880/1*vwWoXZDaKPV6G-aLsS3-1w.png)*Connect to Heroku*

then enter your Heroku credentials.

![Link Heroku account](https://cdn-images-1.medium.com/max/2880/1*ER1CvtkIQ82QZFTh_vG41w.png)*Link Heroku account*

then choose **Hobby Dev** and click on **Create Database.**

![Create new database](https://cdn-images-1.medium.com/max/2880/1*sN06yrr-cpdygYpnujIjaw.png)*Create new database*

then we will get **New database successfully created**. Now click on **SET UP A SERVER**

![New database successfully created](https://cdn-images-1.medium.com/max/2880/1*qH2KnwMblZ891cTu70JByw.png)*New database successfully created*

then Setup the Server.

![Setup a Server](https://cdn-images-1.medium.com/max/2880/1*kxgsAD0RyEq916fqoXXOiw.png)*Setup a Server*

After that again choose the **Free plan** and click on **CREATE SERVER**

![Create a new Server](https://cdn-images-1.medium.com/max/2878/1*iphSh06_t1rHZudn9w-7ew.png)*Create a new Server*

then we will get the message **Prisma server successfully deployed**. Click on **VIEW THE SERVER**

![Prisma server successfully deployed](https://cdn-images-1.medium.com/max/2880/1*qDYpQkZ-LgmYZBwZkv4BWQ.png)*Prisma server successfully deployed*

We will now see our server successfully created.

![New Server added](https://cdn-images-1.medium.com/max/2880/1*TT2cEU0Ye1gLAo-duU1ipQ.png)*New Server added*

Then we will head over to our terminal to add Service to our server. Run the command 
`npm run deploy -- -n`


Use the down arrow key to navigate to our newly created server and press enter.

![npm](https://cdn-images-1.medium.com/max/2000/1*lcTCBis-8nOyhXpyPwEbYw.png)*npm*

Give your service a name and give stage as **prod**.

![Service Name](https://cdn-images-1.medium.com/max/2000/1*y5o9z4DwQ9uAvx7AoyH76w.png)*Service Name*

Next your service will be successfully created.

![Successful](https://cdn-images-1.medium.com/max/2000/1*cj1OfUEqRwW4_BkSg6Briw.png)*Successful*

Head over to Prisma dashboard and you can see the new service.

![Newly created service](https://cdn-images-1.medium.com/max/2880/1*Otv2KTlyBFt-Fk4Pnzqzdg.png)*Newly created service*

If you check your **prisma.yml**, you can see that our earlier endpoint is commented and a new prod endpoint added.

![prisma.yml update](https://cdn-images-1.medium.com/max/2880/1*rKNVGeJ4F7hwcSt7L3mZoQ.png)*prisma.yml update*

We will uncomment the **secret** in **prisma.yml** as this is production

![uncommenting secret](https://cdn-images-1.medium.com/max/2880/1*53trcD9z0d6LD8no7_6IFw.png)*uncommenting secret*

Finally, again run npm run deploy

![npm again](https://cdn-images-1.medium.com/max/2000/1*uLUoHjVsk7E7vdFKaK-q0g.png)*npm again*

## Yoga Server

Now, it’s time to deploy our app to Yoga Server. You need to have heroku cli installed for this. Check this [link](https://devcenter.heroku.com/articles/heroku-cli) for installation instruction.

Next,head over to the terminal. You should be in the main folder containing your **backend** and **frontend** folders. First commit your all uncommited code by -

    git add -A
    git commit -m "Heroku deployment"

![main folder](https://cdn-images-1.medium.com/max/2000/1*IC-sETjuug65iuzettSICA.png)*main folder*

Now we login to heroku by heroku login We need to press any key

![heroku login](https://cdn-images-1.medium.com/max/2000/1*IYnVFLiqhWKexLGMYjGLJg.png)*heroku login*

It will open your default web-browser and show the below screen.

![Login](https://miro.medium.com/max/1440/1*_QsdPL3qxd_6BYpg3KdDeA.png)*Login*

Once you login this screen will be show and you need to close the browser.

![Close the browser](https://cdn-images-1.medium.com/max/2880/1*0WSHbt7AakOMarE4IJWRSg.png)*Close the browser*

We will now see the successful login in terminal.

![Logged in](https://cdn-images-1.medium.com/max/2000/1*cQKAEgZPWLvWtjZkEFgi5g.png)*Logged in*

After this we need to create a new heroku app by the below command.

    heroku apps:create billingrestro-yoga-prod

![heroku create](https://cdn-images-1.medium.com/max/2000/1*VkfI2ioj6hzqt-LDNFzkmw.png)*heroku create*

You can now see the app create in your heroku dashboard.

![yoga app](https://cdn-images-1.medium.com/max/2880/1*HWLlcXY3p-r-o8R7qnN3OA.png)*yoga app*

Now we will get a new branch in our terminal. Do a git remote -v

![git remote](https://cdn-images-1.medium.com/max/2000/1*rdr0JqUPff7yy_xP4GNa9Q.png)*git remote*

Heroku only provided us one endpoint, but we need two — one for backend and other for frontend. So, we will create a new endpoint by the one provide by heroku.

    git remote add heroku-backend [https://git.heroku.com/billingrestro-yoga-prod.git](https://git.heroku.com/billingrestro-yoga-prod.git)

![One more endpoint](https://cdn-images-1.medium.com/max/2000/1*r58KFFKUgCTNPI8DiSyHXg.png)*One more endpoint*

Now, we will push all our **backend** code to this **heroku-backend** remote.

    git subtree push --prefix backend heroku-backend master

![subtree](https://cdn-images-1.medium.com/max/2000/1*ltqO22pWvZej8Qph7HUOtw.png)*subtree*

Next, we will need to add the secret contents from **variables.env** to our yoga server. Open the yoga app in heroku and goto **Settings**. Click on **Reveal Config Vars.**

![heroku app](https://cdn-images-1.medium.com/max/2878/1*3XPMwycQRr0P08-PBoF5EQ.png)*heroku app*

So, open your **variables.env** file. Take everything from here except PRISMA_ENDPOINT, which you have to take from **prisma.yml** file

![variables.env](https://cdn-images-1.medium.com/max/2880/1*5Y_B-T6kTK_epjw_YcmN0Q.png)*variables.env*

Add all the Config Vars as Key value pair.

![Config Vars](https://cdn-images-1.medium.com/max/2880/1*lnol5LusV_ogwEJcv3eqRw.png)*Config Vars*

Now, click on **More** and then **Restart all dynos**.

![](https://cdn-images-1.medium.com/max/2880/1*1r71yUPzLOC7i8WbVqrnHA.png)

The pop-up will as you to confirm again.

![](https://cdn-images-1.medium.com/max/2880/1*GTbMZghSrJSuMrL4Kz2ahQ.png)

After sometime click on Open App on the top right corner. It will open the yoga graphQL playground, in which you can see all the public facing Queries and mutations

![Yoga GraphQL](https://cdn-images-1.medium.com/max/2880/1*ovW1CbuvopqJso8KraTm2g.png)*Yoga GraphQL*

## React App

Last we will deploy our frontend code also to heroku. First, we need to update the code a bit. Open you config.js file and add the line for **prodEndpoint**. The link is the yoga app you deployed in the previous part.

![config.js](https://cdn-images-1.medium.com/max/2880/1*GdK2tFMnEcU6WJsHLZkdVA.png)*config.js*

Next, add these to **withData.js** file. Changes are in line 3 and line 8.

![withData.js](https://cdn-images-1.medium.com/max/2880/1*ruWjtsUPJySj5Txgfng_cw.png)*withData.js*

Next, we go to the terminal and create a new heroku app by 
`heroku apps:create billingrestro-react-prod`


![](https://cdn-images-1.medium.com/max/2000/1*sk2deW0Wn1Irvpob47f2_Q.png)

On checking git remote -v we will find the new remote endpoint

![](https://cdn-images-1.medium.com/max/2000/1*B4Ed2dvmM0Fnenhev3z_7Q.png)

We, also need to do a change in **package.json** for our frontend, before deploying. We add Line 12 for 
`heroku-postbuild`
 and also 
`add -p $PORT`
 in Line 9.

![package.json](https://cdn-images-1.medium.com/max/2880/1*8RqLGtxiKG0s7istSp8G_g.png)*package.json*

We, will add these changes before pushing to remote

![](https://cdn-images-1.medium.com/max/2000/1*vowzeQYwqK8B9xgUdsRJDg.png)

Next, we will push to **heroku-frontend** by the below **subtree** command

    git subtree push --prefix frontend heroku-frontend master

![](https://cdn-images-1.medium.com/max/2000/1*wAbNFczHIFz4-FJRmRKO5Q.png)

If we check in our heroku dashboard, we will find this newly added app.

![React app](https://cdn-images-1.medium.com/max/2880/1*DoOIGG_xJzBhnaE-CuQJiA.png)*React app*

Now, if we go to our react app, we get a network error. If we open the console, we will found it’s a CORS error.

![CORS error](https://cdn-images-1.medium.com/max/2880/1*WV6d3qIDlB5j_QUh1s1_VQ.png)*CORS error*

The CORS error occured because in our yoga config, we are pointing to localhost. So, open the yoga app, then go to Settings, then **Reveal Config Vars** and change the FRONTEND_URL to the react app.

![React configs](https://cdn-images-1.medium.com/max/2880/1*k5Rw-T8Oierj2r12vlQ2lQ.png)*React configs*

Then, as usual click on More and **Restart all dynos**.

![Restart all dynos](https://cdn-images-1.medium.com/max/2880/1*2oNJUD3GjmGb3U6Z1P5dJg.png)*Restart all dynos*

Then, go again to the frontend url and you get no error.

![No error](https://cdn-images-1.medium.com/max/2880/1*0u1CwXrgGyPPTG1wbNYOlg.png)*No error*

But we have the same problem, which we had when creating in localhost. We need a login and only ADMIN can Sign for new Account. So, we create the Admin first by opening our Yoga playground and create one user by the below mutation.

    mutation createUser {
      signup(email:"[validemail@gmail.com](mailto:nabendu.biswas@gmail.com)",name: "Admin",password: "valid"){
        email
      }
    }

![Valid gmail id](https://cdn-images-1.medium.com/max/2880/1*XQXNZWhFcViSzaw2rgOkHQ.png)*Valid gmail id*

Next, we go to the Prisma dashboard and open our service. In the bottom right in **permissions**, click on the three dots and it will open an popup. Click on **Add an item** and select **ADMIN** from the list.

![Prisma dashboard](https://cdn-images-1.medium.com/max/2880/1*ZFVxpU321d0yaUqNRD81Cg.png)*Prisma dashboard*

Then a new button **Save to Database** will appear in the bottom right. Click on it.

![Save to Database](https://cdn-images-1.medium.com/max/2880/1*FNbzNfQJgQrxRlKwhFzZPA.png)*Save to Database*

Head back to the frontend url and login with the Admin user to see all options.

![The Admin User](https://cdn-images-1.medium.com/max/2880/1*3fG0ptAOQkfydUDvrrKupQ.png)*The Admin User*

After adding some items the Web-app looks like below

![The complete App](https://cdn-images-1.medium.com/max/2880/1*_JZ4VCvVfXBRVnsxNhB4Ew.png)*The complete App*
> You can visit the deployed url and play [here](https://billingrestro-react-prod.herokuapp.com). Use the credentials normal@gmail.com/normal

Also, visit the github for the project to know all the features. And please give star if you like it.
[Complete Production Grade Restaurant Billing App](https://github.com/nabendu82/BillingRestro)


*[This post is also available on DEV.](https://dev.to/nabendu82/deploying-react-nextjs-graphql-app-in-heroku-10e3)*


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
