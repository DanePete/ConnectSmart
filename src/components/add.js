
import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createSoftware } from "../graphql/mutations";
import { Button, Form, } from 'react-bootstrap';
import Counter from "./counter";

const AddItem = () => {
  const [item, setItem] = React.useState();

  const save = async () => {
    const data = { title: item };
    try {
      await API.graphql(graphqlOperation(createSoftware, { input: data }));
      console.log("Success!");
    } catch (e) {
      console.log("Error!");
    }
  };

  return (
    <div>
      <h1>Add Software</h1>
      <Counter />
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Add Software</Form.Label>
          <Form.Control type="text" placeholder="Software Title" onChange={e => setItem(e.target.value)}/>
          <Button type="submit" onClick={() => save()}>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddItem;