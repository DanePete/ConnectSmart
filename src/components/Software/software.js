
import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import AddItem from "./addSoftware"
import List from "./softwareTable";
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./components/navbar";
import {listSoftwares} from '../../graphql/queries';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import SignUp from "./components/Authentication/signup";
import {deleteSoftware} from "../../graphql/mutations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Software = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = async (id) => {
    try {
      const data = { id: id};
      await API.graphql(graphqlOperation(deleteSoftware, { input: data }));
      toast.success('Successfully Deleted Item');
      fetchData();
    } catch(error) {
        toast.error('error deleting item');
    }
  }
  
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

    return (
        <div>
            <AddItem fetchData={fetchData}/>
            <List fetchData={fetchData} data={data}/>
        </div>
    );
};
  
  export default Software;