import React from 'react';
import Card from '../card/Card';
import './Cards.css'
export default function Cards(props) {

  return <div className='body'>
    {
      props.cities && props.cities.map((e)=> 
      <Card 
        key={e.id}
        id={e.id}
        name={e.name}
        min={e.min}
        max={e.max}
        img={e.img}
        weather={e.weather}
        clouds={e.clouds}
        onClose={props.onClose}
      />
      )
    }
  </div>
};