import React from 'react';
import { render } from 'react-dom';
import SkyLight from 'react-skylight';


class container extends React.Component {
   constructor(props){
      super(props);
      this.state=  {
        emailaddress:''
      };
}
  handleclick(evt) {
      document.getElementById("emailaddresshidden").className = 'emailaddressshow '
      // this.setState({emailaddress:evt.target.value})
     
    };

    handlechange(evt) {
      this.setState({emailaddress:evt.target.value});
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
                       
                          <div className ="box"
                           onClick={() => this.refs.customDialog.show()}>
                         
                            <img src="https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" />
                         <div className="bidrate">Bidding rate Rs 29</div>
                             <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="customDialog" title="A Custom Modal" className="skylightimg">
                              <img src="https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" />
                                  <div className="skylightcontent"> Bidding rate Rs 29 <br/>
                                    <button className="wannabuy"
                                      onClick={(evt) => this.handleclick(evt)}>
                                      Wanna Buy ?
                                    </button><br/>
                                     <div id="emailaddresshidden"  className="emailaddresshidden"> 
                                          <input
                                          type ="text"
                                          placeholder="Email"
                                          value= {this.state.emailaddress}
                                          onChange={(evt) =>this.handlechange(evt)}
                                       
                                        /> 
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
                         <div className ="box">test</div> <div className ="box">test</div>
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
                         <div className ="box">test</div> <div className ="box">test</div>
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
