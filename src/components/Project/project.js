
import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import AddItem from "./addProject"
import List from "./projectTable";
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import {listCustomers, listProjects} from '../../graphql/queries';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Project = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const returnedData = await API.graphql(graphqlOperation(listProjects, {limit: 100}));
      const dataList = returnedData.data.listProjects.items;
      setData(dataList);
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
  
  export default Project;