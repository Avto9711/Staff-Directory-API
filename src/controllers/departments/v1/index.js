const {department} =  require('../../../model/department')
const router = require('express').Router();


const getDepartments = async (req,resp)=>{
    let options = {
        where: {
            deleted:false
        }
    }
    var des =  await department.findAll(options);
    resp.json(des);
}



router.get("/", getDepartments);

module.exports = router;