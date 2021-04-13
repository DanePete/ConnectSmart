import { takeLatest } from "redux-saga/effects"
import { handleGetSoftware } from "./handlers/software";
import { getSoftware } from "../software";

export function* watcherSaga() {
    yield takeLatest(getSoftware.type, handleGetSoftware);
}