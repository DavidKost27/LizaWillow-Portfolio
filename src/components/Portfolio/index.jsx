import React from 'react';
import './styles.scss';

// Imgaes
import Deer from '../../assets/images/deer.jpg';
import DinoBoy from '../../assets/images/dino-boy.jpg';
import DinoGirl from '../../assets/images/dino-girl.jpg';
import CatInSpace from '../../assets/images/cat-in-space.jpg';
import SleepyMouse from '../../assets/images/sleepy-mouse.jpg';
import SirTwitch from '../../assets/images/sir-twitch.jpg';
import PineTree from '../../assets/images/pine-tree.jpg';
import Mushroom from '../../assets/images/mushroom.jpg';
import HeroMouse from '../../assets/images/hero-mouse.jpg';
import GreedyOctupus from '../../assets/images/greedy-octupus.jpg';
import GirlAndGoose from '../../assets/images/girl-and-goose.jpg';
import FoolishMonster from '../../assets/images/foolish-monster.jpg';
import Adventurer from '../../assets/images/adventurer.jpg';



export default function Portfolio() {
    return (
      <div className="portfolio" id="portfolio-id">
      <img className="portfolio__item1 portfolio__img" src={Deer} alt="" />
      <img className="portfolio__item2 portfolio__img" src={CatInSpace} alt="" />
      <img className="portfolio__item3 portfolio__img" src={SleepyMouse} alt="" />
      <img className="portfolio__item4 portfolio__img" src={Adventurer} alt="" />
      <img className="portfolio__item5 portfolio__img" src={PineTree} alt="" />
      <img className="portfolio__item6 portfolio__img" src={Mushroom} alt="" />
      <img className="portfolio__item7 portfolio__img" src={GirlAndGoose} alt="" />
      <img className="portfolio__item8 portfolio__img" src={GreedyOctupus} alt="" />
      <img className="portfolio__item9 portfolio__img" src={DinoBoy} alt="" />
      <img className="portfolio__item10 portfolio__img" src={DinoGirl} alt="" />
      <img className="portfolio__item11 portfolio__img" src={HeroMouse} alt="" />
      <img className="portfolio__item12 portfolio__img" src={SirTwitch} alt="" />
      <img className="portfolio__item13 portfolio__img" src={FoolishMonster} alt="" />
      </div>
    )
}
