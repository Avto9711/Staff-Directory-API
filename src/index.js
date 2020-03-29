const env = require('dotenv').config()
const express =  require("express");
const app  = express();
const routesV1 =  require('./routes/v1');


routesV1(app);
app.listen(8181,()=>{
    console.log("Running on 8181")
});


