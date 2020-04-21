const Student = require('../models/Student');

module.exports = { 

    async store(req, res) { 

        const { name, email, password } = req.body;
        
        const studentExists = await Student.findOne({ email });
        
        if (studentExists) { 
          return res.json(studentExists);
        } 

        const student = await Student.create({ 
            name,
            email,
            password
        });
            
        return res.status(201).json(student);
        
    }

};
