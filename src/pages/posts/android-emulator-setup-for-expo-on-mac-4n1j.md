---
title: Android emulator setup for expo on mac
date: '2019-10-05T08:59:05.668Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--45ap3fOG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--YDAyRGXZ--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/kkzz7eu2rizbssmmrfop.jpeg
comments_count: 0
positive_reactions_count: 6
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/android-emulator-setup-for-expo-on-mac-3511d3ef67e5
template: post
---
For the past one month, i have been doing development in React Native. I am using the expo-cli to create the project and using my physical Android phone for testing. It’s time to install the Android emulator on my laptop, so that i don’t have to check my phone every-time.

For this we have to install Android Studio 3+ first, so head over to this [link](https://developer.android.com/studio?gclid=Cj0KCQjw_OzrBRDmARIsAAIdQ_I0UQhy0lFfam8zT-buyrdJswqnfqX1GYMm5AygdXwnRIPOqRDBU98aAqIEEALw_wcB) or google it and download.

![Android Studio](https://cdn-images-1.medium.com/max/2880/1*z7w8qpzi8FOmAwguB_G1GA.png)*Android Studio*

It is 724 MB for mac, so will take sometime to download. Once the dmg file is downloaded, you will get the below screen. You need to drag Android Studio to Applications

![Downloaded](https://cdn-images-1.medium.com/max/2000/1*UjEDTBf6FnOtu9Z07dBElw.png)*Downloaded*

Now, when you open Android Studio on your mac, it will show below screen. Click on Next

![First](https://cdn-images-1.medium.com/max/2032/1*cYwpCS_6PM6zAteTm6alnw.png)*First*

On next screen choose Standard and click on Next.

![Standard](https://cdn-images-1.medium.com/max/2000/1*vatozsii7DPWEnewGJ5vKg.png)*Standard*

On the next screen, select any theme and click Next.

![Theme](https://cdn-images-1.medium.com/max/2000/1*Ejj3mWJBV_r2scOJh-ZB7g.png)*Theme*

On the next screen, click Finish.

![Verify Settings](https://cdn-images-1.medium.com/max/2000/1*YqpQ-wNLSEQvMXz0FVtXLQ.png)*Verify Settings*

On the next screen,it will start the download and will take sometime.

![Downloading Components](https://cdn-images-1.medium.com/max/2000/1*1Prm2Me4GpRCwVZo73MvKQ.png)*Downloading Components*

Once the download is complete, you will see the below screen.

![Finally](https://cdn-images-1.medium.com/max/2000/1*BtMbY5EglycMvMJOOywagA.png)*Finally*

Click on Configure and then Preferences from drop-down.

![Preferences](https://cdn-images-1.medium.com/max/2000/1*qKRpXJqpK8OlqrXQNbqgcA.png)*Preferences*

Goto System Settings -> Android SDK and copy the Android SDK location, somewhere.

![Preferences](https://cdn-images-1.medium.com/max/2020/1*eYJ6Rc4DU0ZdLW_Jt7EZ6w.png)*Preferences*

In the Android Studio Screen, click on Start a new Android Studio Project. Take any default setting for a project and then click on the Search icon on the top right corner. Type AVD and it will open below screen.

![AVD](https://cdn-images-1.medium.com/max/2880/1*l9xN-IO2b84TVdqWkijUzw.png)*AVD*

Once you click on +Create Virtual Device, you need to choose a device.

![Device](https://cdn-images-1.medium.com/max/2004/1*ypQ2wKvxn06IrBE4URtzNg.png)*Device*

Then you need to choose an OS from the next screen. Click on download for any latest android version.

![OS](https://cdn-images-1.medium.com/max/2000/1*vaH7zjTiBjG3eiJ3EEOKgQ.png)*OS*

It will open the below screen and download Android image. It will take sometime as the file is huge(1 GB).

![Huge installation](https://cdn-images-1.medium.com/max/2000/1*SeDI5FZCPB1ri4u-VjXB0g.png)*Huge installation*

Once the Download is finish, the Finish button will appear. Click on it and then the Next button on the earlier screen.

![Click Next](https://cdn-images-1.medium.com/max/2006/1*9VB-Mu0T5-kdyvOdQS4MPw.png)*Click Next*

In the next screen change the AVD Name if you want and click finish.

![Finished](https://cdn-images-1.medium.com/max/2002/1*Se2I0JXzWeU7kDqO-yd9Hw.png)*Finished*

Next, we need to open the terminal and add two export in the .bash_profile file. Notice that the path is what was in Android SDK location

![bash_profile](https://cdn-images-1.medium.com/max/2000/1*m4w4fCu8-Rc7JweZ68XYew.png)*bash_profile*

Next run the below command in terminal

    source ~/.bash_profile

After that in Android Studio, open the AVD Manager. It is in the top right corner and will open the Your Virtual Devices pop-up. Inside it click the run button.

![Your Virtual Devices](https://cdn-images-1.medium.com/max/2880/1*-SwDRqzWlKVpGnkWXGmyVQ.png)*Your Virtual Devices*

It will open your Android emulator.

![Emulator](https://cdn-images-1.medium.com/max/2000/1*Jddstswd1O4bva8gmFa_OA.png)*Emulator*

Now, start any of your completed React-native project by npm start. If you don’t have any yet, create one using my previous blog to create a Restaurant Search React-native app [here](https://medium.com/@nabendu82/restaurant-search-app-with-react-native-using-zomato-api-11faa7380b89).

Click on Run on Android device/emulator and it will try to open it. First time it will also install expo app on the Android simulator.

![Android emulator](https://cdn-images-1.medium.com/max/2880/1*IjGwzeQBRzxPrtnj8fu8Ow.png)*Android emulator*

If successful, you will see our restaurant app running on Android Simulator.

![Restaurant app](https://cdn-images-1.medium.com/max/2000/1*UvYiywlMEZTQS4cwF7boWw.png)*Restaurant app*

Hope you liked this setup blog. See you soon :)


*[This post is also available on DEV.](https://dev.to/nabendu82/android-emulator-setup-for-expo-on-mac-4n1j)*


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
