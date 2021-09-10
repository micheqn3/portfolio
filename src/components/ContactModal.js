/* Contact modal used in nav component */

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
            <div className="modal-content center-align black-text">
                <h4>Send Message</h4>
                <div className="input-field col s12 l6 offset-l3">
                    <input 
                    className="black-text"
                    placeholder="Name" 
                    type="text" 
                    className="center-align"
                    onChange={handleInputChange}
                    value={name}
                    name="name"
                    />
                    <input 
                    placeholder="Email" 
                    type="text" 
                    className="center-align"
                    onChange={handleInputChange}
                    value={email}
                    name="email"
                    />
                    <input 
                    placeholder="Message" 
                    type="text" 
                    className="center-align"
                    onChange={handleInputChange}
                    value={message}
                    name="message"
                    />
                    <button onClick={handleFormSubmit} id="submit-btn" className="col s6 m6 l6 my-btn btn-small waves-light waves-effect">Submit</button>
                    {errorMessage && (
                        <div>
                            <p className="red-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContactModal;

