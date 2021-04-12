import React, { useState } from "react";
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Software from "./components/Software/software";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from "./components/Authentication/signup";
import Users from "./components/Users/AdminUsers/users";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'; 
import SideBar from "./components/SidebarMenu/sidebar";
import Dashboard from "./components/Dashboard/dashboard";
import EditSoftware from "./components/Software/editSoftware";
import Header from "./components/Header/header";
import Company from "./components/Company/company";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/core";



Amplify.configure(awsconfig)

function App() {
  const [loading, setLoading] = useState(false);
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const store = createStore(() => [], {}, applyMiddleware());

  const override = css`
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
  `;

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000)
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
            <SideBar />
            { loading ? <ClimbingBoxLoader css={override} size={50} color={"#ff9900"} loading={loading} /> : 
              <div className="main">
                <Header />
                {/* <AmplifyS3Image imgKey="Sketch.png" />
                <AmplifyS3ImagePicker /> */}
                <Switch>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route path="/software">
                    <Software />
                  </Route>
                  <Route exact path="/users">
                    <Users />
                  </Route>
                  <Route exact path="/companies">
                    <Company />
                  </Route>
                  <Route exact path="/editSoftware/:id/:name" component={EditSoftware}>
                  
                  </Route>
                </Switch> 
              </div>
            }
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
