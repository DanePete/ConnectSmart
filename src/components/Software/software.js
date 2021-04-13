
import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import AddItem from "./addSoftware"
import List from "./softwareTable";
import { API, graphqlOperation } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getSoftware, listSoftwares} from '../../graphql/queries';
import 'react-toastify/dist/ReactToastify.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/core";
import counterReducer from '../Counter';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/counter'
import {getSoftware as getSoft} from "../../redux/software";

const Software = () => {
  
  const override = css`
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
  `;

  return (
      <div>
        {/* { loading ? <ClimbingBoxLoader css={override} size={50} color={"#ff9900"} loading={loading} /> :  */}
          <div>
            <AddItem />
            <List />
          </div>
        {/* } */}
      </div>
  );
};
  
  export default Software;