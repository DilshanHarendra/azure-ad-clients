const express = require('express');

// initialize router
const router = express.Router();

router.get('/todolist', (req, res) => {
    res.status(200).send({todolist:[]})
});

module.exports = router
