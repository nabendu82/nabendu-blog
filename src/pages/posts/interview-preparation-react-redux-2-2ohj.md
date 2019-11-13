---
title: Interview Preparation — React & Redux-2
date: '2019-09-09T13:20:12.956Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--P3Qaq3-X--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--q0bEKHbO--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/vhdncesjkyojeasbtf4c.jpeg
comments_count: 0
positive_reactions_count: 12
tags: []
canonical_url: 'https://medium.com/@nabendu82/interview-preparation-react-redux-2-813b03e041f9'
template: post
---
Welcome to part-8 of the series and second part in React & Redux questions.

**Question 48-** *Explain Fragments in React 16?*
**Answer-**React Fragments are a feature that was released in React 16.2 and it helps us to get rid of wrapper div.

Let consider the below React code. Here we have a code for Todo, which have an adjacent“h2” and a “ol” tag.

    render() {
        return (
            <h2>Todos:</h2>
            <ol>
            {this.state.items.map(item => (
              <li key={item.id}>
                <label>
                  <input type="checkbox" disabled readOnly checked={item.done} /> 
                  <span className={item.done ? "done" : ""}>{item.text}</span>
                </label>
              </li>
            ))}
            </ol>
        )
      }
    }

If we run the above code, we will get the familiar error.

    SyntaxError: Inline Babel script: Adjacent JSX elements must be wrapped in an enclosing tag (21:8)   19 |     return (   20 |         <h2>Todos:</h2> > 21 |         <ol>      |         ^   22 |         {this.state.items.map(item => (   23 |           <li key={item.id}>   24 |             <label>

To solve this problem, we generally wrap everything inside a <div> tag.

    render() {
        return (
        <div>
            <h2>Todos:</h2>
            <ol>
            {this.state.items.map(item => (
              <li key={item.id}>
                <label>
                  <input type="checkbox" disabled readOnly checked={item.done} /> 
                  <span className={item.done ? "done" : ""}>{item.text}</span>
                </label>
              </li>
            ))}
            </ol>
          </div>
        )
      }

Now, the unnecessary “div” creates more problem then it solves. It creates problem in codes where we use Flexbox or CSS Grid as “div” is an element in itself. In Flexbox or Grid every div will be considered as an flex item or grid item.
Now, we can use Fragments instead of <div>. They also don’t have any special meaning to browser, so the problem of Flexbox and Grid is also solved.

    render() {
        return (
        <React.Fragment>
            <h2>Todos:</h2>
            <ol>
            {this.state.items.map(item => (
              <li key={item.id}>
                <label>
                  <input type="checkbox" disabled readOnly checked={item.done} /> 
                  <span className={item.done ? "done" : ""}>{item.text}</span>
                </label>
              </li>
            ))}
            </ol>
          </React.Fragment>
        )
      }

We can also use only Fragment, if we import Fragment in the import statement.

    import React, { Component, Fragment } from 'react';

    ...

    render() {
        return (
        <Fragment>
            <h2>Todos:</h2>
            <ol>
            {this.state.items.map(item => (
              <li key={item.id}>
                <label>
                  <input type="checkbox" disabled readOnly checked={item.done} /> 
                  <span className={item.done ? "done" : ""}>{item.text}</span>
                </label>
              </li>
            ))}
            </ol>
          </Fragment>
        )
      }

You can check the JSFiddle below.

<iframe src="https://medium.com/media/a1cc9a587eecf7c7a254c76d1581dc5c" frameborder=0></iframe>

**Question 49-** *Explain new Context API in React 16?*
**Answer-**In a typical react application , data is passed top-down (parent to child) via props. But there are cases when props are needed by a component which is more then 2 level deep. In such a scenario, the middle components are just pass the props without using it. This issue is called prop drilling and generally solved by using state management like Redux.
But Redux is good for large application, but if our application is small or medium size it’s an overkill.

Let’s first look into the example using prop-drilling. We have a GrandFather component, which have a state called **lastName**. It is required by the Child component. But there is a Father component in between, so we just pass **lastName** through it.

         
    class GrandFather extends React.Component {
      state = {
        lastName: "Biswas"
      }
      
      render() {
        return <Father lastName={this.state.lastName} />
      }
    }

    const Father = ({ lastName }) => {
      return <Child lastName={lastName} />
    }

    const Child = ({ lastName }) => {
      return <p>{lastName}</p>
    }

We can refactor the above to use Context. Using Context means we don’t need to pass the lastName through the <Father /> component. Here first we create our Context **FamilyContext** by React.createContext()

    const FamilyContext = React.createContext({});

    class GrandFather extends React.Component {
      state = {
        lastName: "Biswas"
      };

    render() {
        return (
          <FamilyContext.Provider value={this.state.lastName}>
            <Father />
          </FamilyContext.Provider>
        );
      }
    }

    const Father = () => {
      return <Child />;
    };

    const Child = () => {
      return <FamilyContext.Consumer>**{context => <p>{context}</p>}</FamilyContext.Consumer>;
    };

    ReactDOM.render(<GrandFather />, document.querySelector("# app"))

Now, we have wrapped the <Father /> component with <FamilyContext.Provider /> because it contains <Child /> which is the component that needs access to the lastName prop. Notice that the Provider has a value prop. Pass in whatever state you’d like to share.

To have access to the lastName, we have also wrapped the <p> tag in the <FamilyContext.Consumer /> component so that it has access to the context.

You can check the JSFiddle below.

<iframe src="https://medium.com/media/6cf6503f0687dd75c3a7051522a9a322" frameborder=0></iframe>

**Question 50-** *Explain with example the working of input field in React?*
**Answer-**We will use the below simple example to, see how input field works in React. It is a bit different how input boxes works in plain html.

<iframe src="https://medium.com/media/c945c546f04c980f6444be1d0f422ba4" frameborder=0></iframe>

Here, the input field have an event handler **onChange**. It will run whenever some changes are detected in the text box. We have some other event handler also, like below.

![Event Handlers](https://cdn-images-1.medium.com/max/2000/1*tBlRHBOcphmLNCAbTjlZ7A.png)*Event Handlers*

In our code, it will fire the callback function **onInputChange**. Note, that the name of this function can be anything.

Also, notice that we have a state variable called val, which is set to empty string. Now inside the callback function **onInputChange**, we setState of val as *event.target.value*.

Now, whenever we use setState it re-renders the component. The input is told what it’s value is by *value={this.state.val}*
This is how input works in React and it can be summarize as below.

![](https://cdn-images-1.medium.com/max/2000/1*czba0PS1r77zrvddirP8Uw.png)

We have also created an button, on click of it will console log the current text in the input box. Below is the result.

![Button clicked](https://cdn-images-1.medium.com/max/2880/1*H7iDHnXUXTgjBHGEKR5dtw.png)*Button clicked*

**Question 51-** *Explain with example the working of form in React?*
**Answer-**We will use the below jsfiddle to understand, how form works in React. The input or any other field inside the form have a concept similar to what, we saw in Question 50.

<iframe src="https://medium.com/media/ad600f871b5fc94582e8d8d1e66fd798" frameborder=0></iframe>

Notice, that in the form tag we have **onSubmit** event handler. In our case, it will run when we hit enter on keyboard.

Inside the callback function **onFormSubmit**, we have *event.preventDefault()*. This method tell the browser not to run the default behavior of submitting a form.

In React we handle the form submission logic by ourselves only. We are just console logging in this example. We generally submit it to a backend server.

![Form Demo](https://cdn-images-1.medium.com/max/2880/1*4L7W8YQBwyuP5XGw_A-GEQ.png)*Form Demo*

**Question 52-** *How do we pass data between Children and Parent component in React?*
**Answer-**It is straight-forward to pass data between Parent component and Child component. We do it through the props system in React. But passing data in the opposite direction is a bit tricky.

We do it by using the concept of callback functions. Refer to the jsfiddle for the example.

<iframe src="https://medium.com/media/2e405d5334d3d71ec542c5d8009d45b7" frameborder=0></iframe>

Here, we have a parent component **App**, which renders a child component SearchComponent. The child component is same as the one , we saw in Question 51.

From the parent component, we are passing a props *userSubmit* which call a callback function *onSearchSubmit*, with a value.

Now, inside the child component *SearchComponent* when we submit the form we are using *this.props.userSubmit(this.state.val);*
So, we are passing the input text value as an argument to the prop *userSubmit*.

We will get the below output once we submit the form.

![Communication demo](https://cdn-images-1.medium.com/max/2880/1*N3tNEVPcA5Y5TjuqvV5mhw.png)*Communication demo*

This concludes the part-8 of the series and second part of React & Redux questions.

*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-react-redux-2-2ohj)*


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
