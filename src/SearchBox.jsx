import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function SearchBox({updateInfo}){
    let [city,setCity]= useState("");
    let api_url="https://api.openweathermap.org/data/2.5/weather";
    let api_key="377970564c2c9101ce95f2957761117a";
    const weatherInfo=async()=>{
        let response=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
        let jsonResponse= await response.json();
        console.log(jsonResponse);
        let result={
            city: city,
            Humidity:jsonResponse.main.humidity,
            Temperature : jsonResponse.main.temp,
            Temperature_Min : jsonResponse.main.temp_min,
            Temperature_Max : jsonResponse.main.temp_max,
            FeelsLike: jsonResponse.main.feels_like,
            Description: jsonResponse.weather[0].description
        }
        console.log(result);
        return result;

    }

    const handleChange =(event)=>{
        setCity(event.target.value);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await weatherInfo();
        updateInfo(newInfo);
        
    }
    return(        
        <>
            <h3>Find Weather</h3>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit" onClick={handleSubmit}>Search</Button>

        </>
    )
} 