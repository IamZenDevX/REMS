const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
{
loanid: {
type: Number, 
},
bankname: {
type: String, 
},
rate: {
type: String, 
},
installments: {
type: String, 
},
tenure: {
type: Number, 
},
maxamt: {
type: Number, 
},
emailid: {
type: String, 
},
},
);





module.exports = mongoose.model("loan", loanSchema);
