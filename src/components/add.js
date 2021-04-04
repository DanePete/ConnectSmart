
import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createSoftware } from "../graphql/mutations";
import { Button, Form, } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const AddItem = () => {
  const [item, setItem] = React.useState();

  const save = async () => {
    const data = { title: item};
    console.log(data);
    try {
      await API.graphql(graphqlOperation(createSoftware, { input: data }));
      toast.success("Success");
    } catch (e) {
      toast.error('Error')
    }
  };

  return (
    <div>
      <h1>Add Software</h1>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Add Software</Form.Label>
          <Form.Control type="text" placeholder="Software Title" onChange={e => setItem(e.target.value)}/>
          <Button onClick={() => save()}>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddItem;