/* Navigation component. Used to conditionally render the different sections of the portfolio */

import React from 'react';
import ContactModal from './ContactModal';

const Navigation = () => {
    return (
        <nav> 
            <div className="nav-wrapper">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons text-darken-4 cyan-text">menu</i></a>
				<ul className="hide-on-med-and-down">
					<li><a className="nav-tab" href="index.html">About Me</a></li>
					<li><a className="nav-tab" href="#portfolio-container">Portfolio</a></li>
					<li><a className="nav-tab modal-trigger" href="#modal2">Contact Me</a></li>
				</ul>
            </div>
            <ContactModal/>
        </nav>
    )
}

export default Navigation;