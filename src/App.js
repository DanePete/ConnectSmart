import React, { useState, useEffect } from "react";
import './App.css';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import AddItem from "./components/add";
import List from "./components/List";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import {listSoftwares} from './graphql/queries';
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
    fetchData();
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);


    //   const deleteItem = async (id) => {
    //     try {
    //         const data = { id: id};
    //         await API.graphql(graphqlOperation(deleteSoftware, { input: data }));
    //         toast.success('Successfully Deleted Item');
    //         fetchData();
    //     } catch(error) {
    //         toast.error('error deleting item');
    //     }
    // }

  const fetchData = async () => {
    try {
      const returnedData = await API.graphql(graphqlOperation(listSoftwares, {limit: 100}));
      const dataList = returnedData.data.listSoftwares.items;
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
        <AddItem fetchData={fetchData}/>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch> 
        <List data={data} />
      </div>
    </Router>
  )  : (
  <div className="container">
    <SignUp />
  </div>
  );


}

export default App;
