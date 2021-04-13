
import { API, graphqlOperation } from 'aws-amplify';
import {listSoftwares as ls} from '../../../graphql/queries';

  export const requestGetSoftware = async () => {
    const returnedData = await API.graphql(graphqlOperation(ls, {limit: 100}));
    const dataList = returnedData.data.listSoftwares.items;
    return dataList;
  } 