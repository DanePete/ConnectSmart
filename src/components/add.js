
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createSoftware } from "../graphql/mutations";


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
      <input onChange={e => setItem(e.target.value)}></input>
      <button onClick={() => save()}>SAVE</button>
    </div>
  );
};

export default AddItem;