import React, {useState} from 'react';
import './SearchBar.css'
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  
  function handleSubmit(e){
    e.preventDefault();
    if(!city){
      alert("Please insert a city")
    }else{
      onSearch(city);
      setCity('');
    }
     }
  
  function handleChange(e){
    e.preventDefault();
    setCity(e.target.value)
  }

  return (
  <form onSubmit={(e)=>handleSubmit(e)}>
    <input className='input' 
    onChange={(e)=>handleChange(e)}
    type='text' placeholder={'Search your city'} value={city}/>
    <button className='add' type='submit'>Agregar</button>
  </form>
  )
  
};