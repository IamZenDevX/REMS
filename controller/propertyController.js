const ErrorHandler = require('../utils/default/errorHandler');
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

exports.deleteproperty = async(req, res, next) => {
const {id} = req.params;
const deletedproperty = await property.findByIdAndDelete(id);
res.json('Data Deleted successfully !');
}

exports.getpropery = async(req, res, next) => {
const {id} = req.params;
let var_property_List;
 var_property_List = await property.findById(id,'propertyname propertybhk price propertystatus propertyid propertytype location area ');
res.json(var_property_List);
}

exports.updateproperty = async(req, res, next) => {
const {id} = req.params;
let updatedproperty;
updatedproperty = await property.findByIdAndUpdate(id,
{
area: area,
propertyname: propertyname,
propertybhk: propertybhk,
propertyid: propertyid,
location: location,
propertytype: propertytype,
propertystatus: propertystatus,
price: price
}
, {new: true} );
res.json(updatedproperty);



}




