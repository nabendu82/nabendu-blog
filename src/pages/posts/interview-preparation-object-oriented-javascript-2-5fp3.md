---
title: Interview Preparation — Object Oriented JavaScript-2
date: '2019-09-09T14:29:48.967Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--jxDopjn8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--UK5Iptj_--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/p5pvv23twlo7atpgdd8h.jpeg
comments_count: 0
positive_reactions_count: 9
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/interview-preparation-object-oriented-javascript-2-466734a999a8
template: post
---
Welcome to part-11 of the series and the second part in Object Oriented JavaScript questions.

**Question 67-** *Explain Object.assign() Method*?
**Answer-**The Object.assign() Method is used to copy one or more source objects to a target object.

In the below code, we are taking two object “o2” and “o3” and copying to “o1”. Notice that the Object “o3” is also changed.

    var o1 = { a: 1 };
    var o2 = { b: 2 };
    var o3 = { c: 3 };
    
    var obj = Object.assign(o1, o2, o3);
    console.log(obj); // { a: 1, b: 2, c: 3 }
    console.log(o1);  // { a: 1, b: 2, c: 3 }, target object is changed.

If you want to merge Objects, we pass an empty object in source. As objects contains unique keys, only one “a”, “b” and “c” will be there.

    var o1 = { a: 1, b: 1, c: 1 };
    var o2 = { b: 2, c: 2 };
    var o3 = { c: 3 };
    
    var obj = Object.assign({}, o1, o2, o3);
    console.log(obj); // { a: 1, b: 2, c: 3 }

If we consider the example in previous question(Question 66) and use **Object.assign** instead of **Object.setPrototypeOf** , we will notice that the “bat” walk() is overwritten by “mammal”.

    let mammal =  {
      walk() {
        return 'walking!';
      },
      sleep() {
        return 'sleeping';
      }
    };

    let bat = {
      fly() {
        return 'Flying!';    
      },
      walk() {
        return 'Bat is walking';
      }
    }

    Object.assign(bat, mammal);

    console.log(bat.walk()); //walking!

One of the use of Object.assign is in reducers in react-redux project. In reducers we cannot mutate the state, so we can take clone it using below.

    let newState = Object.assign({}, state};

**Question 68-** *Explain Function mixins in JavaScript*?
**Answer-**In the terms of programming, Mixins are these pieces of code that you can mix with other objects to extend their functionality.

By using mixins, you can compose objects with a desired functionality. This is very different from using inheritance, which is much rigid and doesn’t work most of the time when you want to create dynamic ever-changing models. 
For example, suppose there is a person who learns “jsSkill” first and become “jsDeveloper”. Then he learns “reactSkills” and become “reactDeveloper”. Then he learns “backendSkill” and become “fullStackDeveloper”.
This can be very easily done with mixins, which uses *Object.assign* to combine Objects or use the latest *Object Spreads*.

    const jsSkill = {
       knowsJS() {
        return true;
      }
    };

    const reactSkills = {
      knowsReact() {
        return true;
      } 
    };

    const backendSkill = {
      knowsNodeJS() {
        return true;
      } 
    };

    // Compose Objects
    const jsDeveloper = Object.assign({}, jsSkill);
    const reactDeveloper = Object.assign({}, jsSkill, reactSkills);
    const fullStackDeveloper = {...jsSkill, ...reactSkills, ...backendSkill};

    console.log(jsDeveloper.knowsJS());  //true
    console.log(reactDeveloper.knowsReact()); //true
    console.log(fullStackDeveloper.knowsNodeJS()); //true

To understand **Function mixins**, we have to understand factory functions first. In JavaScript, there are two ways to create objects, one by using either “Function constructor/classes” or “factory functions”. When you use regular functions to build objects, they are called factory functions.

    //Function constructor
    let Car = function(color) {
         this.color = color;
    }

    // New Object
    let redCar = new Car('red');

    // Factory Function
    let Car = function(color) {
      return Object.assign({}, {
        color: color
      });
    };
    
    // New Object
    let redCar = Car('red');

For creating **Function mixins**, we will use factory function with closures. Having an inner variable inside the factory function will maintain the state inside a closure. The state will be stored inside every function that is using the variable.

    // Factory Function with closures
    let Car = function(color) {
      let isMoving = false;
      return Object.assign({}, {
           color: color, 
           drive(){
        	  isMoving = true;
              return this;
           }, isMoving(){
        	  return isMoving;
         }
      });
    };
    
    // New Object
    let redCar = Car('red');
    
    console.log(redCar.drive().isMoving()); //true

