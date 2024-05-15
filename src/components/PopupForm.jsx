import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './PopupForm.css';
import axios from 'axios';

function PopupForm() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Timer expired, making form visible");
            setVisible(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        console.log("Closing form");
        setVisible(false);
    };

    const validateForm = () => {
        const errors = {};

        if (name.trim() === '') {
            errors.name = 'Name is required';
        } else if (name.length > 50) {
            errors.name = 'Name should not exceed 50 characters';
        }

        if (email.trim() === '') {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (!value) {
            errors.phone = 'Phone number is required';
        }

        if (message.trim() === '') {
            errors.message = 'Message is required';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setSubmitting(true);

            try {
                // Make an HTTP POST request to your API endpoint
                const response = await fetch("http://localhost:5000/api/collect/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: value,
                        message: message

                    }),

                    mode: "cors",
                    referrerPolicy: "origin-when-cross-origin",
                });

                const data = await response.json();

                console.log("API response:", data);

                // Reset form fields and state after successful submission
                setName('');
                setEmail('');
                setValue('');
                setMessage('');
                setSubmitting(false);
            } catch (error) {
                console.error("Error submitting form:", error);
                // Handle error
                setSubmitting(false);
            }
        }
    };

    return (
        <div className={`full-page ${visible ? 'visible' : 'hidden'}`}>
            <div className="form-container">
                <div style={{ marginLeft: "420px", marginTop: "-10px" }}>
                    <button className='cross' type="button" onClick={handleClose} style={{ backgroundColor: "transparent" }}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div>
                    <h4 className="form-heading">Hi Techie &#x1F44B;<br/>Interested in elevating your career? <br/>Request a callback</h4>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} placeholder="Enter name" required onChange={(e) => setName(e.target.value)} />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} placeholder="Enter email id" required onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label><br /><br />
                        <PhoneInput
                            placeholder="Enter phone number"
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                            value={value}
                            onChange={setValue}
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" value={message} placeholder="Leave a comment here" id="message" style={{ height: '100px' }} onChange={(e) => setMessage(e.target.value)}></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>

                    <button type="submit" disabled={submitting}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PopupForm;
