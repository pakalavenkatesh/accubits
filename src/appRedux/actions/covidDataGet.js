import {
	COVID_DATA_GET_REQUEST,
	COVID_DATA_GET_SUCCESS
} from "../../constant/ActionTypes";


export const covidDataGetService= () =>{
	return{
		type : COVID_DATA_GET_REQUEST,
	}
}

export const CovidDataGetSuccess= (data) =>{
	return{
		type : COVID_DATA_GET_SUCCESS,
		payload : data
	}
}