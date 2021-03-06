const {db} =  require('../squalize/index')
const Sequelize = require('sequelize');

let department = db.define('department',{
    departmentId: {
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING
    },
    code:{
        type:Sequelize.INTEGER
    },
    deleted:{
        type: Sequelize.BOOLEAN,
        allowNull:true
    }
}) 

module.exports = department;