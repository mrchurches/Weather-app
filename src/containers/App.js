import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import Cards from '../components/cards/Cards.jsx';
import Nav from '../components/nav/Nav.jsx';
import './App.css';
import About from '../components/about/About.jsx';
import City from '../components/ciudad/City.jsx';

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
      .then(r => r.json())
      .then((response) => {
        if(response.main !== undefined){
          const cityNew = {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
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
      <div>
        <Route
          exact
          path='/'
          render={()=> 
          <Nav onSearch = {onSearch}/>} 
        />
      <Route 
        exact
        path='/'
        render={()=>
        <Cards 
        cities = {cities}
        onClose={onClose}
        /> }
      />
      </div>
      <Route
        exact
        path='/about'
        component={About}
      />
      <Route
        path='/city/:cityId'
        render={({match})=> <City city={onFilter(match.params.cityId)}/>}
      />
    </div>
  );
}

export default App;
