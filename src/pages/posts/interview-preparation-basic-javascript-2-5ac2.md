---
title: Interview Preparation — Basic JavaScript-2
date: '2019-09-09T10:12:01.739Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--ABTLfTkQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--m7yyRn65--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/igj6s61l9jvzr46a80ld.jpeg
comments_count: 1
positive_reactions_count: 56
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/interview-preparation-basic-javascript-2-ad71d09eb0af
template: post
---
Welcome to part-2 of the series. Let’s start with where we left.

**Question 4-** *What is the difference between function declaration and function expression ?*
**Answer-**Function declaration is defining functions as in most languages, but function expression is assigning an anonymous function to an variable.

Consider the below example. We can call a function declaration even before defining it but same is not true for function expression and it will give reference error.

    funcD(); //Output - Function declaration
    funcE(); //Reference error

    function funcD() {
      console.log('Function declaration');
    }

    let funcE = function() {
      console.log('Function expression');  
    };

    /*
    Exception: ReferenceError: can't access lexical declaration 
`funcE' before initialization
    [@Scratchpad](http://twitter.com/Scratchpad)/1:2:1
    */

**Note**: The detailed explanation can be found in my blog for Scopes and Closures [here](https://dev.to/nabendu82/ydkjs-scopes-and-closures-part2-9ej).

**Question 5-** *Is JavaScript synchronous or asynchronous and what is event loop?*
**Answer-**JavaScript is a synchronous, single-threaded language. The asynchronous behaviour of JavaScript(setTimeout, callbacks, promises) is not a part of JavaScript itself and built on top of JavaScript language in browser and accessed through browser APIs.
> Now, the browser have a Call Stack, Browser API and Message Queue and the order of there processing is called event loop.

Consider the below code. It outputs A C B, even though B have a setTimeout of 0ms.

    function main(){
      console.log('A');
      setTimeout(
        function(){ console.log('B'); }
      ,0);
     console.log('C');
    }
    main();

    //Output
    // A
    // C
    // B

To know the same we have to see the inner working during execution. The main() is pushed into Call Stack, which then console logs A. Then it is popped out and the setTimeout is pushed into Call Stack. Now the setTimeout() uses Browser API, so it is pushed there and the console log C is pushed into Call Stack.
Even with the delay of 0ms the exec() for setTimeout have to go to the Message Queue.
After all the statements of main() is run and the Call Stack is empty, then only the exec() from Message Queue can be pushed to the Call Stack.

![inner working during execution](https://cdn-images-1.medium.com/max/4000/1*C2h8JNq3f3FfBcfs5umqiw.png)*inner working during execution*

This is how the whole Event Loop works inside a browser and async calls like setTimeout or any API call is executed.

**Note**: *This answer is heavily influenced by [Philip Roberts](http://latentflip.com/)’s talk on [JS Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ).*

**Question 6-** *What will be the output of the below?*

    console.log('A');
    setTimeout(
        function(){ console.log('B'); }
    ,0);
    console.log('C');

**Answer-**The output of the same will be A C B. setTimeout even with 0ms will be called last because of event loop concept as shown in Question 5.

**Question 7-** *What is a closure and how do we use it?*
**Answer-**Closures are basically a inner function storing the scope information of the variable stored in Outer function.

Consider the below code. The variable **b** have an scope in outer function ie from line 4 to line 10. So, at line 13 when we call the outer function, it can access the value of b, but at line 14 there is no outer function.

So, how does the innerFn() access the value of b. This is where the JS feature of Closures comes into play. 
*When the var inner is created at line 6, the JS engine not only stores the function object information but also it’s scope information. *So, it stores a scope of variable **b** inside the inner function object.
Now it doesn’t matter where you call inner, whether in this file or some third party file. It will always remember the value of a and b, as if a snapshot is been taken.

![Closures in play](https://cdn-images-1.medium.com/max/2574/1*kcjnRBznI0PqW5wel1RjOQ.png)*Closures in play*

**Note**: You can find detailed explanation about Closures in my article [here](https://dev.to/nabendu82/ydkjs-scopes-and-closures-part5-554p).

**Question 8-** *Explain “this” keyword in JavaScript?*
**Answer-**JavaScript “this” keyword simply means that if you are inside a scope or function or object, “this” means whichever scope/function/object you are in. We can have “this” in various context. Let’s go through them.

### “this” inside global scope

When we have this in global scope as in below example, it can also be referred with window.

![“this” inside global scope](https://cdn-images-1.medium.com/max/5760/1*Ihq38LBZRKRQv4y1QtRDdA.png)*“this” inside global scope*

### “this” inside a method

Let have a private Object **nabsRoom** and have a function **cleanTable**() in it. Now “this” inside the function refers to the table inside the Object nabsRoom.

![“this” inside a method](https://cdn-images-1.medium.com/max/5756/1*sbulk-LwyBAjTz9zPo8jDA.png)*“this” inside a method*

### “this” inside a function

Now if we have a function called cleanTable(), then “this” refers to window

![“this” inside a function](https://cdn-images-1.medium.com/max/5760/1*TpBI4a2DjuaDkQj5aZ2ayw.png)*“this” inside a function*

**Question 9-** *Explain “this” keyword in call method?*
**Answer-**call method is used for calling a function, with some Object and in such cases the “this” is for that Object. We can also pass some argument to it.

![*“this” keyword in call method*](https://cdn-images-1.medium.com/max/5760/1*kENdlsGg4HBff4iwD0w7uA.png)**“this” keyword in call method**

**Question 10-** *What are the different way to access “this” inside an inner function for below code?*

    const cleanTable = function(soap) {
      const innerFunc = function(_soap) {
        console.log(`
Cleaning ${this.table} with ${_soap}
`)      
      }
      innerFunc(soap);
    }

    let nabsRoom = {
      table: "nabs table"
    }

    cleanTable.call(nabsRoom, "Harpic"); 
    //Output - Cleaning undefined with Harpic

**Answer-**There are four solutions to access “this” inside the innerFunc().

### Solution 1

Use a “that” variable in cleanTable() for accessing “this” inside innerFunc(). Basically “that” is nothing but the outer “this”.

    const cleanTable = function(soap) {
      let that = this;
      const innerFunc = function(_soap) {    
        console.log(`
Cleaning ${that.table} with ${_soap}
`)      
      }
      innerFunc(soap);
    }

    let nabsRoom = {
      table: "nabs table"
    }

    cleanTable.call(nabsRoom, "Harpic");
    //Output - Cleaning nabs table with Harpic

### Solution 2

Use call method to use the outer “this” inside the innerFunc().

    const cleanTable = function(soap) {
      const innerFunc = function(_soap) {    
        console.log(`
Cleaning ${this.table} with ${_soap}
`)      
      }
      innerFunc.call(this, soap);
    }

    let nabsRoom = {
      table: "nabs table"
    }

    cleanTable.call(nabsRoom, "Harpic");
    //Output - Cleaning nabs table with Harpic

### Solution 3

Use bind method to use the outer “this” inside the innerFunc().

    const cleanTable = function(soap) {
      const innerFunc = function(_soap) {    
        console.log(`
Cleaning ${this.table} with ${_soap}
`)      
      }
      innerFunc.bind(this)(soap);
    }

    let nabsRoom = {
      table: "nabs table"
    }

    cleanTable.call(nabsRoom, "Harpic");
    //Output - Cleaning nabs table with Harpic

### Solution 4

Use arrow function in the innerFunc. Arrow functions have special meaning for “this” and it is that, it takes the value of “this” from the enclosing scope and is very useful in this case.

    const cleanTable = function(soap) {
      const innerFunc = (_soap) => {    
        console.log(`
Cleaning ${this.table} with ${_soap}`)      
      }
      innerFunc(soap);
    }

    let nabsRoom = {
      table: "nabs table"
    }

    cleanTable.call(nabsRoom, "Harpic");
    //Output - Cleaning nabs table with Harpic

**Question 11-** *Explain “this” keyword inside a constructor function or ES6 class?*
**Answer-**Constructor function and ES6 classes are both same. The ES6 classes are nothing but synthetic sugar for constructor function and internally behaves exactly the same.

“this” inside both of them is the instance which creates the variable with new keyword.

Consider the below example. Here “this” is *nabsRoom* or *shikhaRoom* inside cleanTable() depending on from which it is called.

![*“this” inside a constructor function*](https://cdn-images-1.medium.com/max/5760/1*scd13W_p5fbaMQsh2KSlBA.png)**“this” inside a constructor function**

The same can be written with ES6 classes with constructor, but it is exactly the same and “this” also means the same.

![*“this” inside a ES6 class*](https://cdn-images-1.medium.com/max/5760/1*hdaFBMSIZXHVE1f9c0aGaA.png)**“this” inside a ES6 class**

This concludes part-2 of Basic JavaScript Interview questions.

*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-basic-javascript-2-5ac2)*


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
