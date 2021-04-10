
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Auth, API } from 'aws-amplify';

/**
 * Fetch users in editor group
 * TODO: this is boilerplate JS code - reactify it.
 */

let nextToken;

async function listEditors(limit) {
  let apiName = 'AdminQueries';
  let path = '/listUsersInGroup';
  let myInit = { 
      queryStringParameters: {
        "groupname": "Editors",
        "limit": limit,
        "token": nextToken
      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
  }
  const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
  nextToken = NextToken;
  console.log(rest);
  return rest;
}


const Users = () => {
    return (
    <div className="UserList">
        {/* <button onClick={addToGroup}>Add to Group</button> */}
        <button onClick={() => listEditors(10)}>List Editors</button>
    </div>
    );
};
  
export default Users;