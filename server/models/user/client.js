const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    
  client_id: {
    type: String,
    required: true,
  },
  first_name: {type: String,
    default: null
  },
  last_name: {type: String,
    default: null
  },
  email: {type: String,
    default: null
  },
  phone_number: {type: String,
    default: null},

    office_name: {type: String,
      default: null
    },
    address: {type: String,
      default: null
    },
    client_status: {type: String,
      default: null
    },
    role: {type: String,
      default: null
    },
    password: {type: String,
      default: 12345
    },
    client_index: {type: String
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

module.exports = mongoose.model('client', ClientSchema)