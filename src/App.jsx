import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import Links from './components/Links';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';


import HeroImage from './assets/images/hero-img.jpg';
// Title - Portfolio
import PortfolioLogo from './assets/icons/title-portfolio.png';


function App() {
  return (
    <div className="App">
     {/* TopBar Sectopn */}
     <TopBar/>
     {/*  */}


      <div className="hero-container" id="hero-id">
        <img className="hero-img" src={HeroImage} alt="" />
        <Links/>
        <img className="title-portfolio" src={PortfolioLogo} alt="" />
      </div>

     {/* Portfolio Section */}
     <Portfolio/>
     {/*  */}

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
