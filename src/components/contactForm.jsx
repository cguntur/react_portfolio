import { useState } from 'react';

//TODO: Make sure the form is working smoothly when I press tab

function ContactForm() {
    //set variables for the form fields using useState

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmptyInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        
        if(value == ""){
            alert(`Please enter a value for ${name}`);
        }

        if(name == "email"){
            emailVerification(value);
        }
    }

    const emailVerification = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValidEmail = emailRegex.test(email);

        if(!isValidEmail){
            alert("Please enter a valid email.");
        }

    }
    const handleInputChange = (e) => {
        //Get the value of the input that triggered the change
        const { name, value } = e.target;
        

        switch (name) {
            case 'firstName':
              setFirstName(value);
              break;
            case 'lastName':
                setlastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
          }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Hello ${firstName} ${lastName}`);
    };

    return (
        <div className="container text-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <input
                    className="form-control"  
                    value={firstName}
                    name="firstName"
                    onBlur={handleEmptyInput}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        value={lastName}
                        name="lastName"
                        onBlur={handleEmptyInput}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                </div>  
                <div className="form-group">
                    <input
                        className="form-control"
                        value={email}
                        name="email"
                        onBlur={handleEmptyInput}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={message}
                        name="message"
                        onBlur={handleEmptyInput}
                        onChange={handleInputChange}
                        placeholder="Please enter your message here"
                        rows="3"
                    />
                </div>
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      );
}

export default ContactForm;