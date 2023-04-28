import React, { useState } from 'react';

function ContactUs() {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your code to send the user input to the backend or display a success message here
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={userInput.message}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
