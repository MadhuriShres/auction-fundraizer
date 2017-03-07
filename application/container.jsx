import React from 'react';
import { render } from 'react-dom';
import SkyLight from 'react-skylight';
import  ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class container extends React.Component {
   constructor(props){
      super(props);
      this.state=  {
        emailaddress:''
      };
}
  handleclick(evt) {
    document.getElementById("buyid").className = 'buybuttonhide'
    document.getElementById("emailaddresshidden").className = 'emailaddressshow '
    };

    handlechange(evt) {
      this.setState({emailaddress:evt.target.value});
      console.log(this.state.emailaddress);
    }
    handlebuttonclick(evt) {
      if(this.state.emailaddress ==='') {

      }
     
    }
  render() {
     var myBigGreenDialog = {
      backgroundColor: '#355664',
      color: 'white',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
    };
    return (
      <div>
       <div className="line"></div>
                
                <article id="article2">
                    <h2>Sweet AJAX Tabs</h2>
                    <div className="line"></div>
                    <div className="articleBody clear">
                      <div className ="box">
                         <img src="https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" 
                               onClick={() => this.refs.customDialog.show()}/>
                           <div className="bidrate">Bidding rate Rs 29</div>
                                  
                             <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="customDialog"   className="skylightimg">
                                <div>  <img src="https://static.pexels.com/photos/27714/pexels-photo-27714.jpg"  className ="skylightimage"/></div>
                                <div className="popuptext"> 
                                    Description : this is a beautiful flower, it is red in color.this is a beautiful flower, it is red in color
                                </div>
                                  <div className="skylightcontent"> Bidding rate Rs 29 <br/>
                                    <button className="wannabuy" id = "buyid"
                                      onClick={(evt) => this.handleclick(evt)}>
                                     Reserve
                                    </button><br/>
                                   
                                <div id="emailaddresshidden"  className="emailaddresshidden"> 
                                    <input 
                                          type="text"
                                          placeholder="your rate"
                                        />
                                          <input
                                          type ="text"
                                          placeholder="CloudFactory email"
                                          value= {this.state.emailaddress}
                                          onChange={(evt) =>this.handlechange(evt)}
                                        
                                        /> 
                                      
                                        <button className= "buttonbuy"
                                            onClick={(evt) => this.handlebuttonclick(evt)}>
                                        Reserve</button>
                                      </div>
                               
                                   
                                  </div>
                              
                         </SkyLight>
                        
                          </div>
                      
                         <div className ="box">test</div>
                          <div className ="box">test</div>
                         <div className ="box">test</div>
                          <div className ="box">test</div>
                         <div className ="box">test</div>
                          <div className ="box">test</div>
                       
                  
                      
                    </div>
                        <div className="linebotton"></div>
                </article>
      </div>
    );
  }
}

export default container;
