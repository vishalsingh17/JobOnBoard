import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './PopupForm.css';

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
            setVisible(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
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
                const response = await fetch("http://localhost:5000/api/collect/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone: value,
                        message
                    }),
                    mode: "cors",
                    referrerPolicy: "origin-when-cross-origin",
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

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
                setSubmitting(false);
            }
        }
    };

    return (
        <div className={`full-page ${visible ? 'visible' : 'hidden'}`}>
            <div className="form-container">
                <button className='cross' type="button" onClick={handleClose} aria-label="Close form">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="form-content">
                    <h4 className="form-heading">Hi Techie &#x1F44B;<br />Interested in elevating your career? <br />Request a callback</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            {/* <label htmlFor="name">Name:</label> */}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Enter your name"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <p> </p>
                            {/* <label htmlFor="email">Email:</label> */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email id"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <p> </p>
                            {/* <label htmlFor="phone">Phone Number:</label> */}
                            <PhoneInput
                                placeholder="Enter your phone number"
                                countryCallingCodeEditable={false}
                                defaultCountry="IN"
                                value={value}
                                onChange={setValue}
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <p> </p>
                            {/* <label htmlFor="message">Message:</label> */}
                            <textarea
                                className="form-control"
                                value={message}
                                placeholder="Leave your comments / suggestions here"
                                id="message"
                                style={{ height: '100px' }}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>

                        <div className="button-container">
                            <button type="submit" disabled={submitting}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="image-container">
                    <img src="PopFormImg.png" alt="Welcome" />
                </div>
            </div>
        </div>
    );
}

export default PopupForm;
