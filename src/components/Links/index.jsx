import React from 'react';
import './styles.scss';
import Patreon from '../../assets/icons/patreon.png';
import Instagram from '../../assets/icons/instagram.png';
import Portfolio from '../../assets/icons/suitcase.png';
import Contact from '../../assets/icons/contact.png';

export default function Links() {
    return (
<div className="links-container" id="links">
 <a href="" className="links-container__patreon">
      <img className="links-container__patreon__icon" src={Patreon} alt="" />Patreon</a>

 <a href="https://www.instagram.com/lizawillow/?hl=en" className="links-container__instagram">
 <img className="links-container__instagram__icon" src={Instagram} alt="" />Instagram</a>
 
 <a href="#portfolio-id" className="links-container__portfolio">
 <img className="links-container__portfolio__icon" src={Portfolio} alt="" />Portfolio</a>

 <a href="#contact" className="links-container__contact">
 <img className="links-container__contact__icon" src={Contact} alt="" />Contact</a>

</div>
    )
}
