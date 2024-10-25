const property = require('../models/propertyModel');


exports.addpropery = async(req, res, next) => {
const {area, location, price, propertybhk, propertyid, propertyname, propertystatus, propertytype} = req.body;
let createdproperty;
createdproperty = await property.create({
propertyname, 
propertystatus, 
location, 
propertybhk, 
propertytype, 
price, 
propertyid, 
area, 
});
res.json(createdproperty);



}

exports.getpropery = async(req, res, next) => {
const {id} = req.params;
let var_property_List;
 var_property_List = await property.findById(id,'propertyname propertybhk price propertystatus propertyid propertytype location area ');
res.json(var_property_List);



}




