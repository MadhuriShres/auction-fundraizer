import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
  render() {
   
    return (
      <div>
             <header> 
            
                <hgroup>
                    <h1>FundRaiser</h1>
                   
                </hgroup>
                                
                <nav className="clear"> 
                    <ul>
                        <li><a href="#article1">Clothes</a></li>
                        <li><a href="#article2">Accessaries</a></li>
                        <li><a href="#article3">Navigation Menu</a></li>
                    </ul>
                </nav>
            
            </header>
      
      </div>
    );
  }
}

export default Header;
