
import React from "react";
import { Button, Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment';
import deleteItem from '../Software/software'
import {deleteSoftware} from "../../graphql/mutations";
import { ToastContainer, toast } from 'react-toastify';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

const UserTable = ({data}) => {

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
          <th>UserName</th>
          <th>User Created Date</th>
          <th>Last Modifed Date</th>
          <th>User Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {data.map(data => {
            return (
              <tr>
                <td>{data.Username}</td>
                <td><Moment format="MM/DD/YYYY, hh:mm A">{data.UserCreateDate}</Moment></td>
                <td><Moment format="MM/DD/YYYY, hh:mm A">{data.UserLastModifiedDate}</Moment></td>
                <td>
                  {data.Enabled ? "active" : "not active"}
                </td>
                <td><Button variant="info">Edit</Button></td>
                <td><Button onClick={() => deleteItem(data.id)}>Delete!</Button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};
  
  export default UserTable;