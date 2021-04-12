
import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import AddItem from "./addCustomer"
import List from "./customerTable";
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import {listCustomers} from '../../graphql/queries';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Company = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const returnedData = await API.graphql(graphqlOperation(listCustomers, {limit: 100}));
      const dataList = returnedData.data.listCustomers.items;
      console.log(dataList);
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
  
  export default Company;