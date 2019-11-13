---
title: Interview Preparation — React & Redux-3
date: '2019-09-09T14:02:38.573Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--qQHRJiSN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--veAxPsHr--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/xw8bhicyqjgmfwyuyc4c.jpeg
comments_count: 0
positive_reactions_count: 11
tags: []
canonical_url: 'https://medium.com/@nabendu82/interview-preparation-react-redux-3-373032d23120'
template: post
---
Welcome to part-9 of the series and third part in React & Redux questions.

**Question 53-** *How to pass data between sibling components using React router?*
**Answer-**We can pass data between React sibling components using React Router using **history.push** and **match.params**.

Let look into the code. We have a Parent component **App.js**. We have two Child Components **HomePage**and **AboutPage**. Everything is inside a Router from React-router Route. We also have a route for /about/{params}. This is where we will pass the data.

```
    class App extends Component {

    render() {
        return (
          <Router>
            <div className="App">
            <ul>
              <li>
                <NavLink to="/"  activeStyle={{ color:'green' }}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about"  activeStyle={{ color:'green' }}>About</NavLink>
              </li>

    </ul>
                  <Route path="/about/:aboutId" component={AboutPage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/" component={HomePage} />
            </div>
          </Router>
        );
      }
    }

    export default App;
```

The **HomePage** is a simple functional component, which have a button. On clicking the button we are using **props.history.push(‘/about/’ + data)** , which is used to programatically navigate to **/about/data**

```
    export default function HomePage(props) {
       const handleClick = (data) => {
        props.history.push('/about/' + data);
       }

    return (
        <div>
          <button onClick={() => handleClick('Nabendu')}>To About</button>
        </div>
      )
    }
```

The **AboutPage** is also a simple functional component, which gets the passed data by **props.match.params.aboutId**

```
    export default function AboutPage(props) {
      if(!props.match.params.aboutId) {
          return <div>No Data Yet</div>
      }
      
      return (
        <div>
          {`
Data from HomePage ${**props.match.params.aboutId**}
`}
        </div>
      )
    }
```

The Page after clicking on button in HomePage looks like below.

