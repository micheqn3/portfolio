/* Navigation component. Used to conditionally render the different sections of the portfolio */

import React from 'react';
import ContactModal from './ContactModal';

const Navigation = ({page, handlePageChange}) => {
    return (
        <nav> 
            <div className="nav-wrapper">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons text-darken-4 cyan-text">menu</i></a>
				<ul className="hide-on-med-and-down">
					<li><a onClick={() => handlePageChange('main')} className={page === 'main' ? 'nav-tab active-nav' : 'nav-tab'} href="index.html">About Me</a></li>
					<li><a onClick={() => handlePageChange('portfolio')} className={page === 'portfolio' ? 'nav-tab active-nav' : 'nav-tab'} href="#portfolio-container">Portfolio</a></li>
					<li><a className="contact-btn my-btn waves-effect waves-light btn-small modal-trigger" href="#modal2">Contact Me</a></li>
				</ul>
            </div>
            <ContactModal/>
        </nav>

    )
}

export default Navigation;