---
title: Interview Preparation — Object Oriented JavaScript-1
date: '2019-09-09T14:12:27.982Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--oUoVeTxd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--rrtL4S4d--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/jyfm4yxd4b8to7w0dq32.jpeg
comments_count: 0
positive_reactions_count: 36
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/interview-preparation-object-oriented-javascript-1-b114f2c32493
template: post
---
Welcome to part-10 of the series and the first part in Object Oriented JavaScript questions.

In this part we will learn Object Oriented JavaScript the old way, which is a bit more complex because of it’s syntax. The latest ES6 classes are nothing but synthetic sugar, which uses these concepts only below the hood. But it is one of the important topics of interviews where they ask for OOPs knowledge.

**Question 60-** *What are Constructor functions in JavaScript*?
**Answer-**Constructor functions are special functions used to create instance of it. It is the JavaScript equivalent of Classes in other programming languages like C++ and Java.

Let’s start with creating a simple function using object to create employee objects.

    function createEmpObj(fName, lName, gender, desig) {
      var newObj = {};
      newObj.firstName = fName;
      newObj.lastName = lName;
      newObj.gender = gender;
      newObj.designation = desig;
      return newObj;  
    }

    var emp1 = createEmpObj("Parag", "Khandar", "M", "Project Manager");
> Now consider the line **var newObj = {};** and **return newObj;**They will be same in every function which we create. So, JS gave us a special type of function known as **Constructor function** to create them.

We will refactor the above to use **Constructor function**. Look at the below code.

    function CreateEmpObj(fName, lName, gender, desig) {
      //var this;
      this.firstName = fName;
      this.lastName = lName;
      this.gender = gender;
      this.designation = desig;
      //return this;
    }

    var emp2 = new CreateEmpObj("Shikha", "Biswas", "F", "Developer");

We are adding the keyword **new** to create the object. It basically takes care of the creation and returning of the newObj. But gives this a new name **this**.
Note, that we don’t need to put those two line in our code and automatically put by JS engine.

**Question 61-** *How to make variables private in Constructor functions in JavaScript*?
**Answer-**Let us first consider the below code for normal Constructor function. Here we can directly access the variable “color” by *redCar.color.*Now, this might be not desirable at many places and in Traditional languages solved by the having “private” variables in class and then having “Getters” and “Setters” to access them.

    let Car = function(color) {
      this.color = color;
    };

    let redCar = new Car('red');

    console.log(redCar.color); //red

Now, we implement the same in JavaScript using Closures. We have two closure functions **setColor** and **getColor** which are basically “setters” and “getters”. Now, the variable **_color** is private and cannot be accessed outside the function by *blueCar._color* and we can access it only by *blueCar.getColor()*

    let PrivateCar = function(_color) {
     this.setColor = function(color) {
       _color = color;
      };
      
      this.getColor = function() {
       return _color;
      } 
    }

    let blueCar = new PrivateCar();
    blueCar.setColor('blue');
    console.log(blueCar._color);  //undefined
    console.log(blueCar.getColor()); //blue

