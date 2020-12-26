import React from 'react';
import './styles.scss';


export default function Footer() {
    return (
        <div className="footer-container">

        <a className="home-link" href="#portfolio-id">Home</a>

          <div className="contribution-wrap">
            <div className="contribution-designer contribution">
              All Drawing Made 
              <br/>By <a href=""> LizaWillow</a>
            </div>

            <div className="contribution-creator contribution">
              The Site Was Created 
              <br/>By <a href="">David Kostuchenko</a>
            </div>

          </div>
        </div>
    )
}
