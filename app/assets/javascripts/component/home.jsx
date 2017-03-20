import React, { Component } from 'react';
import Header from './Header.jsx';
import Container from './box_container.jsx';
import Footer from './footer.jsx';

const Home = (props) =>
  <section id="page">
    <div className="wrapper">
      <Header />
      <Container category={props.route.category} />
      <Footer />
    </div>
  </section>;

export default Home;
