import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-main">
        <h2>Bienvenido a Metro</h2>
        <p>Ofrecemos los mejores productos para ti.</p>
        <div className="imagenes-home">
          <img src={home1} alt="Imagen 1" />
          <img src={home2} alt="Imagen 2" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;