import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import Links from './components/Links';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';


import HeroImage from './assets/images/hero-img.jpg';


function App() {
  return (
    <div className="App">
     {/* TopBar Sectopn */}
     <TopBar/>
     {/*  */}


     {/* Portfolio Section */}
     <Portfolio/>
     {/*  */}

      <div className="hero-container" id="hero-id">
        <img className="hero-img" src={HeroImage} alt="" />
        <Links/>
        </div>

     {/* Contact Section */}
     <Contact/>
     {/*  */}


     {/* Footer Section */}
     <Footer/>
     {/*  */}

    </div>
  );
}

export default App;
