
import React from "react";
import { Button, Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment';
import { API, graphqlOperation } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteProject} from "../../graphql/mutations";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from "react-router-dom";

const List = ({data, fetchData}) => {
  const { account } = useParams()

  const deleteItem = async (id) => {
    try {
      const data = { id: id};
      await API.graphql(graphqlOperation(deleteProject, { input: data }));
      fetchData();
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
        {data.map(data => {
          return (
            <tr>
              <td>{data.title}</td>
              <td>{data.owner}</td>
              <td><Moment format="MM/DD/YYYY, hh:mm A">{data.updatedAt}</Moment></td>
              <td>
                <Link to={`/editSoftware/${data.id}/${data.title}`}>
                  <Button variant="info">Edit</Button>
                </Link>
              </td>
              <td><Button onClick={() => deleteItem(data.id)}>Delete!</Button></td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    </div>
  );
};
  
  export default List;

  