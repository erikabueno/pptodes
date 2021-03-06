const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({ 
  name: { 
    type: String,
    required: true
  },
  slug: { 
    type: String,
    required: true
  },
  description: { 
    type: String,
    required: true
  },
  instructors: { 
    type: [String],
    required: true
  },
  keywords: { 
    type: [String],
    required: true
  },
  price: { 
    type: Number,
    required: true
  },
  hours: { 
    type: Number,
    required: true
  },
  enrolled: { 
    type: [String], 
    required: false
  },
  approved: { 
    type: [String], 
    required: false
  }
}, { 
  timestamps: true
});

module.exports = model('Course', CourseSchema);