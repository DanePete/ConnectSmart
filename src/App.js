import React, { useState, useEffect } from "react";
import './App.css';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import AddItem from "./components/Software/add";
import List from "./components/Software/list";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import {listSoftwares} from './graphql/queries';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from "./components/Software/Authentication/signup";
import Users from "./components/users";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'; 


Amplify.configure(awsconfig)

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [data, setData] = useState([]);
  const store = createStore(() => [], {}, applyMiddleware());

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
      console.log(dataList);
      setData(dataList);
      toast.success("Retrieved Data Successfully");
    } catch(error) {
      toast.error('Error in retrieving Data')
    }
  } 

  return authState === AuthState.SignedIn && user ? (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ToastContainer />
          <NavBar />  
          <AddItem fetchData={fetchData}/>
          <Switch>
            <Route exact path="/">
              <List data={data} />
            </Route>
            <Route path="/create">
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
