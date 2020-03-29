const {db} =  require('../squalize/index')
const Sequelize = require('sequelize');
const roles = require('./role')
const department = require('./department')

let employees =  db.define("employees",{
    employeeId : {
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    fullName:{
        type: Sequelize.STRING
    },
    roleId: {
        type: Sequelize.INTEGER
    },
    departmentId: {
        type: Sequelize.INTEGER
    },
    isChairman: {
        type: Sequelize.BOOLEAN
    },
    isViceChairman: {
        type: Sequelize.BOOLEAN
    },
    deleted: {
        type: Sequelize.BOOLEAN
    },
    isPublished: {
        type: Sequelize.BOOLEAN
    }
})


employees.hasOne(roles, { foreignKey: 'roleId',sourceKey: "roleId"});
employees.hasOne(department, { foreignKey: 'departmentId', sourceKey: "departmentId" });

exports.employees = employees;