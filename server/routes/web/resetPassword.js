var router = require('express').Router();

const { 
    resetPassword
} = require('../../controllers/web/reset-password-controller.js');


router.post('/',resetPassword);

module.exports = router;