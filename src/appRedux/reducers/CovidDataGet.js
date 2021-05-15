import {COVID_DATA_GET_SUCCESS } from "../../constant/ActionTypes";

const INIT_STATE = {
 CovidDataGetData : [],
 CovidDataGetStateData : []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COVID_DATA_GET_SUCCESS: {
      return {
        ...state,
        CovidDataGetStateData : action.payload.data,
        CovidDataGetData :  action.payload.data
      }
    }

    default:
      return state;
  }
}
