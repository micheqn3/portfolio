/* Used to conditionally render the different sections of your portfolio */
import React from 'react';
import ContactModal from './ContactModal';

const Navigation = ({page, handlePageChange}) => {
    return (
        <nav>
            <div className="nav-wrapper">
				<ul className="hide-on-med-and-down">
					<li><a onClick={() => handlePageChange('main')} className="nav-tab" href="index.html">Home</a></li>
					<li><a onClick={() => handlePageChange('main')} className="nav-tab" href="#about-me">About Me</a></li>
					<li><a onClick={() => handlePageChange('portfolio')} className="nav-tab" href="#portfolio">Portfolio</a></li>
					<li><a className="contact-btn my-btn waves-effect waves-light btn-small modal-trigger" href="#modal2">Contact Me</a></li>
				</ul>
            </div>
            <ContactModal/>
        </nav>
    )
}

export default Navigation;