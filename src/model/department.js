const {db} =  require('../squalize/index')
const Sequelize = require('sequelize');

exports.department = db.define('Department',{
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