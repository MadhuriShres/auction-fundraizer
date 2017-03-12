import React from 'react';
import { render } from 'react-dom';
import SkyLight from 'react-skylight';
import  ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class container extends React.Component {
   constructor(props){
      super(props);
      this.state=  {
        emailaddress:'',
        rate:'', 
        error :{
          emailerror:"Please enter valid emailaddress",
        },
        likes:1
      
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
    handlechangerate(evt) {
      this.setState({rate:evt.target.value});
      console.log(this.state.rate);
    }

    displayErrorMessage () {
      document.getElementById("validation").className = 'showvalidation'
      this.setState({emailaddress:''})
       

    }
    handlebuttonclick(evt) {
        const email ='this.state.emailaddress';
      {
      
        } if (!this.state.emailaddress) {
          this.displayErrorMessage();
          
          return;
        }
        else if(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/.test(email))
        this.setState({
          rate : this.state.rate,
          emailaddress: this.state.emailaddress
        });
        else
        { this.displayErrorMessage()
           
         }
      }

      handleclicklikes(evt) {
        let newlikes = (this.state.likes+1);
          this.setState({likes:newlikes})
          console.log(this.state);
      }
  render() {
     var myBigGreenDialog = {
      backgroundColor: 'white',
      color: 'black',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
      
    };
    return (
      <div>
       {/*<div className="line"></div>*/}
            <div className="markup"> 
                <p>New Arrivals Now Online & In-store</p>
              </div>   
          <article id="article2">
                    <div className="line"></div>
                    <div className="articleBody clear">
                      <div className ="box">
                         <img src="https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" 
                               onClick={() => this.refs.customDialog.show()}/>
                           <div className="bidrate">Bidding rate Rs 29</div>
                           <ReactCSSTransitionGroup transitionName="like" 
                           transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}>
                            <span key={this.state.likes} className="likes-heart">{this.state.likes}</span>
                          </ReactCSSTransitionGroup>
                            <button 
                            className="likes"
                            onClick={(evt) => this.handleclicklikes(evt)}>
                            &hearts;
                            {this.state.likes}
                            </button>
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
                                          value = {this.state.rate}
                                          onChange={(evt) =>this.handlechangerate(evt)}
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
                               <div id ="validation" className ="hidevalidation">
                                  {this.state.error.emailerror}
                                 

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
                          <div className ="box">test</div>
                          <div className ="box">test</div>
                         <div className ="box">test</div>
                           <div className ="box">test</div>
                          <div className ="box">test</div>
                          <div className ="box">test</div>
                         <div className ="box">test</div>
                           <div className ="box">test</div>
                          <div className ="box">tripti</div>
                       
                         
                       
                  
                      
                    </div>
                       <div className= "question">
                            <img src="http://cdn.shopify.com/s/files/1/0183/5429/files/gif_1_0980809b-3810-497e-8b6a-11564f7dfcd2_800x.gif%3Fv=1479225192" />
                            <img src="http://cdn.shopify.com/s/files/1/0183/5429/files/gif_2_6e362b74-07c6-4616-a95e-da2dce2c1422_800x.gif?v=1479232950" />
                            <img src="http://cdn.shopify.com/s/files/1/0183/5429/files/gif_3_e80e9f76-7ab4-4181-a096-9c7861cd6156_800x.gif?v=1479232636" />

                  </div>
                </article> 
              
                       
      </div>
    );
  }
}

export default container;
