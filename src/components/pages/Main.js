import React from 'react'

const Main = () => {
    return (
        <div>
            <div className= "hero-container hero-image">
                <div className= "hero-text">
                    <h1 className= "section-title">Michelle Nguyen.</h1>
                    <br></br>
                    <h6>Building things for the web.</h6>
                </div>
		    </div> 
            <div id="about-me" className="aboutme-container">
                <div className="section white">
                    <div className="row container">
                    <h1 className="center-align section-name">About Me</h1>
                        <div className="col l6 s12 center-align">
                            <img src={process.env.PUBLIC_URL + '/images//5-2021-1.JPG'} alt= "Avatar" className= "selfie"></img>
                        </div>
                        <br></br><br></br><br></br>
                        <div className="col l6 s12 center-align">
                            <p className="center-align grey-text text-darken-3 lighten-3 about-p">Hi! My name is Michelle!</p>
                            <p className="center-align grey-text text-darken-3 lighten-3 about-p">I am a full stack developer based in Orange County, CA. I enjoy creating things on the internet and am always looking forward to learning new technologies.</p><br></br>
                            <p className="center-align grey-text text-darken-3 lighten-3 about-p">Here are a few technologies/languages I've been working with recently:</p>
                            <ul className= "tech-list">
                                <li className= "tech-item center-align">JavaScript</li>
                                <li className= "tech-item center-align">C++</li>
                                <li className= "tech-item center-align">Node.js</li>
                                <li className= "tech-item center-align">MySQL</li>
                                <li className= "tech-item center-align">Express</li>
                                <li className= "tech-item center-align">Socket.io</li>
                                <li className= "tech-item center-align">jQuery</li>
                                <li className= "tech-item center-align">Sequelize</li>
                                <li className= "tech-item center-align">Bootstrap/Materialize</li>
                            </ul>  {/* Modal 1 trigger for resume */}
                            <a className="my-btn waves-effect waves-light btn-large modal-trigger resume-btn" href="#modal1"><i className="material-icons right">add</i>View my resume</a>
                        </div>
                    </div>
                </div>
                {/* Insert modal here */}
            </div>
        </div>

    )
}

export default Main;