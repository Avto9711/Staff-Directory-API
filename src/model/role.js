const {db} =  require('../squalize/index')
const Sequelize = require('sequelize');

let roles =  db.define("roles",{
    roleId : {
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        allowNull:true
    }
});

module.exports = roles;