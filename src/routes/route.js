const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const {name, doSomething} = require('./common')

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', name)
    res.send('Hello there, welcome to this application!')
});

router.get('/test-we', function (req, res) {
    // console.log('This is the constant I created', doSomething())
    res.send('Hello there, welcome to this application!' + doSomething())
});

module.exports = router;