import React, { useState } from 'react';
import './styles.scss';
import{ Turn as Hamburger } from 'hamburger-react';
import Logo from '../../assets/icons/logo.png';

export default function TopBar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="top-bar-container">
            
            <img className="logo-dino" src={Logo} alt="" />

            <Hamburger toggled={isOpen} toggle={setOpen} />

            <div className={!isOpen ? 'menu' : 'menu open'}>
                <a href="">Home</a>
                <a href="">About Me</a>
                <a href="#hero-id" onClick={() => setOpen(!isOpen)} >Links</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}
