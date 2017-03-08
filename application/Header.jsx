import React from 'react';
import { render } from 'react-dom';
import {  Link } from 'react-router'
import SkyLight from 'react-skylight';


class Header extends React.Component {

  render() {
    

    return (
      <div>
          <header>
             <div className ="headerdesign"> </div>
               <div 
                    className="search">
                      <input 
                        id="search-text"
                        type="text" 
                        placeholder="search" />
                      <button     id="search-button">
                     <img src="../image/search.png"  className="searchicon"/>
                
                      </button>
                 </div>
                <hgroup>
               
                </hgroup>
               <div className="navpanel"> 
                  <div className='shoplogo'> FundRaiser </div>
                    <nav className="clear">
                             <Link to={'/'}>  <button className="header"> Home</button> </Link>
                             <Link to={'/Clothes'}>  <button className="header"> Clothes</button> </Link>
                             <Link to={'/Accessaries'}>  <button className="header"> Accessaries</button> </Link>
                             <Link to={'/'}>  <button className="header"> Home</button> </Link>
                             <Link to={'/Clothes'}>  <button className="header"> Clothes</button> </Link>
                             <Link to={'/Accessaries'}>  <button className="header"> Accessaries</button> </Link>
                                                          <Link to={'/Accessaries'}>  <button className="header"> Accessaries</button> </Link>

                        </nav>
              </div>
               
                   
            </header>
       </div>
    );
  }
}

export default Header;
