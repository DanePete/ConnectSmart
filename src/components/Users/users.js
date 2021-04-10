
import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Auth, API } from 'aws-amplify';
import { Button, Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment';
import UserTable from "./userTable";

/**
 * Fetch users in editor group
 */

const Users = () => {
  let nextToken;
  const [data, setData] = useState([]); 

  React.useEffect(() => {
    listEditors();
  }, []);

  const listEditors = async (limit) => {;
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
    setData(rest.Users);
    return rest;
  }

  return (
    <div className="UserList">
      <UserTable data={data} />
    </div>
  );
};
  
export default Users;