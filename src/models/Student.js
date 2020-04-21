const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({ 
  name: { 
    type: String,
    required: true
  },
  email: { 
    type: String,
    required: true
  },
  password: { 
    type: String,
    required: true
  },
  certificates: { 
    type: [String],
    required: false
  },
  tasks: { 
    type: [String],
    required: false
  }
}, { 
  timestamps: true
});

module.exports = model('Student', StudentSchema);