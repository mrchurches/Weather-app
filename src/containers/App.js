import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Cards from '../components/cards/Cards.jsx';
import Nav from '../components/nav/Nav.jsx';
import './App.css';
import About from '../components/about/About.jsx';
import City from '../components/ciudad/City.jsx';
import axios from "axios";

const { APIKEY } = process.env;
function App() {
  const [cities, setCities] = useState([]);
  function onSearch(city) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=es&units=metric`)
      .then((response) => {
        console.log(response.data)
        if(response.data.main !== undefined){
          const cityNew = {
            min: Math.round(response.data.main.temp_min),
            max: Math.round(response.data.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon
          };
          setCities(oldCities => [...oldCities, cityNew]);
        } else {
          alert("City not found...");
        }
      });

    }

  function onClose(id){
    setCities(old => old.filter(c=> c.id !== id))
  };

  function onFilter(cityId) {
    let ciudad = cities.filter(c => c.id === parseInt(cityId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  };

  return (
    <div className="App">
        <Routes>
        <Route
          exact
          path='/'
          element={<Nav onSearch = {onSearch}/>} 
        />
      <Route 
        exact
        path='/'
        element={
        <Cards cities ={cities} onClose={onClose} /> }
      />
      <Route
        exact
        path='/about'
        element={About}
      />
      <Route
        path='/city/:cityId'
        element={({match})=> <City city={onFilter(match.params.cityId)}/>}
      />

          </Routes>
    </div>
  );
}

export default App;
