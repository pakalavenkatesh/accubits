//import axiosInstance from "../../util/Api";
import {message} from "antd";
import axios from "axios";

export const covidDataGetApi = async (data) => 
    await axios.get(' https://api.covid19india.org/state_district_wise.json')
    .then(response => {
        return response
    })
    
    .catch(error =>{
    	message.error('Something went wrong. Try again!')
    });

 