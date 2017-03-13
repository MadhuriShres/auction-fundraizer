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
                    <div className="line"></div>
                    <div className="articleBody clear">
                      <div className ="body">
                    
                      We dont have specific size available
                    
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
