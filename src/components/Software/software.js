
import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import AddItem from "./addSoftware"
import List from "./softwareTable";
import { API, graphqlOperation } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import {listSoftwares} from '../../graphql/queries';
import {deleteSoftware} from "../../graphql/mutations";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  export const deleteItem = async (id) => {
    try {
      const data = { id: id};
      await API.graphql(graphqlOperation(deleteSoftware, { input: data }));
      toast.success('Successfully Deleted Item');
      // fetchData();
    } catch(error) {
        toast.error('error deleting item');
    }
  }

const Software = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

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
            <List data={data}/>
        </div>
    );
};
  
  export default Software;