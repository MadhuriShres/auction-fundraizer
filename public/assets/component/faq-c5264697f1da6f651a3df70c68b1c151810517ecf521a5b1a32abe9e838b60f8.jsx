import React from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import Footer from './footer.jsx';


class Home extends React.Component {
  render() {
    return (
      <div>
        <section id="page">
          <div className="wrapper">
            <div>  <Header /> </div>
            <article id="article2">
              <div className='pageTitle'>
                <b><font size='16'>FAQ</font></b>
              </div>
              <div className="line"></div>
              <div className="articleBody clear">
                <div className ="row" align='center'>
                <div  className="col-xs-12">
                  1. What is this fundraiser for? <br/>
                  -> This fundraiser is an attempt to raise funds to support our Community Service Project. The motive of our CSP is to provide life skill training to some of the members of the drug rehabilitation center. For this, we are enrolling them into Coursera courses for Business, Web Development and Hardware as per their choices. We need to rasie funds to sponsor their certificates on the successful completion of their courses. <br/><br/>
                  2. Where are the items from? <br/>
                  -> Most of the items we have are donated by the CSP team members and our fellow peers from CloudFactory. <br/><br/>
                  3. How do I order made to order items? <br/>
                  -> The made to order items are prepared on order. So, if you like them, you buy them from our website in the same way as other items. After your order, we will confirm with you and place the order for you. The stuffs will be deliver to your desk when they arrive.
                  </div>
                </div>
              </div>
            </article>
             <div> <Footer /> </div>
         </div>
        </section>
      </div>
    );
  }
}

export default Home;
