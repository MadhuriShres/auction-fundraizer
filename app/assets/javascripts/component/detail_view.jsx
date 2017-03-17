import React, { Component } from 'react';

const DetailView = (props) =>
  <div className="row">
    <div className="col-xs-6">
      <img src={props.image.image_url}  className ="skylightimage img-responsive"/>
    </div>
    <div className="col-xs-6">
      <div>
        ItemName : {props.image.name}<br/>
        Rate: {props.image.price} <br/>
        <button
          className="wannabuy"
          id="buyid"
          onClick={(evt) => props.handleShopClick(evt)}>
          Shop
        </button><br/>
        <div id="emailaddresshidden" className="emailaddresshidden"> 
          <input
            type="text"
            placeholder="CloudFactory email"
            value={props.emailaddress}
            onChange={(evt) =>props.handleEmailChange(evt)} 
            className="emaildesign"
          /> 
          <button
            className="buttonbuy"
            onClick={(evt) => props.handleButtonClick(evt)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>;

export default DetailView;
