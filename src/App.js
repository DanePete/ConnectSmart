import React, { useState, useEffect } from "react";
import './App.css';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import Software from "./components/Software/software";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from "./components/Authentication/signup";
import Users from "./components/Users/AdminUsers/users";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'; 
import {AmplifyS3Image, AmplifyS3ImagePicker} from "@aws-amplify/ui-react";
import { listener } from './components/Authentication/authhub';


Amplify.configure(awsconfig)

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [data, setData] = useState([]);
  const store = createStore(() => [], {}, applyMiddleware());

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <Provider store={store}>
      <Router>
        <listener />
        <div className="App">
          <ToastContainer />
          <NavBar />  
          {/* <AmplifyS3Image imgKey="Sketch.png" />
          <AmplifyS3ImagePicker /> */}
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/software">
              <Software />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
          </Switch> 
        </div>
      </Router>
    </Provider>
  )  : (
  <div className="container">
    <SignUp />
  </div>
  );


}

export default App;
