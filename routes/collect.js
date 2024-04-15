const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');
const Form = require('../models/form'); 
const router = express.Router();
const { google } = require('googleapis');

// Middleware for parsing JSON bodies
router.use(bodyParser.json());

// Google Sheets API setup
const credentials = require('../credentials.json')
const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
const auth = new google.auth.JWT(credentials.client_email, null, credentials.private_key, scopes);
const sheets = google.sheets({ version: 'v4', auth });

// Google Sheet ID
const spreadsheetId = '1rPdP6RLQAWKhMuXlhrypKaBafxPHfiW4nwTiO4MNd-Y';

// Function to append data to Google Sheet
async function appendToSheet(data) {
    const request = {
        spreadsheetId,
        range: 'Sheet1!A:D',
        valueInputOption: 'RAW',
        resource: {
            values: [Object.values(data)] // Convert data object to array of values
        }
    };

    try {
        await sheets.spreadsheets.values.append(request);
    } catch (error) {
        console.error('Error appending data to Google Sheet:', error);
    }
}

// Route to handle form submission
router.post('/submit', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Validate name length
        if (name.length < 4) {
            return res.status(400).json({ error: 'Name must be 4 characters or more' });
        }

        // Validate email and phone 
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        if (!validator.isMobilePhone(phone, 'any', { strictMode: false }) || phone.length !== 10) {
            return res.status(400).json({ error: 'Phone number must be 10 digits' });
        }

        const form = new Form({ name, email, phone, message });
        await form.save(); 

        // Save form data to Google Sheet
        await appendToSheet({ name, email, phone, message });

        res.status(200).json({ message: 'Form data submitted successfully' });
    } catch (err) {
        console.error('Error submitting form data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
