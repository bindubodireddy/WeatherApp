import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";
export default function WeatherApp(){
    let [info,setInfo] =useState({
        city:"",
        Description :"",
        Tmperature :"",
        Humidity :"",
        Temperature_Min :"",
        emperature_Max:"",
        FeelsLike:"",
    });
    let updateInfo =(newInfo)=>{
        setInfo(newInfo);
    }
    
    return(
        <>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo} />
        {info.city&&<InfoBox info={info}/>}     
        </>
    );
}