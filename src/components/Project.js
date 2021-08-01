/* Project component to render all projects in portfolio page */
import React from 'react';

const Project = (props) => {
    return (
        <div key={props.id} className="col s12 l6">
            <div className="proj-wrapper project-effect"> 
                <img className="responsive-img" src={process.env.PUBLIC_URL + '/images' + props.src} alt={props.alt}/> 
                <div className="proj-content"> 
                    <p className="center-align">
                        <a href={props.link} className="waves-effect waves-light btn-small btn proj-btn">Click Me</a>
                    </p>
                    <p>{props.description}</p>
                    <p>Technologies: {props.tech}</p>
                    <div className="center-align">
                        <a className="black-text underline" href={props.github}>Link to repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;

