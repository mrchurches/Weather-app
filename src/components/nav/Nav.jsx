import React from 'react';
import SearchBar from '../searchbar/SearchBar.jsx'
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <div className='nav'>
        <div className='first'>
          <Link to='/'>
            <span>Weather App</span>
          </Link>
        </div>
        <Link to='/about'>About</Link>
        <SearchBar className='sec' onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
