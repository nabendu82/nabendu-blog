---
title: Interview Preparation — React & Redux-1
date: '2019-09-09T13:12:22.043Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--GDxV9CHf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--QLVFsQHS--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/p2lrkw345tlue7thj9lj.jpeg
comments_count: 0
positive_reactions_count: 13
tags: []
canonical_url: 'https://medium.com/@nabendu82/interview-preparation-react-redux-1-2ac56f5bb64b'
template: post
---
Welcome to part-7 of the series. Most of the time companies asks to create a React/Redux project, or they will ask you to create a small React component on paper or on JSfiddle in skype interviews.

But then also, there are some questions which can be asked in the telephonic interviews. They generally comes after JavaScript questions.

**Question 39-** *Explain Virtual DOM in React?*
**Answer-**ReactJS doesn’t update the Real DOM directly but it updates the Virtual DOM. This causes a great performance benefit for ReactJS.

Virtual DOM is in-memory representation of Real DOM. It is a lightweight JavaScript Object which is copy of Real DOM.

Whenever setState() method is called, ReactJS creates the whole Virtual DOM from scratch. Creating a whole tree is very fast so it does not affect the performance.
> At any given time, ReactJS maintains two virtual DOM, one with the updated state Virtual DOM and other with the previous state Virtual DOM.

ReactJS using diff algorithm compares both the Virtual DOM to find the minimum number of steps to update the Real DOM.

**Question 40-** *Explain the initial cycle in React which happens during first render?*
**Answer-**Below is the first cycle which happens the first time. All the below mentioned methods runs only one time except “render()”. 
**1)** The “**constructor()**” is called first. You can set the initial state here.
**2)** Then the “**componentWillMount()**” will be called. It is quite similar to the constructor and also called once during initial render. You can do a AJAX call in it, if you are using a React-redux architecture. *It is not recommended to use this function and will be deprecated in React 17*.
**3)** Then the initial “**render()**” will be called. It will also render all the child of this component.
**4)** Then the function “**componentDidMount()**” will be called. This function will also be called once during the whole life-cycle. 
*This is the perfect candidate for performing any AJAX call, as the initial render has been done*.

![First render](https://cdn-images-1.medium.com/max/2964/1*n7rSqWwxsMCCu716DKs37g.png)*First render*

**Question 41-** *Explain lifecycle of component re-rendering due to re-rendering of parent component?*
**Answer-**This type of re-rendering happens when the parent component re-renders. It also happens if you are using a React-redux model and the AJAX call request have been completed and you received new props in mapStateToProps. 
**1)** The “**componentWillReceiveProps()**” will be called in each update life-cycle caused by changes in props. This function is ideal when we receive props back from redux in mapStateToProps. After that you can set the state are depending on props as calling this.setState here will not cause an extra render call. 
*It is not recommended to use this function and will be deprecated in React 17.*

    componentWillReceiveProps(*nextProps*) {
    if (*this*.props.indPopData !== nextProps.indPopData) {
    *this*.setState({
         indPopTotal: nextProps.indPopData.map(*item* => {return {name:     item.age, value:item.total}}))
    });
    }

**2)** The “**shouldComponentUpdate()**” lifecycle method is an optional component, which gives power to the developer to decide whether to render a component or not. It is mainly used to increase the performance of poor performing components.
This function will be called with next values of props, state and object. Developer can use those to verify that the change requires a re-render or not and return false to prevent the re-rendering from happening. In other case, you are expected to return true.
> If not used in project, then React internally gives the default value of **true** to it.

**3)** The next lifecycle method “**componentWillUpdate()**” . If the *shouldComponentUpdate*() returns true, we can use it to synchronise state to props. It can be used as a replacement of *componentWillReceiveProps()*. 
*It is not recommended to use this function and will be deprecated in React 17*.

**4)** Next the render() of the component an all child components will be done.

**5)** Then the “**componentDidUpdate()**” lifecycle method will be called. This method is called after render() is finished in each re-render cycle. This method will have access to *nextProps* like componentWillUpdateand componentWillReceiveProps and we can use it to do AJAX call.

