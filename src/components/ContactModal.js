import React, {useState} from 'react';

const ContactModal = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handles user input changes
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Set the state for inputs
        if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'email') {
          setEmail(inputValue);
        } else {
          setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Checking for valid inputs
        if (!name || !email || !message) {
          setErrorMessage('* All fields are required.');
          return;
        } else {
        fetch("https://api.apispreadsheets.com/data/12070/", {
            method: "POST",
            body: JSON.stringify({"data": {"email":email ,"message":message ,"full_name":name}}),
        }).then(res =>{
            if (res.status === 201){
            // SUCCESS
            console.log('Succesful post.');
            window.location.reload();
            } else{
            // ERROR
            console.log('Something went wrong.');
            }
        })
    }
        // Clear inputs after success
        setName('');
        setEmail('');
        setMessage('');
    };
    
    return (
        <div id="modal2" className="modal">
            <div className="modal-content black-text center-align">
                <h5>Send Me A Message</h5>
                <div className="row">
                    <form id="myForm" className="col s12 form-center">
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={name} id="full_name" type="text" name="name" onChange={handleInputChange}></input>
                                <label className="black-text">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={email} id="email" type="text" name="email" onChange={handleInputChange}></input>
                                <label className="black-text">Email</label>
                            </div>
                        </div>
                        <div className="row">
							<div className="input-field col s12">
								<input value={message} id="message" type="text" name="message" onChange={handleInputChange}></input>
								<label className="black-text">Message</label>
							</div>
						</div>
                        {errorMessage && (
                            <small id="all-fields" className="black-text">{errorMessage}</small>
                        )}
                    </form>
                </div>
            </div>
             <div className="modal-footer">
                <div className="row center-align">
                    <button onClick={handleFormSubmit} id="submit-btn" className="col s6 m6 l6 my-btn btn-small waves-light waves-effect">Submit</button>
                    <a href="#!" className="col s6 m6 l6 modal-close waves-effect waves-light btn-small my-btn">Close</a>
                </div>
            </div>
        </div> 
    )
}

export default ContactModal;

