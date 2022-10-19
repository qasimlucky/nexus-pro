var router = require('express').Router();

const { 
    createClient,
    getClient,
    deleteClient,
    updateClient
} = require('../../controllers/web/admin-client-controller.js');


router.get('/',getClient);
router.post('/add', createClient);
router.post('/delete',deleteClient);
router.post('/update',updateClient);

module.exports = router;