![Data “Nabendu” is passed](https://cdn-images-1.medium.com/max/5760/1*P7Hy0W2M0JimCYH80FSduA.png)*Data “Nabendu” is passed*

The GitHub repo for the same can be found [here](https://github.com/nabendu82/react-router).

**Question 54-** *What is the difference between 
`this.state.name=”Nabendu”`
 and 
`this.setState({name: “Nabendu”})`
 ?*
**Answer-**First of all setting the state directly by *this.state.name=”Nabendu” *is not recommended in React. In React we should never mutate state directly instead use **setState** to change the state.

One more drawback of setting state directly is that React’s lifecycle methods — shouldComponentUpdate(), componentWillUpdate(), componentDidUpdate() and render()- depend on state transitions being called with setState().

**Question 55-** *Explain the new feature of React Memo in React v16.6?*
**Answer-**The new feature of React Memo are used to solve the problem which we get if the state is not updating in this.setState, but still all components are re-rendered.
To solve this problem we use two solutions. One is to check and compare state in **shouldComponentUpdate**and if they are same, we don’t re-render components. The other solution is to use **PureComponents**. See **question 51** for details. But both of them can’t be used with functional components.

Let’s look at the problem again. Here we have a **FunctionalComp**, which get same state passed every 3 sec.

```
    import React, { Component } from "react";
    import FunctionalComp from "./components/functionalComp";

    import "./App.css";

    class App extends Component {
      state = {
        val: 1
      };

    componentDidMount() {
        setInterval(() => {
          this.setState({ val: 1 });
        }, 3000);
      }
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <FunctionalComp val={this.state.val} />
            </header>
          </div>
        );
      }
    }

    export default App;
```

The **FunctionalComp** is below.

```
    import React from "react";

    export default (props) => {
      console.log("val =", props.val);
      return <div>{props.val}</div>;
    };
```

So, if we run it we get value of 1 every 3 second printed like below.

![val=1 every 3 seconds](https://cdn-images-1.medium.com/max/5756/1*mEiuroXsmS_Hi-J7Q_qprQ.png)*val=1 every 3 seconds*

We can solve it by wrapping the component in **React.memo**.

```
    import React from "react";

    export default React.memo(props => {
      console.log("val =", props.val);
      return <div>{props.val}</div>;
    });
```

Now the output is just one 1 and after that as every time the state of it is set to one, so no more renders.

![Only one render](https://cdn-images-1.medium.com/max/5760/1*qWVwiXLP2FXIHZTQwV8N-g.png)*Only one render*

You can find the Github repo [here](https://github.com/nabendu82/react-memo).

**Question 56-** *Explain the new feature of Lazy loading and code splitting in React v16.6*?
**Answer-**Lazy loading is the new feature introduced in React v16.6, which allows for some Components to load later then other components. This way we can load the components which are fast like text earlier and components which loads images a bit later.

Consider the below code for **App.js**. In it there are two Components **ContentComponent** and **myComp**. One have some paragraph containing *lorem ipsum* and other have an image to load from *unsplash*. 
Now, we are lazy loading **myComp** as it have an image to load. Note the special way to import it and also we need to wrap the component in **Suspense**. Now, Suspense will contain the fallback Component which will be shown while **myComp** gets loaded. 
The other component **ContentComponent** will load instantly.

```
    //App.js
    import React, { Component, lazy, Suspense } from "react";
    import "./App.css";
    import ContentComponent from './components/ContentComponent';
    const MyComp = lazy(() => import("./components/myComp"));

    class App extends Component {
      render() {
        return (
          <div className="App">
            <header className="App-header">  
              <h1>Lazy Loading Demo</h1>        
              <Suspense fallback={<div>Loading.....</div>}>
                <MyComp />
              </Suspense>
              <ContentComponent />
            </header>
          </div>
        );
      }
    }

    export default App;

    //ContentComponent.js
    import React from 'react'

    export default function ContentComponent() {
      return (
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </div>
      )
    }

    //myComp.js
    import React from "react";

    export default () => {
      return <img src="[https://images.unsplash.com/photo-1517694712202-14dd9538aa97](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1650&q=60)" width="960" height="480" alt="coding" />;
    };
```

React is very fast and in localhost condition to see it, we have to emulate Slow speed. To do so open the console, and goto **Network** tab. Then click on **Online** and select **Slow 3G**.

![Slow down the internet](https://cdn-images-1.medium.com/max/5744/1*WyJf1q3wyzbWa7gztClnEQ.png)*Slow down the internet*

Now, when you refresh the local running app, you can see **Loading…..** coming.

![Loading… coming](https://cdn-images-1.medium.com/max/5760/1*7_o_2yRgrQtSHLWRp_LUWw.png)*Loading… coming*

You can find the GitHub repo [here](https://github.com/nabendu82/react-lzy).

**Question 57-** *Explain the flow in a React-Redux app*?
**Answer-**As on Redux site “*Redux is a predictable state container for JavaScript apps.*” Redux can be used separately, but it gained much popularity because it was able to solve the state problem in a React app. 
In React to pass data(or state) between component we use props to be passed from Parent to Children. If the data needs to be passed to Components 5 level deep then it have to just have to pass through 4 Components, which doesn’t require it. Passing data from Child to Parent is also a problem, and we need to use Callback function. This gets complicated soon in large application.

So, to solve this issue we maintain state, which is the main data of the application in a central location. It can be access by any Components which ask for it.

Let see the complete flow.

**The Container** is a file that corresponds directly to a single component. It have two functions called ‘*mapDispatchToProps*’ and ‘*mapStateToProps*’. 
As in the code below, when the Component loads we have a function call to *this.showPopGraphs()*;
It will go to ‘*mapDispatchToProps*’, which dispatches it to the action creator.

```
    import { connect } from 'react-redux';
    ...
    ...
    class MiddleAge extends Component {
        constructor(props) {
            super(props);
            this.state = {
                indPieData : [],
                indPopTotal: '',
                ...
            }
            this.showPopGraphs();
        }

    showPopGraphs() {
            this.props.init(currYear);
        }

    render() {
            return (
    ...
    ...
    )
    }

    const mapStateToProps = ({ dataReducer }) => ({
        indPopData: dataReducer.indPopData,
    
    });

    const mapDispatchToProps = dispatch => ({
        init: (currYear) => {
            dispatch(populationAction.getIndPopData(currYear));
    
        }
    });

    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(MiddleAge);
```

**The Action Creator.**In this file, you will write the functions that dispatch an action. It perform some action, like an API call using axios. When we get the response back from it, we will dispatch an Object with “type” and “data” as *{ type: GET_INDIA_DATA, indPopData: response.data }
*Now this will be heard by only one type of function: the reducer.

```
    export const getIndPopData = (currYear) => dispatch => {
        return axios.get(`
[http://api.population.io:80/1.0/population/${currYear}/India/
`).then(response](http://api.population.io:80/1.0/population/${currYear}/India/`
).then(response) => {
          dispatch({ type: GET_INDIA_DATA, indPopData: response.data });
        });
    };

```
**The Reducer** hears an action , and can now generate a new state based on what the action wants it to do. Note the the state never actually *changes* in Redux, but instead the reducer generates a new state which is a copy of the old state. 
In the code below we don’t mutate the state but create a new state by Object destructuring.
```

    const initialState = {
        indPopData: [],

    };

    const dataReducer = (state = initialState, action) => {
        let newState;
        switch (action.type) {
          case types.GET_INDIA_DATA:
            newState = { ...state, indPopData: action.indPopData };
            break;
          default:
            newState = state;
        }
        return newState;
      };

```
**Back to Container** the result is received by “mapStateToProps”. It can be accessed as a props ie “this.props.indPopData” in this case. Here, we are also data massaging the data in componentWillReceiveProps and storing it in local state variables “*indPieData”* and “*indPopTotal*”
After that it is rendered in the component using “this.state.indPopTotal” and “this.state.indPieData”
```

    ...
    componentWillReceiveProps(nextProps) {
            if (this.props.indPopData !== nextProps.indPopData) {
                this.setState({
                    indPieData: nextProps.indPopData.map(item => {return {name: item.age, value:item.total}})),
                    indPopTotal: nextProps.indPopData.map(item => {return {name: item.age, value:item.total}});
            }
    }

    ...
        render() {
            return (
                <Fragment>
    
                  {this.state.indPopTotal && <p style={totalText}> India - {this.state.indPopTotal} </p>}
                  {this.state.indPieData && <PopPieChart popPieData={this.state.indPieData} />}
    
                </Fragment>
            )
        }

    const mapStateToProps = ({ dataReducer }) => ({
        indPopData: dataReducer.indPopData,
        ...
    });

```
The GitHub repo for the above code example is [here](https://github.com/nabendu82/react-meetup-demo).

**Question 58-** What is the use of middleware Redux thunk*?
**Answer-**Redux thunk is a middleware which sits between action creator and reducer in the React-Redux flow. It is very useful when we do asynchronous API calls with fetch or axios, which returns a Promise and we then dispatch it to reducer.

Redux thunk mainly works behind the scene. We have use some boiler-plate to use it.
```

    //App.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Routes from './routes';
    import store from './store';
    import { Provider } from 'react-redux';

    ReactDOM.render(
        <Provider store={ store }>
            <Routes />
        </Provider>,
      document.getElementById('root')
    );

    //store.js
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import rootReducer from '../reducer';

    const store = createStore(rootReducer, applyMiddleware(thunk));

    export default store;

```
In **Question 57** for React-Redux flow, in action creator we call an API end point with axios. It is a network request and will take some milliseconds or more depending on the connection.
Now, thunk middleware sort of wait for that call, which is a Promise to completed. Once we get the response, which contains the data then only it dispatches it to reducer.
```

    export const getIndPopData = (currYear) => dispatch => {
        return axios.get(
`[http://api.population.io:80/1.0/population/${currYear}/India/`
).then(response](http://api.population.io:80/1.0/population/${currYear}/India/
`).then(response) => {
          dispatch({ type: GET_INDIA_DATA, indPopData: response.data });
        });
    };
```

So, Redux thunk is required in Projects where we do API calls to some endpoint.

The GitHub repo for this is [here](https://github.com/nabendu82/react-meetup-demo).

**Question 59-** *What are Pure Functions and how they are used in reducers*?
**Answer- **A Pure function is a function which :
* Given the same input, will always return the same output.
* Produces no side effects.

Consider the below example:

```
    Math.random(); // => 0.4011148700956255
    Math.random(); // => 0.8533405303023756
    Math.random(); // => 0.3550692005082965
```

Even though we didn’t pass any arguments into any of the function calls, they all produced different output, meaning that *
`Math.random()`
* is **not pure**.

Now consider the below **add** function doesn’t alter “a” or “b”, always returns the same output for the same input.
So, it’s a “pure” function

```
    const add = (a, b) => a + b //pure function
```

The second condition is that it should not produce any side effects. It basically means it should not change any external state.
Consider, the below code. The function addNum changes the values of external “a”, so it’s not pure function.

```
    var a = 10;
    function addNum(num) {
      a = 20;
      return num + a;
    }

    console.log(addNum(5)); //25
    console.log(a); //20
```

> Reducers are Pure Functions as they don’t mutate the state. It generates a new state which is a copy of the old state.


```
    const initialState = {
        indPopData: [],

    };

    const dataReducer = (state = initialState, action) => {
        let newState;
        switch (action.type) {
          case types.GET_INDIA_DATA:
            newState = { ...state, indPopData: action.indPopData };
            break;
          default:
            newState = state;
        }
        return newState;
      };
```

This concludes the part-9 of the series and last part of React & Redux questions.

*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-react-redux-3-4jdj)*


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
