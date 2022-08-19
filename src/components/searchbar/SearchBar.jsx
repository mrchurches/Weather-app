import React, {useState} from 'react';
import './SearchBar.css'
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
  <form onSubmit={(e)=>{
    e.preventDefault();
     onSearch(city);
     setCity('');
     }}>
    <input className='input' 
    onChange={(e)=>{
      setCity(e.target.value)}}
    type='text' placeholder={'Ciudad...'}/>
    <input className='add' type='submit' value='Agregar'/>
  </form>
  )
  
};