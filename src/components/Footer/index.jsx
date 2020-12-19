import React from 'react';
import './styles.scss';


export default function Footer() {
    return (
        <div className="footer-container">

        <a className="home-link" href="#hero-id">Home</a>

          <div className="contribution-designer">
             All Drawing Made 
             <br/>By <a href=""> LizaWillow</a>
          </div>

          <div className="contribution-creator">
             The Site Was Created 
             <br/>By <a href="">David Kostuchenko</a>
          </div>

          <div className="contribution-flaticon">Icons made <br/>by 
           <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </div>
          
        </div>
    )
}
