import React from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
const APIKEY = '37c970517d73d1ae5d149f5bf6616b45';

export default function City({filter}){
    let {cityId} = useParams();
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${APIKEY}`)
    // .then(res=> infoCity = res.data);
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