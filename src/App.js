import logo from './logo.svg';
import React from "react";
import './App.css';
import Button from '@material-ui/core/Button';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, AmplifyAuthenticator} from '@aws-amplify/ui-react';
import AddItem from "./components/add";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

Amplify.configure(awsconfig)

function App() {

  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <AddItem />
      <AmplifySignOut />
      {/* <ListItems /> */}
    </div>
  ) : (
    <div className="container">
      <div className="signIn">
        <AmplifyAuthenticator />
      </div>
    </div>
  );


}

export default App;
