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
    <div className="App">
      <NavBar />
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
  )  : (
    <div className="container">
      <div className="signIn">
        {/* <AmplifyAuthenticator /> */}

      <AmplifyAuthenticator usernameAlias="username">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "Custom email Label",
            placeholder: "custom email placeholder",
            required: true,
          },
          {
            type: "password",
            label: "Custom Password Label",
            placeholder: "custom password placeholder",
            required: true,
          },
          {
            type: "preferred_username",
            label: "Custom user Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },
          {
            type: "phone_number",
            label: "Custom phone Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },               
          {
          type: "name",
          label: "Custom name Label",
          placeholder: "custom Phone placeholder",
          required: false,
          },     
          {
          type: "picture",
          label: "Custom picture Label",
          placeholder: "custom Phone placeholder",
          required: false,
          },     
          {  
          type: "family_name",
          label: "Custom family name Label",
          placeholder: "custom Phone placeholder",
          required: false,
          },     
        ]} 
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
    </AmplifyAuthenticator>       
      </div>
    </div>
  );


}

export default App;
