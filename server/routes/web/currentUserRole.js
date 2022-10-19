var router = require('express').Router();

const { 
    currentUser
} = require('../../controllers/web/current-user-role.js');


router.get('/',currentUser);

module.exports = router;