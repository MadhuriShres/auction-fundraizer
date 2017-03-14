import React from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import Container from './container.jsx';
import Footer from './footer.jsx';


class Home extends React.Component {
  render() {
   
    return (
      <div>
        <section id="page">
          <div className="wrapper">
              
            <div>  <Header /> </div>
            <div> <Container /> </div> 
            <div> <Footer /> </div>
         

         </div>
        </section>
      </div>
    );
  }
}

export default Home;
