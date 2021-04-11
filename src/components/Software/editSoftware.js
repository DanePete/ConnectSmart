
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    useHistory,
    useParams
  } from "react-router-dom";


const EditSoftware = (props) => {
let { id, name } = useParams();
let history = useHistory();

  return (
    <div>
        <button onClick={() => history.goBack()}>Back</button>
        <h1>Edit Software{name}</h1>
        <h5>This softwares Id is: {id}</h5>
    </div>
  );
};
  
  export default EditSoftware;