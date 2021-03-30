import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, AmplifyAuthenticator, AmplifySignUp} from '@aws-amplify/ui-react';
import AddItem from "./components/add";

Amplify.configure(awsconfig)

function App() {
  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="username"
        formFields={[
          {
            type: "email",
            label: "Enter your email",
            placeholder: "example@example.com",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "don't use a dumb password",
            required: true,
          },
          {
            type: "preferred_username",
            label: "Username",
            placeholder: "Enter something cool, don't want to look like a noob",
            required: true,
          },
        ]} 
      />
      <div className="App">
        <Button variant="contained" color="primary">
          <AmplifySignOut />
        </Button>

        {/* 
          * Display the Add Item component we created. 
        */}
        <AddItem />
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AmplifySignOut />
          <h2>My App Content</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
