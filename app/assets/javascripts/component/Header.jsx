import React, { Component } from 'react';
import { render } from 'react-dom';
import {  Link } from 'react-router'

const Header = () =>
  <div>
    <header>
      <div className="headerdesign" />
      <div className="search">
        <input 
          id="search-text"
          type="text" 
          placeholder="search"
        />
      </div>
      <div className="navpanel"> 
        <div className='shoplogo'>FundRaiser</div>
        <nav className="clear">
          <Link to={'/'}><button className="header">Home</button></Link>
          <Link to={'/clothes'}><button className="header">Clothes</button></Link>
          <Link to={'/decoration'}><button className="header">Decorative Items</button></Link>
          <Link to={'/bags'}><button className="header">Bags</button></Link>
          <Link to={'/soft-toys'}><button className="header">Soft Toys</button></Link>
        </nav>
      </div>
    </header>
  </div>;

export default Header;
