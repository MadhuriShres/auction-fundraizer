import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import { Link } from 'react-router';
import axios from 'axios';
import DetailView from './detail_view.jsx';
import DisplayBox from './display_box.jsx';

const myBigGreenDialog = {
  backgroundColor: 'white',
  color: 'black',
  width: '70%',
  height: '600px',
  marginTop: '-300px',
  marginLeft: '-35%',
};

class container extends Component {
  constructor(props){
    super(props);
    this.state = {
      emailaddress: '',
      rate: '', 
      error: {
        emailerror: "Please enter valid emailaddress",
      },
      loading: true,
      images: [],
      selectedImage: null,
    };
  }

  componentDidMount() {
      const path = this.props.category;
      let url;
      if(path) {
        url = `https://crossorigin.me/https://fast-bayou-57937.herokuapp.com/auction_items`

      }
      else {
        url = `https://crossorigin.me/https://fast-bayou-57937.herokuapp.com/auction_items?category=${this.props.category}`
      }
    axios.get(url,)
      .then((response) =>
        this.setState({
          loading: false,
          images: response.data,
        })
      )
      .catch((error) =>
        console.log(error)
      );
  }

debugger
  componentWillReceiveProps(nextProps) {
    if(this.props.category !== nextProps.category) {
      this.setState({ loading: true });
        const path = this.props.category;
      let url;
      if(path) {
        url = `https://crossorigin.me/https://fast-bayou-57937.herokuapp.com/auction_items`

      }
      else {
        url = `https://crossorigin.me/https://fast-bayou-57937.herokuapp.com/auction_items?category=${this.props.category}`
      }
      axios.get(url ,)
      .then((response) =>
        this.setState({
          loading: false,
          images: response.data,
        })
      )
      .catch((error) =>
        console.log(error)
      );
    }
  }
   handleShowClick(evt) {
    document.getElementById("buyid").className = 'buybuttonhide';
    document.getElementById("emailaddresshidden").className = 'emailaddressshow ';
  }
    handlechange(evt) {
    this.setState({emailaddress:evt.target.value});
    console.log(this.state.emailaddress);
  }

  displayErrorMessage () {
    //document.getElementById("validation").className = 'showvalidation'
    this.setState({emailaddress:''})
  }


    handleclicklikes(image) {
      image.likes+=1;
      axios.put(`/auction_items/${image.id}/like`).then(response => {
        this.setState({images: this.state.images.map((img) => {
          return img.id === image.id ? image : img;
        })});
      });
    }


 
    handlebuttonclick(image) {
      debugger
       if (!this.state.emailaddress) {
          this.displayErrorMessage();
          return;
        }
        else if(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/.test(this.state.emailaddress)){
           axios({
        method: 'put',
        url: `/auction_items/${image.id}`,
       headers: {
          'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content,
          'Content-Type': 'application/json',
        },
        //   axios.put(`/auction_items/${image.id}`,
        //   { headers: {
        //   'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content,
        //   'Content-Type': 'application/json',
        // },}
           }
          ).then(response => {
            console.log('success');
          });
        }
        else {
          this.displayErrorMessage()
        }
    }

 viewDetails(image) {
    console.log(image);
    this.setState({
      selectedImage: image,
    });
    this.refs.customDialog.show();
  }

  renderBox() {
    return (
      <div className="articleBody clear">
      {
        this.state.images.map(image =>
          <DisplayBox
            key={image.id}
            image={image}
            viewDetails={this.viewDetails.bind(this)}
            handleclicklikes ={this.handleclicklikes.bind(this)}
          />
        )
      }
      </div>
    );
  }

  render() {
    return (
      <div>
        <SkyLight
          dialogStyles={myBigGreenDialog}
          hideOnOverlayClicked
          ref="customDialog"
          className="skylightimg"
        >
          <DetailView 
            image={this.state.selectedImage}
            handleShopClick={()=> this.handleShowClick()}
            handleEmailChange={(evt)=> this.handlechange(evt)}
            handleButtonClick={(image)=> this.handlebuttonclick(image)}

          />
        </SkyLight>
        <article id="article2">
          <div className="line" />
            { 
              this.state.loading ? 
              <div className="loading">  </div> :
              this.renderBox() 
            }
          <div className= "question">
            <Link to="/Faq"><img src="http://cdn.shopify.com/s/files/1/0183/5429/files/gif_1_0980809b-3810-497e-8b6a-11564f7dfcd2_800x.gif%3Fv=1479225192" /> </Link>
            <Link to = "/Delivery"><img src="http://cdn.shopify.com/s/files/1/0183/5429/files/gif_3_e80e9f76-7ab4-4181-a096-9c7861cd6156_800x.gif?v=1479232636" /></Link>
          </div>
        </article> 
      </div>
    );
  }
}

export default container;
