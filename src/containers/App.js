import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Cards from '../components/cards/Cards.jsx';
import Nav from '../components/nav/Nav.jsx';
import './App.css';
import About from '../components/about/About.jsx';
import City from '../components/ciudad/City.jsx';
import axios from "axios";
const APIKEY = '37c970517d73d1ae5d149f5bf6616b45';


function App() {
const [cities, setCities] = useState([]);

function onSearch(city) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=es&units=metric`)
      .then(res=> res.data)
      .then((response) => {
        let finded=false;
        const cityNew = {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            feels: response.main.feels_like,
            humidity: response.main.humidity,
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon
          }
          if(!response){
            alert("No city with that name")
          }else{
            cities.forEach(e=>{
              if(e.id === cityNew.id){
                finded=true;
              }
            })
            if(finded){alert("City already added")}
            else{
              setCities([...cities, cityNew]);
            }
          }
        })
      .catch((e)=>{
        alert("No se encuentran datos")
      })
        
    }

  function onClose(id){
    setCities(old => old.filter(c=> c.id !== id))
  };

  function onFilter(cityId) {
    let ciudad = cities.filter(c => c.id === parseInt(cityId));
    if(ciudad.length) {
        return ciudad[0];
    } else {
        return null;
    }
  };

  return (
    <div className="App">
     <Nav onSearch={onSearch}/>
      <Routes>
        <Route exact path='/' element={<Cards cities ={cities} onClose={onClose} /> } />
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/city/:cityId' element={<City filter={onFilter}/>} />
      </Routes>
    </div>
  );
}

export default App;
