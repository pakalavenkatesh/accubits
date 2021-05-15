import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { COVID_DATA_GET_REQUEST } from "../../constant/ActionTypes";
import { CovidDataGetSuccess  } from "../../appRedux/actions";
import { covidDataGetApi } from '../api';
import { message } from 'antd'


// worker Saga
function* covidDataMainSaga() {
    try {
        const covidGetData = yield call(covidDataGetApi);
        if (covidGetData) {
            yield put(CovidDataGetSuccess(covidGetData))
        } 
        else {
         message.error('Something went wrong. Try again!')
        }
    } catch (error) {
         message.error('Something went wrong. Try again!')
    }
}





//   Watcher Saga
export function* covidData() {
    yield takeEvery(COVID_DATA_GET_REQUEST, covidDataMainSaga);
}


export default function* rootSaga() {
    yield all(
        [
            fork(covidData),
           
        ]
    );
}