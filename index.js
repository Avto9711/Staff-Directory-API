const env = require('dotenv').config()
const express =  require("express");
const app  = express();
const routesV1 =  require('./src/routes/v1');


routesV1(app);
app.listen(8181,()=>{
    console.log("Running on 8181")
});