You can find the JSFiddle for the above [here](https://jsfiddle.net/nabendu/u98tf2hb/).

**Question 62-** *What are Prototypes and how do we use them in JavaScript*?
**Answer-**In JavaScript as you know everything is a Object. So whenever we create an function, there is a one object which is created. but actually there is another object which is created which is known as the Prototype object. 
Now to access the Prototype object we have a reference on the function object also known as prototype.

![The Prototype](https://cdn-images-1.medium.com/max/3948/1*h9nQExQntFiqFiwvQXxbPQ.png)*The Prototype*

When we create an instance of the function with the **new keyword** interesting things happens. It create something known as **__proto__**. This is created by the JavaScript engine for every function call using the new keyword.

![new Keyword effects](https://cdn-images-1.medium.com/max/3864/1*_UPUngmrIx2d4KdIqXvYtA.png)*new Keyword effects*

Now, lets look how to create an function using prototype and the benefit of it. The below code have two function haveFun and drinkCoffee. The function haveFun is an normal function inside the Constructor function. The function drinkCoffee is created outside and added to the Prototype Object using it’s reference prototype.

    function Employee(name) {
      this.name = name;
      this.haveFun = function() {
        console.log('Play badminton');
      };
    }

    Employee.prototype.drinkCoffee = function() {
      console.log('coffee break')
    }

    let emp1 = new Employee('Nabendu');
    let emp2 = new Employee('Shikha');

    console.log(emp1.haveFun()); //Play badminton
    console.log(emp1.drinkCoffee()); //coffee break

Both the function seems to be doing the same thing, then what’s the benefit. The benefit of declaring function using prototype is that it’s crated once in the Prototype object. So, now whenever we create a new instance of the Constructor function the function is not created again. As in the below screenshot, you can see that **emp1** and **emp2** both have **name** and **haveFun**. But the **drinkCoffee** is inside the **__proto__**, which is a reference to Prototype object.

![Benefit of Prototype](https://cdn-images-1.medium.com/max/5752/1*kUYbY3EROsYN9MbPRM0y0w.png)*Benefit of Prototype*

For more details on Objects & Prototypes, go through my post [here](https://medium.com/@nabendu82/ydkjs-objects-and-prototypes-part3-c89383dd5d3f).

**Question 63-** *Explain Object.create() in JavaScript*?
**Answer- **Every object is created from the global Object in JavaScript. If we look at it in console, it have many properties and create been one of it.

![global Object in JavaScript](https://cdn-images-1.medium.com/max/5760/1*kUTOvBqTV0iqe_oGDKQl4w.png)*global Object in JavaScript*
> The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

Consider the below example, where we can create a new object from the existing object and can also add new properties to it or modify an existing property.

    const person = {
      isCoder: false,
      printIntroduction: function () {
        console.log(
`My name is ${this.name}. Am I coder? ${this.isCoder}`
);
      }
    };
    const me = Object.create(person);
    me.name = "Nabendu"; 
    me.isCoder = true; 
    me.printIntroduction();
    // Output: "My name is Nabendu. Am I coder? true"

Now, let see a practical use of *Object.create* in **Inheritance**. In below example we have an **Employee** function, which have two functions in it’s Prototype. Then we have another function **SalesEmployee** and then set it’s Prototype to Employee’s Prototype.
*SalesEmployee.prototype = Object.create(Employee.prototype);*

    const Employee = function() {
    }

    Employee.prototype =  {
      setName(_name) {
        this.name = _name
      },
      getName() {
        return this.name;    
      }
    }

    const SalesEmployee = function () {
      
    }

    SalesEmployee.prototype = Object.create(Employee.prototype);

    let emp1 = new SalesEmployee();

    console.dir(emp1);
    console.log(emp1 instanceof SalesEmployee); //true
    console.log(emp1 instanceof Employee); //true
    console.log(emp1 instanceof Object); //true

    emp1.setName('Shikha');
    console.log(emp1.getName()); //Shikha

We then create an instance of the **SalesEmployee** as **emp1** variable. It have all functions of **Employee** function and can also use it.

![Output of above](https://cdn-images-1.medium.com/max/5760/1*Z1o5sxMmGbhDRjRw5HWGmQ.png)*Output of above*

**Question 64-** *Explain Prototype chain in JavaScript using Object.create()*?
**Answer-**Prototype chain can be explained through below example. Here we have three functions *Car, ToyCar and ToyTransformer*. Each have there own version of *print*().

*We are inheriting from Car to ToyCar by setting ToyCar’s prototype to be Car’s prototype and then inhering from ToyCar to ToyTransformer by setting ToyTransformer’s prototype to be ToyCar’s prototype.*

Then we have three instances of *Car, ToyCar and ToyTransformer*. On calling the print(), we get the respective console log.

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

Now, let remove ToyTransformer’s print() method and then if we call print() on it’s instance bumbleBee, we get result from ToyCar’s print().

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

    const ToyTransformer = function() {};

    // Set ToyCar's prototype to be Car's prototype
    ToyTransformer.prototype = Object.create(ToyCar.prototype);

    const bumbleBee = new ToyTransformer();

    console.log(bumbleBee.print()); //This is a ToyCar

If we further remove ToyCar’s print() method and then if we call print() on it’s instance bumbleBee, we get result from Car’s print().

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

    const ToyTransformer = function() {};

    // Set ToyCar's prototype to be Car's prototype
    ToyTransformer.prototype = Object.create(ToyCar.prototype);

    const bumbleBee = new ToyTransformer();

    console.log(bumbleBee.print()); //This is a Car

So, if you call an method on a Child and the method is not there, it will check in it’s Parent and if not there then will check in Parent’s parent.

**Question 65-** *Explain how Inheritance works in constructor Functions *?
**Answer-**To understand inheritance using constructor function, we will see an example containing a Mammal parent function and Bat child function. Also, make the Bat’s Prototype have a reference of Mammal’s Prototype using Object.create. Bat’s Prototype will have all methods of Mammal’s Prototype

    let Mammal = function(legs) {
      this.legs = legs;
    };

    Mammal.prototype = {
      walk() {
        return 'walking!';
      }, sleep() {
        return 'sleeping';
      }
    };

    let Bat = function(legs, isVegetarian) {
      Mammal.call(this, legs);
      this.isVegetarian = isVegetarian;
    }

    
    Bat.prototype = Object.create(Mammal.prototype);

Now, let’s look into “Bat” in the console. As you can see it contains “Mammal” sleep and walk function in it’s __proto__.

![Bat in console](https://cdn-images-1.medium.com/max/5760/1*Ifz3xoSqd9p1vQTyni3OSQ.png)*Bat in console*

But we have a major problem that the statement “*Bat.prototype = Object.create(Mammal.prototype);*” wipes out any Bat’s Prototype function and also it’s constructor. 
We didn’t declared any Bat’s Prototype function, but the constructor was wiped.

So, we solve it by below code. It is using **Bat.prototype.constructor = Bat;** to set the constructor back in “Bat”. 
Also, we are declaring Bat’s Prototype function after “*Bat.prototype = Object.create(Mammal.prototype);*”

    ...
    ...
    Bat.prototype = Object.create(Mammal.prototype);

    Bat.prototype.constructor = Bat;

    Bat.prototype.fly = function() {
      return 'Flying!';
    }

    console.dir(Bat);

![Problem solved](https://cdn-images-1.medium.com/max/5760/1*MsgnHbLyH4iwxEUAIaHhSQ.png)*Problem solved*

Let’s now complete the code and create two instances of “Bat” as **fruitBat** and **bugBat**. Both can access functions walk, sleep and fly.

    let Mammal = function(legs) {
      this.legs = legs;
    };

    Mammal.prototype = {
      walk() {
        return 'walking!';
      }, sleep() {
        return 'sleeping';
      }
    };

    let Bat = function(legs, isVegetarian) {
      Mammal.call(this, legs);
      this.isVegetarian = isVegetarian;
    }

    Bat.prototype = Object.create(Mammal.prototype);

    Bat.prototype.constructor = Bat;

    Bat.prototype.fly = function() {
      return 'Flying!';
    }

    let fruitBat = new Bat(4, true);
    let bugBat = new Bat(2, false);

    console.log(fruitBat.walk()); // walking!
    console.log(bugBat.sleep());  // sleeping
    console.log(bugBat.fly());    // Flying!

**Question 66-** *Explain Object.setPrototypeOf() Method*?
**Answer-**The method Object.setPrototypeOf() was introduced in ES6 for top level “Object”. 
This method takes one objects method and made it available to other object.

![Object.setPrototypeOf() Method](https://cdn-images-1.medium.com/max/5760/1*0yDg4xzd4HD8Wqr0fSnKHw.png)*Object.setPrototypeOf() Method*

It is also helpful in implementing Inheritance using Object literals instead of constructor functions(see Question 65).

We have two object’s in below code — mammal and bat. Then to use mammal’s method in bat we used **Object.setPrototypeOf(bat, mammal);** .

Also, notice that we are updating the walk() inside “bat” and also calling mammal’s walk by **super.walk()**

    let mammal =  {
      walk() {
        return 'walking!';
      }
    };

    let bat = {
      fly() {
        return 'Flying!';    
      },
      walk() {
        return 
`${super.walk()} and eating`
;
      }
    }

    Object.setPrototypeOf(bat, mammal);
    console.log(bat.fly()); //Flying!
    console.log(bat.walk()); //walking! and eating

This concludes the part-10 of the series and first part of Object Oriented JavaScript questions.

*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-object-oriented-javascript-1-9m9)*


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
