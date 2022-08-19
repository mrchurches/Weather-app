import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

export default function Card(props) {

  return (
  <div className='card'>
  <div className='button'>
  <button className='onClose' onClick={()=> props.onClose(props.id)} > X </button>
  </div>
  <div className='body-card'>
    <Link to={`/city/${props.id}`}>
    <h2>{props.name}</h2>
    </Link>
    <div className='rowa'>
      <div className='temp'>
      <p>Min</p>
      <p>{props.min}</p>
      </div>
      <div className='temp'>
      <p>Max</p>
      <p>{props.max}</p>
      </div>
  <div className='image'>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='img'/>
  </div>
  </div>
  </div>
  </div>
  )
};