const {
    employees
} = require("../../../model/employee")
const 
    roles
 = require("../../../model/role")
const 
    department
 = require("../../../model/department")
const router = require('express').Router();

const getEmployees = async (req, res) => {

    let options = {
        include: [
            roles,
            department
        ]
    }
    let data = await employees.findAndCountAll(options);
    res.json(data);
}

router.get('/', getEmployees);

module.exports = router;