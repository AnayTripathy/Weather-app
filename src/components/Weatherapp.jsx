import React, { useState } from "react";
import './WeatherApp.css';
import search_img from './Assets/search.png';
import clear_img from './Assets/clear.png';
import cloud_img from './Assets/cloud.png';
import drizzle_img from './Assets/drizzle.png';
import rain_img from './Assets/rain.png';
import snow_img from './Assets/snow.png';
import wind_img from './Assets/wind.png';
import humidity_img from './Assets/humidity.png';

const WeatherApp = () => {

    let api_key = "433325b1e304e16d6ae38f5bbe822782";

    const [wicon,setWicon] = useState(clear_img);

    const search = async () =>{
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value==="")
        {
            return 0;
        }
        let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(API_URL);
        let data= await response.json();

        const humidity = document.getElementById("humidity-percent");
        const wind = document.getElementById("wind-speed");
        const temp = document.getElementById("weather-temp");
        const location = document.getElementById("weather-location");

        humidity.innerHTML = data.main.humidity+"%";
        wind.innerHTML = Math.floor(data.wind.speed)+" Km/hr";
        temp.innerHTML = Math.floor(data.main.temp)+"°C";
        location.innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            console.log("clear_img");
            setWicon(clear_img);
        }

        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            console.log("cloud_img");
            setWicon(cloud_img);
        }

        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            console.log("drizzle_img");
            setWicon(drizzle_img);
        }

        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            console.log("drizzle_img");
            setWicon(drizzle_img);
        }

        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            console.log("rain_img");
            setWicon(rain_img);
        }

        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            console.log("rain_img");
            setWicon(rain_img);
        }

        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            console.log("snow_img");
            setWicon(snow_img);
        }

        else
        {
            console.log("clear_img");
            setWicon(clear_img);
        }
    }

   return(
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="Search"/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_img} alt=""/>
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} alt=""/>
        </div>
        <div className="weather-temp" id="weather-temp">24°</div>
        <div className="weather-location" id="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_img} alt="" className="icon"/>
                <div className="data">
                    <div className="humidity-percent" id="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_img} alt="" className="icon"/>
                <div className="data">
                    <div className="wind-speed" id="wind-speed">18 Km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
   ) 
}

export default WeatherApp;