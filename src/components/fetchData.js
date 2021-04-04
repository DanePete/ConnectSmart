
import React, { Component, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createSoftware } from "../graphql/mutations";
import { Button, Form, Table} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {listSoftwares} from '../graphql/queries';
import { deleteSoftware } from "../graphql/mutations";

  const FetchData = () => {
    const [data, setData] = useState([]);
    const [item, setItem] = React.useState();
  
    const fetchData = async () => {
        try {
          // const filter = { limit: true};
          const data = await API.graphql(graphqlOperation(listSoftwares, {limit: 100}));
          const dataList = data.data.listSoftwares.items;
          setData(dataList);
          toast.success("Retrieved Data Successfully");
        } catch(error) {
          toast.error('Error in retrieving Data')
        }
      }

    const deleteItem = async (id) => {
        try {
            console.log(id);
            const data = { id: id};
            await API.graphql(graphqlOperation(deleteSoftware, { input: data }));
            toast.success('Successfully Deleted Item');
            fetchData();
        } catch(error) {
            console.log(error);
            toast.error('error deleting item');
        }
    }

    return (
      <div>
          <Button onClick={() => fetchData()}>rwar</Button>
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
                <td><Button variant="info">Edit</Button></td>
                {/* <td><Button variant="danger">Delete</Button></td> */}
                <td>{data.id}</td>
                <td><Button onClick={() => deleteItem(data.id)}>Delete!</Button></td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    );
  };
  
  export default FetchData;
  
  