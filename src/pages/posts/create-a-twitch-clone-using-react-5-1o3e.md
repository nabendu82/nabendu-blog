---
title: Create a twitch clone using React -5
date: '2019-09-16T05:12:21.563Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--4RDWBE5L--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--eZnPEfJW--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/lnjqxcu2iw4px5owpldy.jpeg
comments_count: 0
positive_reactions_count: 7
tags: []
canonical_url: 'https://medium.com/@nabendu82/create-a-twitch-clone-using-react-5-9e76fa488965'
template: post
---
Welcome to Part-5 of the series. Let’s start where we left. We would like to associate users, to our stream so that we can add a Delete and Edit button for the logged in user, of that stream.

Open the **index.js** file in *src -> actions* folder and add the userId in createStream().

```
    export const createStream = formValues => async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', {...formValues, userId});
        dispatch({ type: CREATE_STREAM, payload: response.data })
    }
```

Now, move to [http://localhost:3000/streams/create](http://localhost:3000/streams/create) and create a new stream.

![New stream with userId](https://cdn-images-1.medium.com/max/2876/1*KTok2OS9ima1ulGg3Clq-Q.png)*New stream with userId*

Now, we will show Delete and Edit button for the user who created the stream. So, head over to **StreamList.js** and update the mapStateToProps to include the current user id(currUserId).
 Next, we create a new function **renderAdmin()**, which we call from inside renderList(). Here, we first check whether our stream user is equal to the user we received from redux state. 
If they are same we display two buttons.

```
    import React from 'react';
    import { connect } from 'react-redux';
    import { fetchStreams } from '../../actions';
    import './StreamList.css';
    
    class StreamList extends React.Component {
      componentDidMount() {
        this.props.fetchStreams();
      }
    
      renderAdmin(stream) {
        if(stream.userId === this.props.currUserId) {
          return (
            <div>
              <button className="editBtn">Edit</button>
              <button className="deleteBtn">Delete</button>
            </div>
          )
        }
      }
    
      renderList() {
        return this.props.streams.map(stream => {
          return (
            <div className="item" key={stream.id}>
              <div className="content">{stream.title}</div>
              <div className="description">{stream.description}</div>
              {this.renderAdmin(stream)}
              <hr />
            </div>
          )
        })
      }
    
      render() {
        return (
          <div>
            <h2 className="header">Streams</h2>
            <div className="list">{this.renderList()}</div>
          </div>
        )
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        streams: Object.values(state.streams),
        currUserId: state.auth.userId
      };
    }
    
    export default connect(mapStateToProps, { fetchStreams })(StreamList);
```

Next, we also add some CSS to these buttons in **StreamList.css**

```
    .editBtn,.deleteBtn {
        box-sizing: border-box;
        position: relative;
        margin: 0.2em;
        padding: 0 15px 0 15px;
        border: none;
        text-align: center;
        line-height: 34px;
        white-space: nowrap;
        border-radius: 0.2em;
        font-size: 16px;
        color: black;
        background: burlywood;
    }
    
    .deleteBtn {
        background: # DD4B39;
        color:white;
    }
    
      .editBtn:hover,
      .deleteBtn:hover {
        background: # E74B37;
        cursor: pointer;
      }
```

Now, in [http://localhost:3000/](http://localhost:3000/) we can see these two button only for our latest stream which have a userId.

![Beautiful Buttons](https://cdn-images-1.medium.com/max/2880/1*unubQqA9RmXxTlhIdbNv6Q.png)*Beautiful Buttons*

Next, we will create a “Create Stream” button on our homepage. Now, open **StreamList.js** and add a new method. It will contain a Link tag, on click of which we will go to the create form page.

```
    import React from 'react';
    import { connect } from 'react-redux';
    import { Link } from 'react-router-dom';
    import { fetchStreams } from '../../actions';
    import './StreamList.css';
    
    class StreamList extends React.Component {
      componentDidMount() {
        this.props.fetchStreams();
      }
    
    …
    …
      renderCreate() {
        if(this.props.isSignedIn) {
          return (
            <div className="editBtn createBtn">
              <Link to="/streams/create">Create Stream</Link>
            </div>
          )
        }
      }
    
      render() {
        return (
          <div>
            <h2 className="header">Streams</h2>
            <div className="list">{this.renderList()}</div>
            {this.renderCreate()}
          </div>
        )
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        streams: Object.values(state.streams),
        currUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
      };
    }
    
    export default connect(mapStateToProps, { fetchStreams })(StreamList);

Next, we also add some CSS to this Link button in **StreamList.css**

    .createBtn{
          width:20%;
      }
    
      .createBtn>a{
        color: black;
        text-decoration: none;
     }
```

![The Create Stream button](https://cdn-images-1.medium.com/max/2880/1*iuWDJDMJJU32WPETryx5vw.png)*The Create Stream button*

Now, whenever we create a new stream in [http://localhost:3000/streams/create](http://localhost:3000/streams/create) we should move the user to the home page and show that new stream.

We will create our own history object, instead of depending on react router. So, create a new file **history.js** in the **src** folder.

```
    import { createBrowserHistory } from 'history';
    
    export default createBrowserHistory();
```

Now, we will change our App.js to use this new history object. We changed our **BrowserRouter** to **Router**.

```
    import React from 'react';
    import { Router, Route } from 'react-router-dom';
    import StreamCreate from './streams/StreamCreate';
    import StreamEdit from './streams/StreamEdit';
    import StreamDelete from './streams/StreamDelete';
    import StreamList from './streams/StreamList';
    import StreamShow from './streams/StreamShow';
    import Header from './Header';
    import history from '../history';
    
    const App = () => {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/create" exact component={StreamCreate} />
                        <Route path="/streams/edit" exact component={StreamEdit} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                        <Route path="/streams/show" exact component={StreamShow} />
                    </div>
                </Router>
            </div>
        );
    }
    
    export default App;
```

Next, open the **index.js** file in *src -> actions* folder. Import the history at the top and inside 
`createStream(), add histoy.push(‘/’).`
 So, the moment the stream creation is dispatched, we move back to the home page.

```
    import history from '../history';
    …
    …
    
    export const createStream = formValues => async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', {...formValues, userId});
        dispatch({ type: CREATE_STREAM, payload: response.data })
        history.push('/');
    }
    
    …
    …
```

Next, we will add Edit functionality to our App. This will allow user to edit an Stream. Now, open **StreamList.js** and change the Edit button in 
`renderAdmin()`
 to a Link tag.

```
    renderAdmin(stream) {
        if(stream.userId === this.props.currUserId) {
          return (
            <div>
              <Link to={`
/streams/edit/${stream.id}
`} className="editBtn linkBtn">Edit</Link>
              <button className="deleteBtn">Delete</button>
            </div>
          )
        }
      }
```

Also, add some CSS in **StreamList.css**

```
    .linkBtn{
        color: black;
        text-decoration: none;
        padding: 0.6rem;
     }
```

Next, in App.js we modify the route for Edit.

```
    const App = () => {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/create" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                        <Route path="/streams/show" exact component={StreamShow} />
                    </div>
                </Router>
            </div>
        );
    }
```

Now, when you click on the “Edit” button, it will navigate to the Edit component.

![The StreamEdit component](https://cdn-images-1.medium.com/max/2880/1*84PvlK-qXZgG-jFN3cpNWw.png)*The StreamEdit component*

Now, it’s time to work on our **StreamEdit.js** file. We basically changed it like the **StreamList** component and getting the list of all Streams from the global redux state. But, we want only the content of that steam, which the user selected.

So, we are making user of *this.props.match.params.id*

```
    import React from 'react';
    import { connect } from 'react-redux';
    import { fetchStream } from '../../actions';
    
    class StreamEdit extends React.Component {
      componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
      }
    
      render() {
        if(!this.props.stream){
          return <div>Loading...</div>
        }
    
        return (
          <div>
            {this.props.stream.title}
          </div>
        )
      }
    
    }
    
    const mapStateToProps = (state, ownProps) => {
      return { stream: state.streams[ownProps.match.params.id]}
    }
    
    export default connect(mapStateToProps, { fetchStream })(StreamEdit);
```

Now, click on and Edit button and it will show you the title of that stream.

![Title shown](https://cdn-images-1.medium.com/max/2880/1*5ulA0jaRnhlohLLRxCJzJQ.png)*Title shown*

Our **StreamEdit** component is going to be quite similar to **StreamCreate** component. So, we are going to refactor the code and make a common component and we will call it **StreamForm**.

Go ahead and create **StreamForm.js** inside streams directory. We are moving all the form logic from **StreamCreate** to here.

```
    import React, {Fragment} from 'react';
    import { Field, reduxForm } from 'redux-form';
    import './formStyles.css';
    
    class StreamForm extends React.Component {
      renderError(meta) {
        if(meta.touched && meta.error) {
          return (
            <div className="err__msg">{meta.error}</div>
          );
        }
      }
    
      renderInputBox = ({input, label, meta}) => {
        return (
          <Fragment>
            <label>{label}</label>
            <input {...input} />
            {this.renderError(meta)}
          </Fragment>
        )
      }
    
      onSubmitForm = (formValues) => {
        this.props.parentSubmit(formValues);
      }
    
      render() {
        return (
          <form onSubmit={this.props.handleSubmit(this.onSubmitForm)} className="ui__form">
            <Field name="title" label="Enter Title" component={this.renderInputBox} />
            <Field name="description" label="Enter Description" component={this.renderInputBox} />
            <button>Submit</button>
          </form>
        )
      }
    }
    
    const validate = (formValues) => {
      const errors = {};
      if(!formValues.title) {
        errors.title = "You must enter a title";
      }
      if(!formValues.description) {
        errors.description = "You must enter a description";
      }
    
      return errors;
    }
    
    export default reduxForm({form: 'streamForm', validate})(StreamForm);
```

Next we refactor the **StreamCreate.js** file to contain the connect logic only.

```
    import React from 'react';
    import { connect } from 'react-redux';
    import { createStream } from '../../actions';
    import StreamForm from './StreamForm';
    import './formStyles.css';
    
    class StreamCreate extends React.Component {
    
      onSubmit = (formValues) => {
        this.props.createStream(formValues);
      }
    
      render() {
        return (
         <div>
           <h3>Create a Stream</h3>
           <StreamForm parentSubmit={this.onSubmit} />
         </div>
        )
      }
    }
    
    export default connect(null, { createStream })(StreamCreate);
```

After, this refactor create a new stream and check whether it works.

Now, we refactor the **StreamEdit.js** file, to use this **StreamForm** component. One of the main difference from StreamCreate is that we pass a set of **initialValues** to StreamForm. This **initialValues** is a concept of Redux Form, where we can pass any initial values to the form and it will display it.

In **initialValues** we are passing an Object containing the title and the description.

```
    import React from 'react';
    import { connect } from 'react-redux';
    import { fetchStream, editStream } from '../../actions';
    import StreamForm from './StreamForm';
    import './formStyles.css';
    
    class StreamEdit extends React.Component {
      componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
      }
    
      onSubmit = (formValues) => {
        console.log(formValues);
      }
    
      render() {
        if (!this.props.stream) {
          return <div>Loading...</div>
        }
    
        return (
          <div>
            <h3>Edit a Stream</h3>
            <StreamForm initialValues={{title: this.props.stream.title, description: this.props.stream.description }} parentSubmit={this.onSubmit} />
          </div>
        )
      }
    
    }
    
    const mapStateToProps = (state, ownProps) => {
      return { stream: state.streams[ownProps.match.params.id] }
    }
    
    export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
```

A tiny style addition to our **formStyles.css**

```
    h3{
        text-align: center;
      }
```

Now, edit a Stream and you will see it’s content.

![Editing a stream](https://cdn-images-1.medium.com/max/2880/1*TC0Ayg2FUtWuc3ytNG7aiw.png)*Editing a stream*

Next, let’s update our **onSubmit()** in **StreamEdit.js **, to save our changes to the backend. So, we call editStream action creator with stream id and the formValues.

```
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
      }
```

We also do a minor change in **index.js** file in *src -> actions* folder. We are changing the path to home url, after a dispatch is done and we changed the put request to patch.

```
    export const editStream = (id, formValues) => async dispatch => {
        const response = await streams.patch(`
/streams/${id}
`, formValues);
        dispatch({ type: EDIT_STREAM, payload: response.data });
        history.push('/');
    }
```

So, go ahead and edit a form and submit. If everything is ok, you will get back to the home page with the changes.

This concludes part-5 of the series. You can find code till this point [here](https://github.com/nabendu82/streams).


*[This post is also available on DEV.](https://dev.to/nabendu82/create-a-twitch-clone-using-react-5-1o3e)*


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
