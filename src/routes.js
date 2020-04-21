const express = require('express');
const routes = express.Router();
const StudentController = require('./controllers/StudentController');
const AdminController = require('./controllers/AdminController');

// create Student
routes.post('/student', StudentController.store);

// create Admin
routes.post('/admin', AdminController.store)

module.exports = routes;