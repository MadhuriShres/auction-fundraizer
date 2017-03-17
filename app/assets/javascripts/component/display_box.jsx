import React, { Component } from 'react';
import  ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const DisplayBox = ({image, viewDetails,handleclicklikes}) =>
  <div className ="box">
    <img
      src={image.image_url} 
      onClick={() => viewDetails(image)}
    />
    <div className="bidrate">Rate {image.price}</div>
    <ReactCSSTransitionGroup
      transitionName="like" 
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <span key={image.likes} className="likes-heart">{image.likes}</span>
    </ReactCSSTransitionGroup>
    <button 
      className="likes"
      onClick={() => handleclicklikes(image)}
    >
      &hearts;
      {image.likes}
    </button>
  </div>;

export default DisplayBox;
