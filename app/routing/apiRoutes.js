const express = require('express');
const path = require('path');
const router = express.Router();

const friends = require('../data/friends');

// GET request to display JSON object of all submitted friends
router.get('/friends', (req, res) => {
    return res.json(friends);
});

// POST request for new friend
router.post('/friends', (req, res) => {

    // Declare newFriend variable, set to the body of the POST request
    let newFriend = req.body;

    // Log the newFriend in the console
    console.log(newFriend);

    // Add newFriend to friendArr array
    friends.push(newFriend);

    // POST the newFriend as a JSON object to the server at /api/reserve
    res.json(newFriend);
});

module.exports = router;