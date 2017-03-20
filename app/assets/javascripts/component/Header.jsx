import React, { Component } from 'react';
import { render } from 'react-dom';
import {  Link } from 'react-router'

const Header = () =>
  <div>
    <header>
      <div className="headerdesign" />
      <div className="search">
       Skill Training for Rehabilitation Center Members
      </div>
      <div className="navpanel"> 
          <Link to={'/'}><button className="shoplogo">FundRaiser</button></Link>
   
        <nav className="clear">
          <Link to={'/'}><button className="header">Home</button></Link>
          <Link to={'/clothes'}><button className="header">Clothes</button></Link>
          <Link to={'/accessories'}><button className="header">Accessories</button></Link>
          <Link to={'/decorative_items'}><button className="header">Decorative Items</button></Link>
          <Link to={'/bags'}><button className="header">Bags</button></Link>
          <Link to={'/toys'}><button className="header">Soft Toys</button></Link>
        </nav>
      </div>
    </header>
  </div>;

export default Header;