Using a factory function with closures you can build **function mixins**. Each mixin would take an Object as a parameter and returns a new object that would take passed object and extend it with mixin’s functionality. 
Here is an example of building an object called **nabs** using two mixins **humanFactory** and **coderFactory**. **nabs** has characteristics of a human so he has an ability to walk, and can code also.

    // coder factory function
    const coderFactory = function(obj) {
      // inner variable
      let coding = false;

    // returns a new object
      return Object.assign({}, obj, {
        code() {
          coding = true;
          return this;
        }, isCoding() {
          return 
`${this.name} is ${(coding ? '' : 'not')} coding`
;
        }
      });
    };

    // human factory function
    const humanFactory = function(obj) {
      let walking = false;

    return Object.assign({}, obj, {
        walk() {
          walking = true;
          return this;
        }, isWalking() {
          return 
`${this.name} is ${(walking ? '' : 'not')} walking`
;
        }
      });
    };

    const nabenduBiswas = {
      name: 'Nabendu Biswas'
    };

    // compose an object
    const nabs = humanFactory(coderFactory(nabenduBiswas));

    // set the state
    nabs.code().walk();

    console.log(nabs.isWalking()); // prints: Nabendu Biswas is  walking
    console.log(nabs.isCoding()); // prints: Nabendu Biswas is  coding

**Question 69-** *Explain Static methods in JavaScript*?
**Answer-**Static methods are methods declared inside a class which belongs to the class, whereas the normal methods inside a class are instance methods which belongs to the instance of the class.

Static methods doesn’t use “this”, they are basically used as utility functions. As in the below example, we create static method inside class by adding static keyword in-front of it. Here, in the example we are using static method to compare two instances of class.

    class Car {
      constructor(color, price) {
        this.color = color;
        this.price = price;
      }
      
      static comparePrice(car1, car2) {
        return Math.abs(car1.price - car2.price);
      }
      
      getColor() {
        return this.color;
      }
    }

    const maruti800 = new Car('silver', 350000);
    const santro = new Car('red', 500000);

    console.log(maruti800.getColor()); //silver
    console.log(santro.getColor());  //red
    console.log(Car.comparePrice(santro, maruti800)); //150000

One of the recent use of static method is the new lifecycle method **static getDerivedStateFromProps()** introduced in React 16.

**Question 70-** *Explain JavaScript Decorators*?
**Answer-** In the simplest form, a decorator is simply a way of wrapping one piece of code with another — literally “decorating” it.
Decorators have become popular thanks to their use in Angular 2+(like @NgModule). In Angular, decorators are available thanks to TypeScript, but in JavaScript they’re currently a [stage 2 proposal](https://github.com/tc39/proposals# stage-2), meaning they should be part of a future update to the language.

Let’s first look at a example of decorator below. It have two decorators — **wheels** and **doors**. Notice the special “@” to use it in the *class Car*. The @wheels decorator is used to show the hard coded **noOfWheels** as 4. The @doors decorator is passing a variable.

    let wheels = function(target) {
      target.noOfWheels = 4;
    }

    let doors = function(number) {
     return function(target) {
       target.noOfDoors = number;
      }
    }

    [@wheels](http://twitter.com/wheels)
    [@doors](http://twitter.com/doors)(2)
    class Car {
    

    }

    console.log(
`Wheels - ${Car.noOfWheels}`
); //Wheels - 4
    console.log(
`Doors - ${Car.noOfDoors}`
); //Doors - 2

Let’s look at the full example now. We can see a real-life use of decorators. Here we have a **readOnly** decorator, which is used to make the function **getColor** readonly. In the jsfiddle below, we are over-writing, **getColor **outside the class. If we remove the @**readOnly** from **getColor**, the console log *‘I will over-ride’* will print.

<iframe src="https://medium.com/media/12dfb62e9c9b7b2f26791e94def3e15e" frameborder=0></iframe>

**Question 71-** *Explain Polymorphism in JavaScript*?
**Answer-**Polymorphism is an OOP concept and it literally means “many” “forms”. In traditional OOP languages it is implemented using function overloading but in JavaScript it achieved by using the same function in inheritance.

Consider the example in **Question 64**. We have three instances of *Car, ToyCar and ToyTransformer*. On calling the print(), we get the respective console log.

    // Car constructor
    const Car = function() {};

    // Set Car's prototype
    Car.prototype = {
      print() {
        return 'This is a Car';
      }
    };

    // ToyCar constructor
    const ToyCar = function() {};

    // Set ToyCar's prototype to be Car's prototype
    ToyCar.prototype = Object.create(Car.prototype);

    // Adding ToyCar's own print method
    ToyCar.prototype.print = function(){
     return 'This is a ToyCar';
    }

    //ToyTransformer constructor
    const ToyTransformer = function() {};

    // Set ToyTransformer's prototype to be ToyCar's prototype
    ToyTransformer.prototype = Object.create(ToyCar.prototype);

    // Adding ToyCar's own print method
    ToyTransformer.prototype.print = function(){
     return 'This is a ToyTransformer';
    };

    const toyota = new Car();
    const legoCar = new ToyCar();
    const bumbleBee = new ToyTransformer();

    console.log(toyota.print()); //This is a Car
    console.log(legoCar.print()); //This is a ToyCar
    console.log(bumbleBee.print()); //This is a ToyTransformer

This concludes the part-11 of the series and last part of Object Oriented JavaScript questions.


*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-object-oriented-javascript-2-5fp3)*


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
