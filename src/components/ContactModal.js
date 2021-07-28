import React from 'react';

const ContactModal = () => {
    return (
        <div id="modal2" className="modal">
            <div className="modal-content black-text center-align">
                <h5>Send Me A Message</h5>
                <div className="row">
                    <form id="myForm" className="col s12 form-center">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="full_name" type="text" name="full_name"></input>
                                <label class="black-text">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="text" name="email"></input>
                                <label class="black-text">Email</label>
                            </div>
                        </div>
                        <div class="row">
							<div class="input-field col s12">
								<input id="message" type="text" name="message"></input>
								<label class="black-text">Message</label>
							</div>
						</div>
                        <small id="all-fields" class="black-text">*All fields are required</small>
                    </form>
                </div>
            </div>
             <div className="modal-footer">
                <div className="row center-align">
                    <button id="submit-btn" class="col s6 m6 l6 my-btn btn-small">Submit</button>
                    <a href="#!" className="col s6 m6 l6 modal-close waves-effect waves-green btn-small my-btn">Close</a>
                </div>
            </div>
        </div> 
    )
}

export default ContactModal;

