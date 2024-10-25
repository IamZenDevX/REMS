const registration = require('../models/registrationModel');


exports.addregi = async(req, res, next) => {
const {customername, propertyname, registrationdate, registrationid, registrationstatus} = req.body;
let createdCustomer;
createdCustomer = await registration.create({
customername, 
registrationdate, 
registrationid, 
propertyname, 
registrationstatus, 
});
res.json(createdCustomer);



}

exports.getregi = async(req, res, next) => {
let var_registration_List;
 var_registration_List = await registration.find({ },'registrationdate registrationstatus customername propertyname registrationid ');
res.json(var_registration_List);



}




