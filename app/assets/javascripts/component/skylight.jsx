import React from 'react';
import { render } from 'react-dom';
import SkyLight from 'react-skylight';
import Details from './details.jsx';
import  ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class RenderPost extends React.Component {
    
  
  render() {
         const myBigGreenDialog = {
      backgroundColor: 'white',
      color: 'black',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
      
    };
    

    return (
    (
              <div className="articleBody clear">
            <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="customDialog"   className="skylightimg">
                <Details image={this.clickevent} />                          
              </SkyLight>
                          {this.props.images.map(image =>
                      <div className ="box">
                             <div key={image.id}>
                              <img src= {image.image_url} 
                            onClick={() => this.clickevent(image)}
                            />
                                <div className="bidrate">Rate {image.price}</div>
                                  <ReactCSSTransitionGroup transitionName="like" 
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}>
                                    <span key={image.likes} className="likes-heart">{image.likes}</span>
                                  </ReactCSSTransitionGroup>
                                    <button 
                                    className="likes"
                                    onClick={(evt) => this.handleclicklikes(evt)}>
                                    &hearts;
                                    {image.likes}
                                    </button>
                                 </div>
                          </div>
                            )}           
                      
                    </div> 
          )
    );
  }
}

export default RenderPost;
