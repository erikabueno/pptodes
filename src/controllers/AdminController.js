const Admin = require('../models/Admin');

module.exports = { 

    async store(req, res) { 

        const { name, email, password } = req.body;
        
        const adminExists = await Admin.findOne({ email });
        
        if (adminExists) { 
          return res.json(adminExists);
        } 
        
        const admin = await Admin.create({ 
          name,
          email,
          password
        });
        
        return res.status(201).json(admin);
    
    }

};
