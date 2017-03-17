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
    axios.get(`https://crossorigin.me/https://fast-bayou-57937.herokuapp.com/auction_items?category=${this.props.category}`)
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

  componentWillReceiveProps(nextProps) {
    if(this.props.category !== nextProps.category) {
      this.setState({ loading: true });
      axios.get(`https://crossorigin.me/https://fast-bayou-57937.herokuapp.com/auction_items?category=${nextProps.category}`)
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
            handleShopClick={()=> console.log('shopClicked')}
            handleEmailChange={()=> console.log('emailChanged')}
            handleButtonClick={()=> console.log('buttonclick')}
          />
        </SkyLight>
        <article id="article2">
          <div className="line" />
            { 
              this.state.loading ? 
              <div className="loading"> Loading </div> :
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
