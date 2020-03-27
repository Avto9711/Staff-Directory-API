const {db} =  require('../squalize/index')
const Sequelize = require('sequelize');

exports.employees =  db.define("employee",{
    employeeId,
    fullName,
    roleId,
    departmentId,
    isChairman,
    isViceChairman,
    deleted,
    isPublished
})