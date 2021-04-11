
import React from "react";
import { Button, Table, Dropdown } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment';
import {deleteSoftware} from "../../../graphql/mutations";
import { toast } from 'react-toastify';
import { API, graphqlOperation } from 'aws-amplify';
import config from '../../../aws-exports';
import Amplify from 'aws-amplify';
import { Auth, cognitoidentityserviceprovider } from 'aws-amplify';

Amplify.configure(config);

const UserTable = ({data}) => {

  const addToGroup = async (username, groupname) => {
    try {
      let apiName = 'AdminQueries';
      let path = '/addUserToGroup';
      let myInit = {
          body: {
            "username" : username,
            "groupname": groupname
          }, 
          headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
          } 
      }
      toast.success('User Added to Group');
      return await API.post(apiName, path, myInit);
    } catch (error) {
      console.log(error);
    }
  }

  const removeFromGroup = async (username, groupname) => {
    try {
      let apiName = 'AdminQueries';
      let path = '/removeUserFromGroup';
      let myInit = {
          body: {
            "username" : username,
            "groupname": groupname
          }, 
          headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
          } 
      }
      toast.success('User Added to Group');
      return await API.post(apiName, path, myInit);
    } catch (error) {
      console.log(error);
    }
  }  

  const getUser = async () => {
    try {
      let apiName = 'AdminQueries';
      let path = '/getUser';
      let myInit = {
        queryStringParameters: {
              "username": "pausedenied\@gmail.com",
              "userpoolid": "us-east-2_gNT4noYZI"
           }, 
          headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
          } 
      }
      return await API.get(apiName, path, myInit);
    } catch (error) {
      console.log(error);
    }
  }

  const disableUser = async (username, groupname) => {
    try {
      let apiName = 'AdminQueries';
      let path = '/addUserToGroup';
      let myInit = {
          body: {
            "username" : username,
            "groupname": groupname
          }, 
          headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
          } 
      }
      toast.success('User Added to Group');
      return await API.post(apiName, path, myInit);
    } catch (error) {
      console.log(error);
    }
  }

  const enableUser = async (username, groupname) => {
    try {
      let apiName = 'AdminQueries';
      let path = '/addUserToGroup';
      let myInit = {
          body: {
            "username" : username,
            "groupname": groupname
          }, 
          headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
          } 
      }
      toast.success('User Added to Group');
      return await API.post(apiName, path, myInit);
    } catch (error) {
      console.log(error);
    }
  }


  // const listGroupsForUser = async (limit) => {
  //   try {
  //     let apiName = 'AdminQueries';
  //     let path = '/listUsers';
  //     let myInit = { 
  //         queryStringParameters: {
  //           "groupname": "Editor",
  //           "limit": limit,
  //           "token": nextToken
  //         },
  //         headers: {
  //           'Content-Type' : 'application/json',
  //           Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
  //         }
  //     }
  //     const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
  //     nextToken = NextToken;
  //     setData(rest.Users);
  //     toast.success('Data up to date');
  //     return rest;
  //   } catch(error) {
  //       toast.error('error deleting item');
  //   }
  // }

  return (
    <div>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <th>UserName</th>
          <th>User Group</th>
          <th>User Created Date</th>
          <th>Last Modifed Date</th>
          <th>User Status</th>
          <th>Operations</th>
        </thead>
        <tbody>
          {data.map(data => {
            return (
              <tr>
                <td>{data.Username}</td>
                <td>__PLACEHOLDER__ __USER_GROUP_DATA__</td>
                <td><Moment format="MM/DD/YYYY, hh:mm A">{data.UserCreateDate}</Moment></td>
                <td><Moment format="MM/DD/YYYY, hh:mm A">{data.UserLastModifiedDate}</Moment></td>
                <td>
                  {data.Enabled ? "active" : "not active"}
                </td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Edit User Group Permissions
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {/* <Button onClick={() => addToGroup(data.Username, "Editor")} variant="info">Add User to Editor Group</Button> */}
                      <Dropdown.Item onClick={() => addToGroup(data.Username, "Editor")} variant="info">Add User To Editor Group</Dropdown.Item>
                      <Dropdown.Item onClick={() => addToGroup(data.Username, "Administrator")} variant="info">Add User to Administrator Group</Dropdown.Item>
                      <Dropdown.Item onClick={() => removeFromGroup(data.Username, "Administrator")} variant="info">Remove User to Administrator Group</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};
  
  export default UserTable;