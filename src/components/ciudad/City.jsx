import React from 'react';
import { Link } from 'react-router-dom';

export default function City({city}){
    console.log(city)
        return(
        <div>
        <p>{city.name}</p>
        <p>Weather: {city.weather}</p>
        <img alt='img' src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}/>
        <p>Temp max:{city.max}</p>
        <p>Temp min: {city.min}</p>
        <p>Latitude: {city.latitud}</p>
        <p>Longitude: {city.longitud}</p>
        <Link to="/">back</Link>
        </div>
)}