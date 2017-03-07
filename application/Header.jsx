import React from 'react';
import { render } from 'react-dom';
import {  Link } from 'react-router'
import SkyLight from 'react-skylight';


class Header extends React.Component {

  render() {
    

    return (
      <div>
          <header> 
                <hgroup>
                    <h1>FundRaiser</h1>
                </hgroup>
                 <div 
                    className="search">
                      <input 
                        id="search-text"
                        type="text" 
                        placeholder="search" />
                      <button 
                        id="search-button">SEARCH
                      </button>
                 </div>
               
                     <nav className="clear">
                             <Link to={'/'}>  <button className="header"> Home</button> </Link>
                             <Link to={'/Clothes'}>  <button className="header"> Clothes</button> </Link>
                             <Link to={'/Accessaries'}>  <button className="header"> Accessaries</button> </Link>
                        </nav>
            </header>
       </div>
    );
  }
}

export default Header;
