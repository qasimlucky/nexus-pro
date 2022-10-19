const mongoose = require('mongoose');

const addSalesSchema = new mongoose.Schema({
    
  client_id: {
    type: String,
  },
  sale_id: {
    type: String,
  },
    barcode: {type: String,
        default: null
      },
     date_of_barcode: {type: String,
        default: null
      },
    product_item: {type: String,
        default: null
      },
    receipt: {type: String,
        default: null
      },
    tracking_url: {type: String,
        default: null
      },
      status: {type: String,
        default: "new"
      },

  created_at:{
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updated_at:{
    type: Date,
    default: () => Date.now(),
  },
})

module.exports = mongoose.model('addSale', addSalesSchema)