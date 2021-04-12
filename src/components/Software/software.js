
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import AddItem from "./addSoftware"
import List from "./softwareTable";
import { API, graphqlOperation } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import {listSoftwares} from '../../graphql/queries';
import 'react-toastify/dist/ReactToastify.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/core";

const Software = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const override = css`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
`;

  React.useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const returnedData = await API.graphql(graphqlOperation(listSoftwares, {limit: 100}));
      const dataList = returnedData.data.listSoftwares.items;
      console.log(dataList);
      setData(dataList);
      setLoading(false);
    } catch(error) {
      // toast.error('Error in retrieving Data')
    }
  } 

    return (
        <div>
          { loading ? <ClimbingBoxLoader css={override} size={50} color={"#ff9900"} loading={loading} /> : 
            <div>
              <AddItem fetchData={fetchData}/>
              <List fetchData={fetchData} data={data}/>
            </div>
          }
        </div>
    );
};
  
  export default Software;