
import React from "react";
import { Button, Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment';
import { API, graphqlOperation } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteSoftware} from "../../graphql/mutations";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../redux/software'
import { increment } from "../../redux/counter";

const List = () => {
  const { account } = useParams()
  // const tableData = data.softwareData;
 
  const software = useSelector((state) => state.software);
  console.log(software);

  console.log(software);

  const deleteItem = async (id) => {
    try {
      const data = { id: id};
      await API.graphql(graphqlOperation(deleteSoftware, { input: data }));
      toast.success('Successfully Deleted Item');
    } catch(error) {
        toast.error('error deleting item');
    }
  }

  return (
      <div>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <th>Title</th>
          <th>Owner</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>

        </tbody>
      </Table>
    </div>
  );
};
  
  export default List;

  