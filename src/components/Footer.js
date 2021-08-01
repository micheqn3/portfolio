/* Footer component appears on every page */

// Import components and gsap plugins
import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {

    // Register scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from(['.copyright', 'i'], {
            scrollTrigger: {
              trigger: "#footer",
              
             },
            opacity: 0,
            duration: 1,
            y: 60
        });
    },[])

    return (
        <footer id='footer'>
            <ul className="footer-top">
                <li className='social-effect'>
                    <a className="tooltipped" data-position="top" data-tooltip="Email" href="mailto:michellenguyen11239@aol.com">
                        <i className="fa fa-envelope fa-2x pinkicon"></i>
                    </a>
                </li>
                <li className='social-effect'>
                    <a className="tooltipped" data-position="top" data-tooltip="Github" href="https://github.com/micheqn3">
                        <i className="fab fa-github-square fa-2x pinkicon"></i>
                    </a>
                </li>
                <li className='social-effect'>
                    <a className="tooltipped" data-position="top" data-tooltip="LinkedIn" href="https://www.linkedin.com/in/michelle-nguyen-3a2132200/">
                        <i className="fab fa-linkedin fa-2x pinkicon"></i>
                    </a>
                </li>
            </ul>
            <div className="align-center black-text copyright">
                © 2021 Made with<i className="fas fa-heart pinkicon"></i>by Mich
            </div>
		</footer> 
    )
}

export default Footer;