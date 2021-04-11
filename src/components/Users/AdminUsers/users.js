
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Auth, API } from 'aws-amplify';
import 'react-toastify/dist/ReactToastify.css';
import UserTable from "./userTable";
import { toast } from 'react-toastify';

/**
 * Fetch users in editor group
 */

const family = ['dane', 'katie', 'wayne', 'julie', 'ben'];

console.log("Dane, Katie, Ben, Julie, Wayne");

family.forEach(listFamily);

function listFamily (item, index) {
  console.log(index);
  console.log(item);
}

const Users = () => {
  let nextToken;
  const [data, setData] = useState([]); 

  React.useEffect(() => {
    listEditors();
  }, []);

  const listEditors = async (limit) => {
    try {
      let apiName = 'AdminQueries';
      let path = '/listUsers';
      let myInit = { 
          queryStringParameters: {
            "groupname": "Editor",
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
      toast.success('Data up to date');
      return rest;
    } catch(error) {
        toast.error('error deleting item');
    }
  }

  return (
    <div className="UserList">
      <h1>Users</h1>
      <UserTable data={data} />
    </div>
  );
};
  
export default Users;