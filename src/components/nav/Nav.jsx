import React from 'react';
import SearchBar from '../searchbar/SearchBar.jsx'
import './Nav.css';
import {Link} from 'react-router-dom';
function Nav({onSearch}) {
  return (
    <div className='nav'>
        <div className='logo'>
            <div className='title'>
          <Link to='/'>
              <h4>Weather App</h4>
          </Link>
            </div>
        </div>
        <div className='about'>
          <Link to='/about'>
            <h4>About</h4>
          </Link>
        </div>
        <div className=''>
          <SearchBar className='sec' onSearch={onSearch}/>
        </div>
    </div>
  );
};

export default Nav;
