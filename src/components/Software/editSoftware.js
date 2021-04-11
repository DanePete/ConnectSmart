
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";


const EditSoftware = (props) => {
let { id, name } = useParams();

  return (
    <div>
        <h1>Edit Software{name}</h1>
        <h5>This softwares Id is: {id}</h5>
    </div>
  );
};
  
  export default EditSoftware;