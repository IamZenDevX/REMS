const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
{
propertyid: {
type: String, 
},
propertyname: {
type: String, 
},
propertystatus: {
type: String, 
},
propertytype: {
type: String, 
},
propertybhk: {
type: String, 
},
area: {
type: String, 
},
price: {
type: Number, 
},
location: {
type: String, 
},
},
);





module.exports = mongoose.model("property", propertySchema);
