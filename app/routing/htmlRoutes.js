const express = require('express');
const path = require('path');
const router = express.Router();

// GET request for landing page
router.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET request for survey
router.get('/survey', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// GET request for app functionality
router.get('/app', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/assets/app.js'));
});

module.exports = router;