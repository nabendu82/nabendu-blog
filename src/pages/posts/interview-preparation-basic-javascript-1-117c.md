---
title: Interview Preparation — Basic JavaScript-1
date: '2019-09-09T10:02:48.597Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--i66VUGw9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--EFcTb2c6--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/zphivw4ayhemv1sie512.jpeg
comments_count: 1
positive_reactions_count: 122
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/interview-preparation-basic-javascript-1-3003b0ac3832
template: post
---
We all know that JavaScript interviews(especially FrontEnd interviews) can be pretty hard, because interviewer can ask question from old JS, new ES6 JS, DOM element manupulation, old CSS layout, new FlexBox and CSS Grid layout, algorithms and complecities, small coding problem, ReactJS and it’s lifecycle methods.

Now, the interviews are many different types and due to their nature and contains different type of questions. These rounds are mainly followed by small to medium companies and not applied to tech giants(FB, Google, Flipkart etc). They are broadly classified as below.
* **First round- Generally telephonic-** Starts with tell me about yourself, basic old JS questions about var, React and it’s lifecycle methods.
* **First round- Timebased online question-** Either a set of 30 basic JS, CSS question in 1 hour or 3 difficult questions in 1 hour.
* **First round- Skype interview- **Starts with tell me about yourself, followed by old JS questions and a small component or program in ReactJS/JavaScript.
* **First round- Small startups-** Give you a small addition to be done to their existing website.
* **Second round- Face to Face interview-** Again starts with tell me about yourself, followed by simple JS question on paper/whiteboard.
* **Third round- Face to Face with Architect-** Very tricky JavaScript Questions or to solve something on whiteboard.
* **Fourth round- Client round-** Only for Service company. Mostly small problems to be solved in jsfiddle by sharing screen over skype.
* **Fifth round- HR-** Mainly salary negotiations.

This series is based on my experience in giving and taking interview, and the input from many of my FrontEnd developer friends. Also, i have given example from the amazing interview series from [techsith](https://www.youtube.com/watch?v=oxoFVqetl1E&list=PL7pEw9n3GkoWn5TcqAdmSzXcvC3d_tfAh).

Let’s start with Basic JavaScript questions which is generally asked in First round and sometimes in second round also.

**Question 1-** *What is the difference between keyword let, const and var ?*
**Answer-** The variable var was since the beginning of JS but the variables let and const were introduced recently in ES6. 
var is *function scoped*, whereas let and const are *block scoped*.
We will understand difference between var and let first. Consider the below example. It is having an IIFE and inside it there is an if stement. The if statement creates a scope for let variable but var doesn’t have block scope so, it can be accessed outside it also.

    (function(){
      if(true){
        var v = 10;
        let l =20;    
      }
      console.log('v is ', v);
      console.log('l is ', l);
    })()

If we run the below we get the value of var but a reference error for let.

![reference error for let](https://cdn-images-1.medium.com/max/5760/1*EFqwTgVzhzun7BlLm7-WlA.png)*reference error for let*

We will understand the const now. It was created to declare constant variables in JavaScript. We cannot assign a new value to a variable after the initial declaration for primitive types like integers and strings, but can add values for non-primitive like arrays and objects.

Let’s see examples for it. Reassigning a const integer value gives reference error.

    (function(){
      const c = 12;
      c = 14;
      console.log('c is ', c);
    })()

    /*
    Exception: TypeError: invalid assignment to const 
`c'
    [@Scratchpad](http://twitter.com/Scratchpad)/1:3:3
    [@Scratchpad](http://twitter.com/Scratchpad)/1:1:2
    */

Reassigning a const string value gives reference error.

    (function(){
      const s = "coder";
      s= "developer"
      console.log('s is ', s);
    })()

    /*
    Exception: TypeError: invalid assignment to const `
s'
    [@Scratchpad](http://twitter.com/Scratchpad)/1:9:3
    [@Scratchpad](http://twitter.com/Scratchpad)/1:7:2
    */

Reassigning an array gives error.

    (function(){
      const arr = [1, 2, 3];
      arr = [3, 4, 5];  
      console.log('arr is ', arr);
    })()

    /*
    Exception: TypeError: invalid assignment to const `arr'
    [@Scratchpad](http://twitter.com/Scratchpad)/1:15:16
    [@Scratchpad](http://twitter.com/Scratchpad)/1:13:2
    */

But adding value to an array is possible.

    (function(){
      const arr = [1, 2, 3];
      arr.push(4);  
      console.log('arr is ', arr);
    })()

    //output - arr is [1, 2, 3, 4]

And also adding and changing values in objects are possible.

    (function(){
      const obj = {name: 'Nabendu', skill: 'JS'};
      obj.skill = 'React'; 
      obj.profession= 'Developer';
      console.log('obj is ', obj);
    })()

    //output is obj is { name: "Nabendu", skill: "React", profession: "Developer" }

**Question 2-** *What is the difference between == and === ?*
**Answer-**Both are comparision operator in JavaScript. The == does an type conversion before comparing, but === does strict comparision and no type conversion.

Consider the below for ==. The comparison between string 1 and numeric 1 produce **true**, because numeric 1 is converted to string before comparing.

    if('1' == 1) {
      console.log('They are equal')
    }

    //Output - They are equal

Now, consider the same example for ===. It will produce false because no type conversion is done.

    if('1' === 1) {
      console.log('They are equal')
    } else {
      console.log('They are not equal')  
    }

    //Output - They are not equal

**Question 3-** *What is the difference between null and undefined ?*
**Answer-**Both represents empty values. But the difference is when you define a variable and not assign a value JS assigns undefined to it. null is generally assigned by the users in cases where they want to clear some values.

    let a;
    console.log(a);

    //output - undefined

The other difference is **typeof(undefined) is undefined** but **typeof(null) is object**. It should be null but that a bug in JavaScript which is from early days.

**Question 3-** *What is prototypal inheritance ?*
**Answer-**Prototypal inheritence means, to create new capabilities using prototype. Let consider the below example. Here, we create a Car constructor function and then call it with new keyword. Now, the nabsCar and shikhaCar variables have their own instance of Car, but can have a common protoype function getModel()

    let Car = function(model) {
      this.model = model;
    }

    Car.prototype.getModel = function() {
      return this.model;
    }

    let nabsCar = new Car('maruti800');
    console.log(nabsCar.getModel()); //Output - maruti800

    let shikhaCar = new Car('hyndaiAccent');
    console.log(shikhaCar.getModel()); //Output - hyndaiAccent

**Note**: I have a detailed series on Object and Prototypes. You can find it [here](https://dev.to/nabendu82/ydkjs-objects-and-prototypes-part1-1jml).

This concludes part-1 of Basic JavaScript Interview questions.

*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-basic-javascript-1-117c)*


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
