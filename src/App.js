import React, { useState } from "react";
import './App.css';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifyAuthenticator, AmplifySignIn, AmplifySignUp} from '@aws-amplify/ui-react';
import AddItem from "./components/add";
import FetchData from "./components/fetchData";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import {listSoftwares} from './graphql/queries';
import { Button, Table } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Create from "./components/create";
import SignUp from "./components/signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Amplify.configure(awsconfig)

function App() {

  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [data, setData] = useState([]);

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);
  

  const fetchData = async () => {
    try {
      // const filter = { limit: true};
      const data = await API.graphql(graphqlOperation(listSoftwares, {limit: 100}));
      const dataList = data.data.listSoftwares.items;
      setData(dataList);
      toast.success("Retrieved Data Successfully");
    } catch(error) {
      toast.error('Error in retrieving Data')
    }
  }

  return authState === AuthState.SignedIn && user ? (
    <Router>
      <div className="App">
        <ToastContainer />
        <NavBar />  
        <AddItem/>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        <FetchData />
      </div>
    </Router>
  )  : (
    <div className="container">
      <SignUp />
    </div>
  );


}

export default App;
