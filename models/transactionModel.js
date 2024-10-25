const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
{
transactionid: {
type: Number, 
},
transactiondate: {
type: Date, 
},
transactionmode: {
type: String, 
},
bankname: {
type: String, 
},
amtpaid: {
type: Number, 
},
transactionstatus: {
type: String, 
},
referencenum: {
type: String, 
},
},
);





module.exports = mongoose.model("transaction", transactionSchema);
