import API, { graphqlOperation } from "@aws-amplify/api";
import {call, put } from "redux-saga/effects";
import { listSoftwares } from "../../../graphql/queries";
import { setSoftware } from '../../software';
import { requestGetSoftware } from "../requests/software";

export function* handleGetSoftware(action) {
    try {
      const response = yield call([API, 'graphql'], graphqlOperation(listSoftwares, {limit: 100}));
      const  data = response;
      console.log(data);
      yield put(setSoftware(data.data.listSoftwares.items));
    } catch (error) {
      console.log(error);
    }
  }
