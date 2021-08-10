import React, {useEffect} from 'react';
import Project from '../Project';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Portfolio = () => {

     // Register scroll trigger plugin
     gsap.registerPlugin(ScrollTrigger);

     useEffect(() => {
        gsap.from('.row', {
            scrollTrigger: {
              trigger: ".section-name",
              
             },
            opacity: 0,
            duration: 1,
            x: 60
        });
    }, []);

    const row1 = [
        {
            id: 1,
            src: '/grademy.png',
            alt: 'Grademy screenshot', 
            link: 'https://grademy.herokuapp.com/',
            description: 'An all-in-one learning application for students and admin. Users are able to access their courses and communicate in real-time through an integrated chat window.',
            tech: 'JS, Node.js, Socket.io, Sequelize, Bcrypt, Dotenv, MySQL, MySQL2, Express, Express Session, Connect-Session-Sequelize, Handlebars, and Materialize',
            github: 'https://github.com/micheqn3/grademy'
        },
        {
            id: 2,
            src: '/techblog.png',
            alt: 'Tech blog screenshot', 
            link: 'https://my-tech-blog-micheqn3.herokuapp.com/',
            description: "A CMS blog site where developers can publish their blog posts and comment on other developers' posts as well.",
            tech: 'JS, Node.js, Sequelize, Bcrypt, Dotenv, MySQL, MySQL2, Express, Express Session, Connect-Session-Sequelize, Handlebars, and Materialize',
            github: 'https://github.com/micheqn3/my-tech-blog'
        }
    ]

    const row2 = [
        {
            id: 3,
            src: '/photobomb.png',
            alt: 'Photobomb screenshot', 
            link: 'https://reddituser7777.github.io/PhotoBomb/index.html',
            description: "A wallpaper app that will curate wallpapers the user may like based on their 'likes' and 'dislikes' from a quick assessment.",
            tech: 'JS, jQuery, Materialize, Unsplash API, and T.LY API',
            github: 'https://github.com/micheqn3/PhotoBomb'
        },
        {
            id: 4,
            src: '/workout-tracker.png',
            alt: 'Workout tracker screenshot', 
            link: 'https://workout-tracker-micheqn3.herokuapp.com/',
            description: "A workout tracker that allows the user to view, create, and track daily workouts.",
            tech: 'JS, Node.js, MongoDB, Express, Mongoose, Morgan, and Nodemon',
            github: 'https://github.com/micheqn3/workout-tracker'
        }
    ]

    const row3 = [
        {
            id: 5,
            src: '/budget-tracker.png',
            alt: 'Budget tracker screenshot', 
            link: 'https://progressive-budget-micheqn3.herokuapp.com/',
            description: "A PWA application that allows the user to track their personal finances",
            tech: 'JS, Node.js, IndexedDB, MongoDB, Express, Mongoose, Compression, and Nodemon',
            github: 'https://github.com/micheqn3/progressive-budget'
        },
        {
            id: 6,
            src: '/weather-dash.png',
            alt: 'Weather dashboard screenshot', 
            link: 'https://micheqn3.github.io/weather-dashboard/',
            description: "This application uses OpenWeather API to fetch 5-day weather data for the user to view.",
            tech: 'JS, jQuery, Materialize, Unsplash API, and T.LY API',
            github: 'https://github.com/micheqn3/weather-dashboard'
        },
    ]

    return (
        <div id="portfolio-container" className="anchor">
            <div className="portfolio-section section portfolio-container-holder">
                <div className="container">
                    <h1 className="center-align section-name">My Work</h1>
                    <h6 className="center-align">Here are some of my latest projects.</h6>
                    <div id="portfolio" className="main-nav">
                        <div className="row"> {/* Row 1 */}
                        {row1.map(proj => <Project src={proj.src} alt={proj.alt} link={proj.link} description={proj.description} tech={proj.tech} github={proj.github} key={proj.id}/>)}
                        </div>
                        <div className="row"> {/* Row 2 */}
                        {row2.map(proj => <Project src={proj.src} alt={proj.alt} link={proj.link} description={proj.description} tech={proj.tech} github={proj.github} key={proj.id}/>)}
                        </div>
                        <div className="row"> {/* Row 3 */}
                        {row3.map(proj => <Project src={proj.src} alt={proj.alt} link={proj.link} description={proj.description} tech={proj.tech} github={proj.github} key={proj.id}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;