import React, { useState } from "react";
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifyAuthenticator, AmplifySignIn, AmplifySignUp} from '@aws-amplify/ui-react';
import AddItem from "./components/add";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import {listSoftwares} from './graphql/queries';
import {Paper} from '@material-ui/core';
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Create from "./components/create";
import SignUp from "./components/signup";


Amplify.configure(awsconfig)


function App() {

  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [data, setData] = useState([]);

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      // fetchData();
    });
  }, []);

  const fetchData = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listSoftwares));
      console.log(data);
      const dataList = data.data.listSoftwares.items;
      console.log('list', dataList);
      setData(dataList)
    } catch(error) {
      console.log('STICK YOUR HEAD IN DOO DOO');
    }
  }

  return authState === AuthState.SignedIn && user ? (
    <Router>
      <div className="App">
        <NavBar />  
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        <AddItem />
        <Button onClick={() => fetchData()}>rwar</Button>
        <div className="dataList">
          {data.map(data => {
            return (
              <Paper varient="outlined" elevation={2}>
                <div className="dataCard">
                  <div>
                    <div className="DataName">{data.title}</div>
                  </div>
                </div>
              </Paper>
            )
          })}
        </div>
      </div>
    </Router>
  )  : (
    <div className="container">
      <SignUp />
    </div>
  );


}

export default App;
