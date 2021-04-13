import React, { useState } from "react";
import './App.css';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
import Software from "./components/Software/software";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from "./components/Authentication/signup";
import Users from "./components/Users/AdminUsers/users";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import SideBar from "./components/SidebarMenu/sidebar";
import Dashboard from "./components/Dashboard/dashboard";
import EditSoftware from "./components/Software/editSoftware";
import Header from "./components/Header/header";
import Customer from "./components/Customer/customer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/core";
import Project from "./components/Project/project";
import Counter from "./components/Counter";

Amplify.configure(awsconfig)

function App() {
  const count = useSelector((state) => state.counter.count);


  const [loading, setLoading] = useState(false);
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

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
      Analytics.record({ name: `visited Connect Smart` });
    }, 4000)
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
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
                    <h1>{count}</h1>
                    <Dashboard />
                  </Route>
                  <Route path="/software">
                    <Software />
                  </Route>
                  <Route exact path="/users">
                    <Users />
                  </Route>
                  <Route exact path="/customers">
                    <Customer />
                  </Route>
                  <Route exact path="/projects">
                    <Project />
                  </Route>
                  <Route exact path="/counter">
                    <Counter />
                  </Route>
                  <Route exact path="/editSoftware/:id/:name" component={EditSoftware}>
                  
                  </Route>
                </Switch> 
              </div>
            }
          </div>
      </Router>
  )  : (
  <div className="container">
    <SignUp />
  </div>
  );


}

export default App;
