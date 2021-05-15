import React,{useState, useEffect} from "react";
import {Card, Spin,Button,Input,Row,Col} from "antd";
import {DebounceInput} from 'react-debounce-input';


const { Search } = Input;

function CovidTrackerPresentational({CovidDataGetData,CovidDataGetStateData}){

	const [stateView, setStateView] = useState(false)
	const [ stateDataView, setStateDataView] = useState([])
	const [storedData, setStoredData] = useState([])
	const [countryDataView, setCountryDataView] = useState([])


	const objectArray = Object.entries(CovidDataGetData);

	const data = objectArray.map(el =>{
		return {
			name : el[0],
			value : el[1]
		}
	 })

	function handleView(el){

		setStateView(true)
		console.log("el", el)

		let viewData = Object.entries(el.value.districtData).map(el=>{

			console.log("el", el)

			return{
				stateName : el[0],
				active : el[1].active,
				confirmed : el[1].confirmed,
				deceased : el[1].deceased,
				recovered : el[1].recovered
			}
		})

		setStateDataView(viewData)
		setStoredData(viewData)

	}

	function handleBack(){
		setStateView(false)
	}


	function onSearch(value){

		if(value.length > 0){
		
		let data = [...stateDataView]
		 let obj = data.filter(name => name.stateName.toLowerCase().includes(value))
		 setStateDataView(obj)
		}
		else {
			setStateDataView(storedData)
		}


	}

	function onStateSearch(value){

		if(value.length > 0){

			let dataView = [...data]
			let obj = dataView.filter(el=> el.name.toLowerCase().includes(value))

			console.log("obj", obj)
			setCountryDataView(obj)
		}
		else {

		const data = objectArray.map(el =>{
			return {
				name : el[0],
				value : el[1]
			}
		 })

		setCountryDataView(data)
		}
	}

	return(
		<>
		{ stateView ? 

			<div>
				<Button type="primary" onClick={handleBack}> Back </Button>

				<Row>
					<Col span={8}>
				 		<DebounceInput
				          minLength={2}
				          debounceTimeout={300}
				          onChange={event => onSearch( event.target.value)} />
				 	</Col>
				</Row>

				{ stateDataView.map((el,index)=>
				<Card key={index} title={el.stateName}> 
				<h4> 	Active Count : {el.active} </h4>
				<h4>  	Confirmed Count : {el.confirmed} </h4>
				<h4>  	Deceased Count : {el.deceased} </h4>
				<h4>	ecovered Count : {el.recovered} </h4>
				</Card>
				)}
			</div>


		:
		<div>

			{ data && data.map((el,index)=>
				<div key={index}>
					<Card hoverable  >
					 <h4 onClick={ ()=>handleView(el)}> {el.name} </h4>
						</Card>
				</div>
			)}
		</div>

		}
			
		</>
		)
}

export default CovidTrackerPresentational