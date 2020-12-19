import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import Links from './components/Links';
import Footer from './components/Footer';
import Contact from './components/Contact';


import HeroImage from './assets/images/hero-img.jpg';
// Title - Portfolio
import Portfolio from './assets/icons/title-portfolio.png';
// Imgaes
import Deer from './assets/images/deer.jpg';
import DinoBoy from './assets/images/dino-boy.jpg';
import DinoGirl from './assets/images/dino-girl.jpg';
import CatInSpace from './assets/images/cat-in-space.jpg';
import SleepyMouse from './assets/images/sleepy-mouse.jpg';
import SirTwitch from './assets/images/sir-twitch.jpg';
import PineTree from './assets/images/pine-tree.jpg';
import Mushroom from './assets/images/mushroom.jpg';
import HeroMouse from './assets/images/hero-mouse.jpg';
import GreedyOctupus from './assets/images/greedy-octupus.jpg';
import GirlAndGoose from './assets/images/girl-and-goose.jpg';
import FoolishMonster from './assets/images/foolish-monster.jpg';
import Adventurer from './assets/images/adventurer.jpg';



function App() {
  return (
    <div className="App">
     {/* TopBar Sectopn */}
     <TopBar/>
     {/*  */}


      <div className="hero-container" id="hero-id">
        <img className="hero-img" src={HeroImage} alt="" />
        <Links/>
        <img className="title-portfolio" src={Portfolio} alt="" />
      </div>


      {/* Portfolio Section */}
      <div className="portfolio" id="portfolio-id">
      <img className="portfolio__item--1" src={Deer} alt="" />
      <img className="portfolio__item--2" src={CatInSpace} alt="" />
      <img className="portfolio__item--3" src={SleepyMouse} alt="" />
      <img className="portfolio__item--4" src={Adventurer} alt="" />
      <img className="portfolio__item--5" src={PineTree} alt="" />
      <img className="portfolio__item--6" src={Mushroom} alt="" />
      <img className="portfolio__item--7" src={GirlAndGoose} alt="" />
      <img className="portfolio__item--8" src={GreedyOctupus} alt="" />
      <img className="portfolio__item--9" src={DinoBoy} alt="" />
      <img className="portfolio__item--10" src={DinoGirl} alt="" />
      <img className="portfolio__item--11" src={HeroMouse} alt="" />
      <img className="portfolio__item--12" src={SirTwitch} alt="" />
      <img className="portfolio__item--13" src={FoolishMonster} alt="" />
      </div>
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
