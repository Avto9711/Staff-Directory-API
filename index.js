const env = require('dotenv').config()
const express =  require("express");
const app  = express();
const routesV1 =  require('./src/routes/v1');

const port = process.env.PORT || 1337
routesV1(app);
app.listen(port,()=>{
    console.log("Running on " + port)
});


