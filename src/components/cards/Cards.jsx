import React from 'react';
import Card from '../card/Card';
import './Cards.css'
export default function Cards({cities, onClose}) {

  return (<div className='body'>
    {!cities.length && (
    <div className='nocities'>
      <div>
        <h4>No cities yet</h4>
      </div>
    </div>
    )}
    {
      cities && cities.map((e)=>{
      return <Card 
        key={e.id}
        id={e.id}
        name={e.name}
        min={e.min}
        max={e.max}
        humidity={e.humidity}
        wind={e.wind}
        feels={e.feels}
        img={e.img}
        weather={e.weather}
        clouds={e.clouds}
        onClose={onClose}
      /> }
      )
    }
  </div>)
};