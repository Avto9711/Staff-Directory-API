const roles =  require('../../../model/role')
const router = require('express').Router();


const getRoles = async (req,resp)=>{
    let options = {
        where: {
            deleted:false
        }
    }
    var des =  await roles.findAll(options);
    resp.json(des);
}

const getRoleById =  async (req, resp,next)=>{

    console.log(req.params.id);

    const roleId =  parseInt(req.params.id);
    let options = {
        where: {
            roleId: roleId,
            deleted: false
        }
    }
    let result = await roles.findAll(options);
    if (result.length) {
        resp.json(result)
        
    } else {
        resp.status(404).send('Sorry, we cannot find that!')
    }
}



router.get("/", getRoles);
router.get("/:id", getRoleById);



module.exports = router;