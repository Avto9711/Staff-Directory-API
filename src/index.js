const express =  require("express");
const app  = express();
const routesV1 =  require('./routes/v1');
routesV1(app);
app.listen(3000,()=>{
    console.log("Running on 3000")
});


