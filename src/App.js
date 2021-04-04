import React, { useState } from "react";
import './App.css';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifyAuthenticator, AmplifySignIn, AmplifySignUp} from '@aws-amplify/ui-react';
import AddItem from "./components/add";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import {listSoftwares} from './graphql/queries';
import {Paper} from '@material-ui/core';
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
      const data = await API.graphql(graphqlOperation(listSoftwares));
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
        <Button onClick={() => fetchData()}>rwar</Button>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <th>Title</th>
            <th>Owner</th>
            <th colSpan="2"></th>
          </thead>
          <tbody>
          {data.map(data => {
            return (
              <tr>
                <td>{data.title}</td>
                <td>{data.owner}</td>
                <td><Button variant="info">Edit</Button></td>
                <td><Button variant="danger">Delete</Button></td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    </Router>
  )  : (
    <div className="container">
      <SignUp />
    </div>
  );


}

export default App;
