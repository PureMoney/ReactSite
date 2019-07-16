import React from 'react';
import ReactDOM from 'react-dom';
import './LandingPage.scss';

class props {
    name: string = 'car'
}

export default class LandingPage extends React.Component {

    render() {
         return <body>
           <nav className="navbar navbar-expand-xl navbar-light bg-light py-4 fixed-top">
           <div className="container">
             <a className="nav-brand" href="['/']">
               <img src="./assets/img/rockstable-logo-white.png" height="40" />
             </a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
       
             <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto mt-2">
                 <li className="nav-item">
                   <a className="nav-link" href="#roks" >menu.whats_rocks</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="./assets/2019_Whitepaper.pdf" >menu.white_paper</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="['/team']" >menu.team</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="['/map']" >menu.map</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="['/about-us']" >menu.about</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="['/contact-us']" >menu.contact_us</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="['/use-cases']" >menu.use_cases</a>
                 </li>
                 <li className="nav-item" >
                   <button type="button" name="button" color="accent" >menu.logout</button>
                 </li>
                 <li className="nav-item login" >
                   <a className="nav-link" href="['/login']" >menu.login</a>
                 </li>
                 <li className="nav-item mb-2" >
                   <a className="btn btn-sm btn-light pt-1" href="['/register']" role="button" >menu.register</a>
                 </li>
                 <li className="nav-item">
                   <div className="dropdown language">
                     <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i className="fas fa-globe-americas"></i> { 'menu.language'  }
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <button className="dropdown-item" >English</button>
                       <button className="dropdown-item" >Chinese</button>
                       <button className="dropdown-item" >Spanish</button>
                       <button className="dropdown-item" >Vietnamese</button>
                     </div>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
         </nav>

       
       <div className="container">
         <div className="clearfix"></div>
         <footer className="mt-5">
           <div className="row">
             <div className="col py-2">
               <a className="footer-link" ><b>&#169; All rights reserved</b></a>
             </div>
             <div className="col py-2 text-right">
               <a href="http://ow.ly/4Zr950utsLO" target="_blank" className="footer-link mr-3"><i className="fab fa-facebook"></i></a>
               <a href="http://ow.ly/Jvup50utsLE" target="_blank" className="footer-link mr-3"><i className="fab fa-telegram"></i></a>
               <a href="http://ow.ly/Bjtq50utsLL" target="_blank" className="footer-link mr-3"><i className="fab fa-linkedin"></i></a>
               <a href="http://twitter.com/RockstableT " target="_blank" className="footer-link mr-3"><i className="fab fa-twitter"></i></a>
               <a href="https://www.instagram.com/rockstabletoken9/" target="_blank" className="footer-link mr-3"><i className="fab fa-instagram"></i></a>
               <a href="http://ow.ly/FY9l50utsLH " target="_blank" className="footer-link mr-3"><i className="fab fa-medium"></i></a>
               <a href="http://ow.ly/kyWX50utsLF" target="_blank" className="footer-link mr-3"><i className="fab fa-reddit"></i></a>
               <a href="./assets/2018_Terms_And_Condition.pdf" className="footer-link mr-3" ><b >footer.terms</b></a>
               <a href="https://app.termly.io/document/privacy-policy/cca9f394-0706-4432-8ca3-8a20b1c2bdff" className="footer-link" ><b >footer.privacy</b></a>
             </div>
           </div>
         </footer>
       </div>
       </body>
        
        
    }}