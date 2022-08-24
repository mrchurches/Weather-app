import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function City({filter}){
    let {cityId} = useParams();
    let city= filter(cityId);

        return(
        <div>
        <p>{city.name}</p>
        <p>Weather: {city.weather}</p>
        <img alt='img' src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}/>
        <p>Temp max:{city.max}</p>
        <p>Temp min: {city.min}</p>
        <p>Fells like:{city.feels}</p>
        <p>Humidity {city.humidity}%</p>
        <p>Clouds {city.clouds}%</p>
        <p>Latitude: {city.latitud}</p>
        <p>Longitude: {city.longitud}</p>
        <Link to="/">back</Link>
        </div>
)}