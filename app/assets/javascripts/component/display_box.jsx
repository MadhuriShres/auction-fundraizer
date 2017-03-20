import React, { Component } from 'react';
import  ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const DisplayBox = ({image, viewDetails,handleclicklikes}) =>
  <div className ="box">
    <img
      src={image.image_url}
      onClick={() => viewDetails(image)}
    />
    <div className="bidrate">{image.sold ? 'sold' : `NPR ${image.price}`}</div>
    <ReactCSSTransitionGroup
      transitionName="like"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <span key={image.likes} className="likes-heart">{image.likes}</span>
    </ReactCSSTransitionGroup>

    <div className ="row" align='center'>
      <div className="col-xs-3">
        <button
          className="likes"
         onClick={() => handleclicklikes(image)}
        >
          &hearts;
          {image.likes}
        </button>
      </div>
      <div className="col-xs-9">
        <div className='image-name' align='center'>{image.name.substring(0, 35)}</div>
      </div>
    </div>
  </div>;

export default DisplayBox;
