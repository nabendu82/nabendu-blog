---
title: Interview Preparation — ES6 questions-2
date: '2019-09-09T11:15:28.978Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--2rrpnF5A--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--nleENo9m--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/l8cblx8awd60b41qmp93.jpeg
comments_count: 0
positive_reactions_count: 8
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/interview-preparation-es6-questions-2-6be50af8696f
template: post
---
Welcome to part-6 of the series. We will continue with our ES6 questions here. 

**Question 34-** *Explain classes in ES6?*
**Answer-**Constructor function and ES6 classes are both same. The ES6 classes are nothing but synthetic sugar for constructor function and internally behaves exactly the same.

Consider the below example of Constructor function.

![Constructor function](https://cdn-images-1.medium.com/max/4000/1*6xlXzb5jsXesKMgOEupF9g.png)*Constructor function*

The same can be written with ES6 classes with constructor, but it is exactly the same.

![ES6 classes](https://cdn-images-1.medium.com/max/4000/1*CM20bv8PEa80lxdOMF70WQ.png)*ES6 classes*

**Question 35-** *Explain Sub-classes and inheritance in ES6?*
**Answer-**The concept of Sub-classes and inheritance is like that in other languages like Java and C++.

Let’s consider the below example. We have a Parent class “Mammal” and a Sub-class “Bat” which is inheriting from it. Notice, that we have use the “extends” keyword. 
Now to use the “legs” and “name” variable in “Bat” we use the “super()” method. Also, notice that we can use update “walk()”, and add additional functionalities.

    class Mammal {
      constructor(_legs, _name="Nabendu") {
        this.legs = _legs;
        this.name = _name;    
      }
      walk() {
        return 
`${this.name} is walking`
;
      }
    }

    class Bat extends Mammal {
        constructor(_legs, _name, _isVegetarian) {
          super(_legs, _name);
          this.isVegetarian = _isVegetarian;
      }
      fly() {
        return 
`${this.name} is flying`
;
      }
      walk() {
        let eatable = this.isVegetarian ? 'carrot' : 'bug';
        return 
`${super.walk()} with a ${eatable}`
;
      }
    }

    let fruitBat = new Bat(4,'Bond', true);
    console.log(fruitBat.walk()); //Bond is walking with a carrot

    let meatBat = new Bat(2, undefined, false);
    console.log(meatBat.walk()); //Nabendu is walking with a bug

**Question 36-** *Explain iterators in JavaScript?*
**Answer-**Recently JavaScript introduced **[Symbol.iterator]** property in data types. This indicates whether a data structure is iterable or not. This includes array, strings, Map, Sets and NodeList. Objects doesn’t have a **[Symbol.iterator]** property.

If we check the **__proto__** of an array, we can find the **[Symbol.iterator]**property.

![Iterable array](https://cdn-images-1.medium.com/max/4000/1*BZM2ej_tnboWHRYLkjJ9Vg.png)*Iterable array*

But it is not the case with Objects as it is not iterable.

![Non-iterable Objects](https://cdn-images-1.medium.com/max/4000/1*DRcC_-_UnGjFjSk_zzi0tQ.png)*Non-iterable Objects*

Now, **iterator** are created using the “Symbol.iterator” and can be used to iterate over all data structures which have **[Symbol.iterator]** property.

Let consider the below example. Here we create an iterator by the syntax at line 3. Now we can iterate over the array using “iterator.next()”. Each run gives and Object which have the “value” and “done”, which specifies whether there is an element. Notice, after the fifth run we get the “value” as **undefined** and “done” as **true**.

![iterator example](https://cdn-images-1.medium.com/max/5760/1*KYSoxrDfS4OIWX3XoMuOJQ.png)*iterator example*

**Question 37-** *Explain Generators in JavaScript?*
**Answer-**Generator are special type of functions, which generates somethings when we iterate over it using iterator. They are different from array as they don’t have values in advance, but generates them on request.

Let’s look at the below example. The generator function have a special syntax with “*”. Also, inside the generator we have “yield” statements. Each “next()”, goes to the next yield statement.

![Generator Example](https://cdn-images-1.medium.com/max/5760/1*3xPDe-qK7CZFmzjSviIDlQ.png)*Generator Example*

The above example doesn’t shows any advantages of generator and it is same as iterating through an array. But let’s look at next example, where we have a infinite while loop inside an generator.

First look at this normal function. If we run it, it will cause an infinite loop and crash your browser.

    //Normal Function
    function normalInfinite() {
      let i = 0;
      while(true) {   
        console.log(i);
        i++;
      }
    }

    normalInfinite();

But the same type of function with generator doesn’t produce an infinite loop. It pauses every time yield is called and will generator the next value of “i” every-time “next()” is called.

![Benefit of Generator](https://cdn-images-1.medium.com/max/5760/1*QnbUYUFGTZhULFBMfv1hVg.png)*Benefit of Generator*

**Question 38-** *Explain async await in JavaScript?*
**Answer-**Async await are basically promises under the hood. But they have made the code for promises very easier to implement. If promises had simplified the code for callbacks, then async await have simplified the code for promises.

Let’s first check a nested promise example. Here we have three functions which return promises- *cleanRoom, removeGarbage and winIcecream*. Now, when the cleanRoom function is run and resolve is returned from the promise, then the immediate .then block will be run . In the .then we are returning the next removeGarbage and in it’s .then we are returning the winIcecream. We are passing the message from one function to other, so it will be appended.

    let cleanRoom = function() {
      return new Promise(function(resolve, reject) {
         resolve('Cleaned the room,');
      });
    };

    let removeGarbage = function(message) {
      return new Promise(function(resolve, reject) {
        resolve(message + ' removed Garbage,');
      });
    };

    let winIcecream = function(message) {
      return new Promise(function(resolve, reject) {
        resolve( message + ' won Icecream');
      });
    };

    cleanRoom().then(function(result){
                         return removeGarbage(result);
                        }).then(function(result){
                         return winIcecream(result);
                        }).then(function(result){
                         console.log(result + ' All Finished');
                        })
    //Cleaned the room, removed Garbage, won Icecream All Finished

We will refactored the code with async await. Here, instead of three functions we have one function *cleaningTheRoom*, which have a keyword “async” infront of it. It means that the function will have await statement(s). In the “await” we can have the value returned by a Promise stored in a variable. This type of code is much more cleaner then promise.

    const cleaningTheRoom = async() => {
      const cleanRoom = new Promise((resolve, reject) => { resolve('Cleaned the room,');});
      const removeGarbage = new Promise((resolve, reject) => { resolve('removed Garbage,');});
      const winIcecream = new Promise((resolve, reject) => { resolve(' won Icecream');});
      
      let roomCleaned = await cleanRoom;
      console.log(roomCleaned);
      
      let garbageRemoved = await removeGarbage;
      console.log(garbageRemoved);
      
      let icecreamWon = await winIcecream;
      console.log(icecreamWon);
      
      
    }

    cleaningTheRoom().then(() => console.log('All Finished '));

    //Cleaned the room, removed Garbage, won Icecream All Finished

The same can be further reduced with the help of Promise.all, which goes to the next line only if all Promises are resolved. We are also using array destructuring here.

    const cleaningTheRoom = async() => {
      const cleanRoom = new Promise((resolve, reject) => { resolve('Cleaned the room,');});
      const removeGarbage = new Promise((resolve, reject) => { resolve('removed Garbage,');});
      const winIcecream = new Promise((resolve, reject) => { resolve(' won Icecream');});  
      
      let [roomCleaned, garbageRemoved, icecreamWon] = await Promise.all([cleanRoom, removeGarbage, winIcecream]);
      console.log(
`${roomCleaned} ${garbageRemoved} ${icecreamWon}`
)
      
      
    }

    cleaningTheRoom().then(() => console.log(' All Finished '));
    //Cleaned the room, removed Garbage, won Icecream All Finished

Now, we do error handling in a different way in async await from promises. Note, that in promises we can have a “.catch” block to catch error due to reject of promise.

In async await we wrap the awaits in try-catch block.

    const cleaningTheRoom = async() => {
      const cleanRoom = new Promise((resolve, reject) => { reject('Room not cleaned,');});
      const removeGarbage = new Promise((resolve, reject) => { resolve('removed Garbage,');});
      const winIcecream = new Promise((resolve, reject) => { resolve(' won Icecream');});
      
      try {
          let roomCleaned = await cleanRoom;
          console.log(roomCleaned);
      
          let garbageRemoved = await removeGarbage;
          console.log(garbageRemoved);
      
          let icecreamWon = await winIcecream;
          console.log(icecreamWon);
        
      } catch(e) {
        console.log('Error in a promise ');
      }

    }
    cleaningTheRoom().then(() => console.log('All Finished '));

    //Error in a promise All Finished

This concludes the part-6 of the series and ES6 questions.

*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-es6-questions-2-3lb3)*


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
