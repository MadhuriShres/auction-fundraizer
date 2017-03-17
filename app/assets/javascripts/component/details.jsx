import React from 'react';
import { render } from 'react-dom';
import SkyLight from 'react-skylight';

const Details = ({ image }) =>
  <div>
    <div> 
      <img src={image.image_url}  className ="skylightimage"/>
    </div>
    <div className="popuptext"></div>
    <div className="skylightcontent">
      ItemName : {image.name}<br/>
      Rate: {image.price} <br/>
      <button className="wannabuy" id = "buyid"
        onClick={(evt) => this.handleclick(evt)}>
      Shop
      </button><br/>
      <div id="emailaddresshidden"  className="emailaddresshidden"> 
        <input
          type ="text"
          placeholder="CloudFactory email"
          value= {this.state.emailaddress}
          onChange={(evt) =>this.handlechange(evt)} 
          className="emaildesign"
        /> 
        <button className= "buttonbuy"
          onClick={(evt) => this.handlebuttonclick(evt)}>
          Buy
        </button>
      </div>
      <div id ="validation" className ="hidevalidation">
        
      </div>
    </div>
  </div>;

  export default Details;