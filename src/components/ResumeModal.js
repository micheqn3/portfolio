import React from 'react';

const ResumeModal = () => {
    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                <div className="row">
                    <div className="col s12">
                        <div className="row center-align">
                            <h2 className="underline font16"><strong>Education</strong></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3 m4">
                        <p className="center-align"><strong>2021 - Present</strong></p>
                    </div>
                    <div className="col s9 m8">
                        <p className="center-align"><strong>Certificate, Full Stack Web Development</strong></p>
                        <p className="center-align">University of California, Irvine</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3 m4 ">
                        <p className="center-align"><strong>2016 - 2021</strong></p>
                    </div>
                    <div className="col s9 m8">
                        <p className="center-align"><strong>Bachelor of Science in Health Science</strong></p>
                        <p className="center-align">California State University, Fullerton</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <h2 className="center-align underline font16"><strong>Technical Skills</strong></h2>
                        </div>
                        <ul>
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
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h2 className="underline font16 center-align"><strong>Related Courses at CSUF</strong></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <p className="center-align"><strong>CPSC 120</strong></p>
                        <p>This course comprises of the theory and practice of computer programming, computation terminology, top down design, the roles of hardware and compilers, structured problem solving, programming language syntax and semantics, technical reading, pseudocode, debugging, data representation, file input/output, functions, and arrays, with a focus on C++. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h2 className="underline font16 center-align"><strong>Recent Projects</strong></h2>
                        <p className="center-align font16"><strong>Grademy</strong></p>
						<p><strong>Description:</strong> An all-in-one learning application for students and admin. Users are able to access their courses, perform CRUD operations, and communicate in real-time through an integrated chat window.</p>
						<p className="center-align"><strong>Technologies used:</strong></p>
						<p className="center-align">JavaScript, Node.js, Socket.io, Sequelize, Bcrypt, Dotenv, MySQL, MySQL2, Express, Express Session, Connect-Session-Sequelize, Handlebars, and Materialize</p>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <p className="center-align font16"><strong>Tech Blog</strong></p>
                        <p><strong>Description:</strong> A CMS blog site where developers can publish their blog posts and comment on other developers' posts as well.</p>
                        <p className="center-align"><strong>Technologies used:</strong></p>
                        <p className="center-align">JavaScript, Node.js, Sequelize, Bcrypt, Dotenv, MySQL, MySQL2, Express, Express Session, Connect-Session-Sequelize, Handlebars, and Materialize</p>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <p className="center-align font16"><strong>PhotoBomb</strong></p>
                        <p><strong>Description:</strong> An application for users who are looking for a wallpaper for their device. Following retrieval of the user’s current likes, the application gives a weight to each photo category and curates personalized wallpapers. Users also have the option to search through categories and keywords for photos they would like to save, download, and send.</p>
                        <p className="center-align"><strong>Technologies used:</strong></p>
                        <p className="center-align">JavaScript, jQuery, Materialize, Unsplash API, and T.LY URL shortener</p>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <p className="center-align font16"><strong>Workout Tracker</strong></p>
                        <p><strong>Description:</strong> A workout tracker that allows the user to view, create, and track daily workouts. Users can also view stats from the last 7 workouts.</p>
                        <p className="center-align"><strong>Technologies used:</strong></p>
                        <p className="center-align">JavaScript, Node.js, MongoDB, Express, Mongoose, Morgan, and Nodemon</p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className="row center-align">
					<a className="col s12 m4 l12 my-btn btn-small" href="https://github.com/micheqn3/uci-unit8-portfolio2/blob/main/Assets/Resume%202021.pdf" download>Download PDF</a>
					<a className="col s12 m4 l12 my-btn btn-small" href="https://www.linkedin.com/in/michelle-nguyen-3a2132200/"> View LinkedIn Profile</a>
					<a href="#!" className="modal-close waves-effect waves-light btn-flat">Close</a>
				</div>
            </div>
        </div>
    )

}

export default ResumeModal;