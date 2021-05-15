import { all } from "redux-saga/effects";
import CovidDataGet from "./CovidDataGet";

function* rootSaga() {
    yield all([
        CovidDataGet(),
    ]);
};

export default rootSaga;
