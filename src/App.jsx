import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import Links from './components/Links';
import Footer from './components/Footer';


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
     <TopBar/>

      <div className="hero-container">
        <Links/>

        <img className="title-portfolio" src={Portfolio} alt="" />
      </div>

      <div className="portfolio">
      
      
      <img src={Deer} alt="" />
      <img src={CatInSpace} alt="" />
      <img src={SleepyMouse} alt="" />
      <img src={Adventurer} alt="" />
      <img src={PineTree} alt="" />
      <img src={Mushroom} alt="" />
      <img src={GirlAndGoose} alt="" />
      <img src={GreedyOctupus} alt="" />
      <img src={DinoBoy} alt="" />
      <img src={DinoGirl} alt="" />
      <img src={HeroMouse} alt="" />
      <img src={SirTwitch} alt="" />
      <img src={FoolishMonster} alt="" />
      </div>

     <Footer/>
    </div>
  );
}

export default App;
