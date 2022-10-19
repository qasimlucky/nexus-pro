var router = require('express').Router();
const multer  = require('multer')
const path = require("path");

const { 
    addSales,
    storage,
    getSales,
    adminGetSales,
    adminGetAllSales,
    adminUpdateSales

} = require('../../controllers/web/sale-controller.js');



const maxSize = 1 * 1000 * 1000 *10000;
var upload = multer({ storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){
    
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }else{            
          cb("Error: File upload only supports the " + "following filetypes - " + filetypes); 
        }
      
        
      } 
}).single('file');


router.post('/add',upload, addSales);
router.post('/get',getSales);
router.post('/admin-get',adminGetSales);
router.get('/all',adminGetAllSales);
router.post('/update',upload,adminUpdateSales);


module.exports = router;