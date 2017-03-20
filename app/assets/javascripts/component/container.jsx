import React from 'react';
import { render } from 'react-dom';
import SkyLight from 'react-skylight';
import  ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Delivery from './delivery.jsx';
import axios from 'axios';
import Size from './size.jsx';
import Faq from './faq.jsx';



class container extends React.Component {
   constructor(props){
      super(props);
      this.state=  {
        emailaddress:'',
        rate:'', 
        error :{
          emailerror:"Please enter valid emailaddress",
        },
        loading: true,
        images:[]
      
      };
}
debugger
componentDidMount() {
  debugger
  let path = this.props.url.path;
  let url;
  if (path) {
    url = `/auction_items?category=${this.props.url.path}`;
   
  } else{
    url = '/auction_items';
    console.log(url)

  }
 
  console.log(path)
    axios.get(url, {
    }).then((response) => {
        console.log()
        const images = response.data;
        console.log(images);
     
        this.setState( {
        loading: false,
        images
  });
        console.log(images);
    }).catch(err => {
      console.log(err);
    });

  }
 debugger
 componentWillReceiveProps(nextProps) {
   debugger
  let path = nextProps.url.path;
  console.log("path:" + path);
  let url;
  if (path) {
    url = `/auction_items?category=${nextProps.url.path}`;
    console.log(url);
     debugger

  } else{
    url = '/auction_items';
    console.log(url);
  }
 
  console.log(path)
    axios.get(url, {
    }).then((response) => {
      
        const images = response.data;
     
        this.setState( {
        loading: false,
        images
  });
        console.log(images);
    }).catch(err => {
      console.log(err);
    });
 }
/* email address */
  handleclick(evt) {
    // document.getElementById("buyid").className = 'buybuttonhide'
    // document.getElementById("emailaddresshidden").className = 'emailaddressshow '
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
      }debugger
   renderLoading() {
        return 
        <div className="loading">Loading </div>;
      }
      renderPosts() {
         var myBigGreenDialog = {
      backgroundColor: 'white',
      color: 'black',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
      
    };
    

    return (
      
          <div className="articleBody clear">
                          {this.state.images.map(image =>
                      <div className ="box">
                             <div key={image.id}>
                              <img src= {image.image_url} 
                            onClick={() => this.refs.customDialog.show()}
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
                                      <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="customDialog"   className="skylightimg">
                                          <div>  <img src={image.image_url}  className ="skylightimage"/></div>
                                          <div className="popuptext"> 
                                          </div>
                                            <div className="skylightcontent">
                                              ItemName : {image.name}<br/>
                                              Rate: {image.price} <br/>
                                              <button className="wannabuy" id = "buyid"
                                                /*onClick={(evt) => this.handleclick(evt)}*/
                                                >
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
                                                        Buy</button>
                                              
                                            </div>
                                          <div id ="validation" className ="hidevalidation">
                                              {this.state.error.emailerror}
                                          </div>
                                          
                                            </div>
                                        
                                  </SkyLight>
                                 </div>
                          </div>
                            )}
                         
                        
                      
                    </div>
    );
      }

  render() {
    

    return (
      <div>
         
         <div className="markup"> 
                <p>New Arrivals Now Online & In-store</p>
              </div>   
          <article id="article2">
                    <div className="line"></div>
                            {  this.state.loading ? 
                               this.renderLoading()
                             : this.renderPosts()
                            }
                       <div className= "question">
                         <Link to="/Faq"><img src="http://cdn.shopify.com/s/files/1/0183/5429/files/gif_1_0980809b-3810-497e-8b6a-11564f7dfcd2_800x.gif%3Fv=1479225192"  />  </Link>
                         <Link to = "/Delivery"><img src="http://cdn.shopify.com/s/files/1/0183/5429/files/gif_3_e80e9f76-7ab4-4181-a096-9c7861cd6156_800x.gif?v=1479232636" /></Link>
                    </div>
                </article> 
              
                       
      </div>
    );
  }
}

export default container;
