var router = require('express').Router();

const { 
    getSalesBySessionId,
    clientSalesStatus
    
} = require('../../controllers/web/client-sale-controller');


router.get('/',getSalesBySessionId);
router.post('/',clientSalesStatus);

module.exports = router;