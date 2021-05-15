import React,{useEffect} from "react";
import CovidTrackerPresentational from "./CovidTrackerPresentational";
import {useDispatch,useSelector} from "react-redux";
import {covidDataGetService} from "../../appRedux/actions";

function CovidTrackerContainer(){

	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(covidDataGetService())
	},[])

	const { CovidDataGetData,CovidDataGetStateData } = useSelector(({CovidDataGet})=>CovidDataGet)	

	return(
		<>
			<CovidTrackerPresentational 
				CovidDataGetData = { CovidDataGetData}
				CovidDataGetStateData = {CovidDataGetStateData}
			 />
		</>
		)


}

export default CovidTrackerContainer