![Re-rendering due to parent](https://cdn-images-1.medium.com/max/2492/1*x8ecfSS839eBzhao9drRHQ.png)*Re-rendering due to parent*

**Question 42-** *Explain lifecycle of react due to all to call to this.setState?*
**Answer-**The component in which this.setState is called, is re-rendered including it’s child components. Below is the diagram for the same.

![Re-rendering due to this.setState](https://cdn-images-1.medium.com/max/2964/1*DZ2DVeJbhTG2PAxHzVcjSg.png)*Re-rendering due to this.setState*

**Question 43-** *What is the new way to initialize state in React without constructor function?
***Answer-**Lets first consider an example with the old way to initialize state. We have a simple React code, to update the state on click of a button.

In the constructor we initialize the state variable count to 0.

    import React, { Component } from 'react';
    
    class App extends Component {
    constructor() {
        super();
        this.state = {
          count: 0
        }
      }
    
      setCount = () => {
        this.setState({
          count: this.state.count + 1
        })
      }
    
      render() {
        return (
          <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={this.setCount}>Click me</button>
          </div>
        )
      }
    
    }
    
    export default App;

Now, with the new format we can eliminate the constructor all together. We are just putting **state = { count: 0}** and it will do the same thing.

    import React, { Component } from 'react';
    
    class App extends Component {
     state = { count: 0}
    
      setCount = () => {
        this.setState({
          count: this.state.count + 1
        })
      }
    
      render() {
        return (
          <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={this.setCount}>Click me</button>
          </div>
        )
      }
    
    }
    
    export default App;

Internally, React still use the constructor mechanism and we can see it if we go to [babeljs](https://babeljs.io/) site, and check a simple version of above in editor.

![babel reveals it all](https://cdn-images-1.medium.com/max/2880/1*4OxLYXjfKbBT7_9OCqQgUg.png)*babel reveals it all*

**Question 44-** *Explain the Error boundaries in React 16.3?*
**Answer-** Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Updating state from these lifecycles lets you capture an unhandled JavaScript error in the below tree and display a fallback UI.

**static getDerivedStateFromError()**
This lifecycle is invoked after an error has been thrown by a component. It receives the error that was thrown as a parameter and should return a value to update state. 
*As it is called during the render phase so side-effects like this.setState are not allowed.*

**componentDidCatch()**
This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:

1. error - The error that was thrown.

1. info - An object with a componentStack key containing information about the component which threw the error.

*As it is called during the commit phase so side-effects like this.setState are allowed.*

Below is the example where we define a component called ErrorBoundary

    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, info) {
        logComponentStackToMyService(info.componentStack);
      }
    
      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children; 
      }
    }

After this we need to wrap any component with it and try will work as the classic try..catch block.

    <ErrorBoundary>
      <ProductCard />
    </ErrorBoundary>

**Question 45-** *How to use a library like jQuery in React, which interacts directly with DOM?*
**Answer-**Using a library like jQuery which interacts directly with DOM, is not recommended in React. But what if there is a plugin, which is only available in jQuery and no other alternative in ReactJS. In such cases we can use the below method.

We will attach a “ref” to the root DOM element. Inside componentDidMount, we will get a reference to it so we can pass it to the jQuery plugin.

To prevent React from touching the DOM after mounting, we will return an empty <div /> from the render() method. The <div /> element has no properties or children, so React has no reason to update it, leaving the jQuery plugin free to manage that part of the DOM:

    class JqueryPlugin extends React.Component {
      componentDidMount() {
        this.$el = $(this.el);
        this.$el.jQueryPlugin();
      }
    
      componentWillUnmount() {
        this.$el.jQueryPlugin('destroy');
      }
    
      render() {
        return <div ref={el => this.el = el} />;
      }
    }

**Question 46-** *Explain “refs” in React?*
**Answer-**Refs in React provides a way to access the React elements/DOM nodes created in “render()” method.

When parent components need to interact with children components, we use **props.**However, *in some cases we might need to modify a child without re-rendering it with new props*. That’s when we use refs.

We should minimise the use of refs in React project as it’s directly interact with DOM. We should use refs in following situations.

* Interaction with third party DOM interacting libraries like jQuery

* Triggering animations

* Managing focus, text selection

There are various ways to use “refs” but we will see the latest way to use “ref” which was introduced in React 16.3 and it is using React.createRef()

In the below example we have a simple input box, where we can input a value.Then, when the submit button is clicked, we’ll read this value and log it to the console.

    class CustomTextInput extends React.Component {
      constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
      }
      handleSubmit = e => {
        e.preventDefault();
    
        console.log(this.textInput.current.value);
      };
    
      render() {
        // tell React that we want to associate the <input> ref
        // with the 
`textInput`
 that we created in the constructor
        return (
          <div>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type="text" ref={this.textInput} />
              <button>Submit</button>
            </form>
          </div>
        );
      }
    }

<iframe src="https://medium.com/media/b9eec46fc708ba086d73ff49d396e10f" frameborder=0></iframe>

**Question 47-** *Explain the use of Webpack and Babel in ReactJS?*
**Answer- Webpack** is a module builder. It should be noted that webpack doesn’t runs during your page load, but it runs during your development.

Look at the below diagram from there website. It is self-explanatory on what webpack does. As shown on site, it takes your “js”, “sass” and other dependencies files and convert them to plain “js”, “css”, “jpg” and “png” files which the browser can understand.

When we create an app with **create-react-app**, webpack is included in it and because of it in React we are able to use different Components without worrying about the scope. And also our “scss”, “jsx” files getting converted into “css” and “js”.

![What webpack does?](https://cdn-images-1.medium.com/max/5760/1*ZLJLfGa7EyNXdxQ5NrDkAg.png)*What webpack does?*

**Babel** is a JavaScript compiler that converts edge JavaScript(ES6) into plain old ES5 JavaScript that can run in any browser (even the old ones).
In React world it is used to transform the JSX code into vanilla JavaScript. As per the Babel website, Here are the main things Babel can do for you:

* Transform syntax

* Polyfill features that are missing in your target environment .

* Source code transformations (codemods)

A simple example of what Babel does for arrow function.

    // Babel Input: ES2015 arrow function
    [1, 2, 3].map((n) => n + 1);
    
    // Babel Output: ES5 equivalent
    [1, 2, 3].map(function(n) {
      return n + 1;
    });

Below is how a React JSX line gets converted into React createElement.

![](https://cdn-images-1.medium.com/max/5760/1*r9COQzy2BOF8cATyRj9Wug.png)

This concludes the part-7 of the series and first part of React & Redux questions.

*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-react-redux-1-5i7)*


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
