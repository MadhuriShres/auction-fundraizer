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
                <b><font size='16'>Delivery Info</font></b>
              </div>
              <div className="line"></div>
              <div className="articleBody clear">
                <div className ="row" align='center'>
                <div  className="col-xs-12">
                  When you buy an item, our team will be notified about it.
                    <br/>
                  They will contact you within a day and then deliver the item to your desk. You can pay them in cash.
                    <br/><br/>
                  Thank you so much for your support. We are very grateful. Happy Shopping :)
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
