const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('LACEmployeeStaff', 'sxdefault', 's1uEQ3IAZz7Ns3sG', {
  host: 'solvedevdb.database.windows.net',
  dialect:  'mssql',
  port:1433,
  dialectOptions: {
    options: {
        encrypt: true,
    }
  },
  define:{
    freezeTableName: true,
    timestamps: false

  },
});

module.exports.db = sequelize;