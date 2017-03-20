import React, { Component } from 'react';

const DetailView = (props) =>
  <div className="row">
    <div className="col-xs-6">
      <img src={props.image.image_url}  className ="skylightimage img-responsive"/>
    </div>
    <div className="col-xs-6" >
      <div className ="labeling" >
        <div className='display-box-item-name'>{props.image.name} <br/></div>
        <div className='display-box-item-price'>
          NPR {props.image.price} <br/><br/>
        </div>
        {props.image.sold ? <div className='already-sold'>Already Sold</div> :
         <button
          className="wannabuy"
          id="buyid"
          onClick={(evt) => props.handleShopClick(evt)}>
          Shop
        </button>
        }

        <br/>
        <div id="emailaddresshidden" className="emailaddresshidden">
          <form>
            <div className="row">
              <div className="col-xs-9">
                <input
                  type="email"
                  placeholder="CloudFactory email"
                  value={props.emailaddress}
                  onChange={(evt) =>props.handleEmailChange(evt)}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-xs-2">
                <button
                  className="btn btn-primary"
                  onClick={() => props.handleButtonClick(props.image)}
                >
                  Buy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>;

export default DetailView;
