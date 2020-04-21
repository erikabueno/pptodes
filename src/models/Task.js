const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    student_id: { 
        type: String,
        required: true
    },
    course_id: { 
        type: String,
        required: true
    },
    class: { 
        type: Number,
        required: false
    },
    exercise: { 
        type: Number,
        required: false
    },
    repl: { 
        type: String,
        required: false
    },
    corrected: { 
        type: Boolean,
        required: false
    },
    accepted: { 
        type: Boolean,
        required: false
    },
    feedback: { 
        type: String,
        required: false
    }
}, { 
    timestamps: true
});

module.exports = model('Task', TaskSchema);