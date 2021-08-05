/* Main page with about me section */

// Import components and gsap plugins
import React, {useEffect} from 'react';
import ResumeModal from '../ResumeModal';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Main = () => {

    // Register scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from(".tech-img", {
            duration: 3,
            opacity: 0,
        });
    }, []);
    
    useEffect(() => {
        gsap.from(".section-title", {
            scale: 0.4,
            ease: "slow"
        });
    }, []);

    useEffect(() => {
        gsap.from([".tech-list", ".intro", ".section-name"], {
            scrollTrigger: {
              trigger: ".section-name",
              
             },
            opacity: 0,
            duration: 1,
            x: 60
        });
    }, []);

    useEffect(() => {
        gsap.from('.selfie', {
            scrollTrigger: {
              trigger: ".section-name",
              
             },
            opacity: 0,
            duration: 1,
            y: 60
        });
    }, []);

    return (
        <div id="main">
            <div className= "hero-container hero-image">
                <img src={process.env.PUBLIC_URL + '/images/tech.svg'} alt= "Programmer SVG" className= "tech-img"></img>
                <div className= "hero-text">
                    <h1 className= "section-title">Michelle Nguyen.</h1>
                    <br></br>
                    <h6>Building things for the web.</h6>
                </div>
		    </div> 
            <div id="about-me" className="aboutme-container anchor">
                <div className="section white">
                    <div className="row container">
                    <h1 className="center-align section-name">About Me</h1>
                        <div className="col l6 s12 center-align">
                            <img src={process.env.PUBLIC_URL + '/images/5-2021-1.JPG'} alt= "Profile" className= "selfie"></img>
                        </div>
                        <br></br><br></br><br></br>
                        <div className="col l6 s12 center-align">
                            <p className="center-align grey-text text-darken-3 lighten-3 about-p intro">Hi! My name is Michelle!</p>
                            <p className="center-align grey-text text-darken-3 lighten-3 about-p intro">I am a full stack developer based in Orange County, CA. I enjoy creating things on the internet and am always looking forward to learning new technologies.</p><br></br>
                            <p className="center-align grey-text text-darken-3 lighten-3 about-p intro">Here are a few technologies/languages I've been working with recently:</p>
                            <ul className= "tech-list">
                                <li className="center-align">- HTML + CSS</li>
                                <li className="center-align">- JavaScript</li>
                                <li className="center-align">- Node.js</li>
                                <li className="center-align">- MongoDB</li>
                                <li className="center-align">- MySQL</li>
                                <li className="center-align">- Mongoose</li>
                                <li className="center-align">- Sequelize</li>
                                <li className="center-align">- Express</li>
                                <li className="center-align">- jQuery</li>
                                <li className="center-align">- Bootstrap + Materialize</li>
                            </ul>  {/* Modal 1 trigger for resume */}
                            <a className="my-btn waves-effect waves-light btn-large modal-trigger resume-btn" href="#modal1"><i className="material-icons right">add</i>View my resume</a>
                        </div>
                    </div>
                </div>
                {<ResumeModal/>}
            </div>
        </div>
    )
}

export default Main;