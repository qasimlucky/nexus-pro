const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    
  client_id: {
    type: String,
    required: true,
  },
  session_data: {type: String,
    default: null
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

module.exports = mongoose.model('Store_session', SessionSchema)