import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [prompt, setPrompt] = useState('Your Message');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [displayFeedback, setDisplayFeedback] = useState(false);


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    console.log('do we get here?');
    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (errorMessage !== '') {
      setErrorMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check all user input
    if (!userName || !email || !message) {
      setErrorMessage('Please fill out the form completely');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Please, the provided Email is invalid!');
      return;
    }

    // Clear out the input after a successful user submission.
    setUserName('');
    setPrompt('Thank you!');
    setMessage('');
    setEmail('');
    setDisplayFeedback(true);
  };

  return (
    <div className="container contact mb-5">
      <div class="py-3 text-center">
        <h1>Contact Me</h1>
      </div>

      {displayFeedback && <p className="lead px-4">Thanks {userName} for contacting me. Your message has been received. Have a great day! </p>}

      <div >
        <form className="form">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="...full name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="...email address"
          />
          <div className="input-group">
            <span className="input-group-text">{prompt}</span>
            <textarea class="form-control"
              aria-label="With textarea"
              value={message}
              name="message"
              onChange={handleInputChange}
              placeholder="..."
            ></textarea>
          </div>

          <button className="w-100 btn btn-primary btn-lg mt-5" type="button" onClick={handleFormSubmit}>Send</button>
        </form>
        {errorMessage && <div><p className="error-text">{errorMessage}</p></div>}
      </div>
    </div>
  );
}
