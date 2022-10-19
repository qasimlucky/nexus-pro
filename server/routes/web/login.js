var router = require('express').Router();

const { 
    clientLogin
} = require('../../controllers/web/login-controller.js');


router.post('/',clientLogin);

module.exports = router;