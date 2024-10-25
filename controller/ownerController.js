const Owner = require('../models/OwnerModel');


exports.addowner = async(req, res, next) => {
const {ownerid, ownerpassword} = req.body;
let createdOwner;
createdOwner = await Owner.create({
ownerid, 
ownerpassword, 
});



}

exports.getowner = async(req, res, next) => {
const {id} = req.params;
let var_Owner_List;
 var_Owner_List = await Owner.findById(id,'ownerpassword ownerid ');
res.json(var_Owner_List);



}




