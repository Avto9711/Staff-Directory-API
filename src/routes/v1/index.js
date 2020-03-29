const departmentController =  require('../../controllers/departments/v1')
const rolesController =  require('../../controllers/roles/v1')
const employeeController =  require('../../controllers/employees/v1')

module.exports = app => {
    app.get('/', function(req,res){
        res.send("Online")
    });
    app.use('/api/v1/departments', departmentController);
    app.use('/api/v1/roles', rolesController);
    app.use('/api/v1/employees', employeeController);

    
};

