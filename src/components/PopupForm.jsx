import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import './PopupForm.css';

function PopupForm() {
    const [visible, setVisible] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        // Add your form submission logic here
    };

    const [value, setValue] = useState()

    return (
        <div className={`full-page ${visible ? 'visible' : 'hidden'}`}>
            <div className="form-container">
                <div style={{ marginLeft: "420px", marginTop: "-10px" }}>
                    <button className='cross' type="button" onClick={handleClose} style={{ backgroundColor: "transparent" }}>
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>


                <div >
                    <h4 className="form-heading">Want a free career consultant? &#x1F44B;<br />Request a call back</h4>
                </div>


                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter email id" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label><br /><br />
                        <PhoneInput
                            placeholder="Enter phone number"
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                            value={value}
                            onChange={setValue} />
                    </div>

                    <div class="form-floating">
                    <label htmlFor="domain">Message</label>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PopupForm
