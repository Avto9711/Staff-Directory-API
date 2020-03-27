const departmentController =  require('../../controllers/departments/v1')

module.exports = app => {
    app.use('/api/v1/departments', departmentController)
};