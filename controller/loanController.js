const loan = require('../models/loanModel');


exports.addloan = async(req, res, next) => {
const {bankname, emailid, installments, loanid, maxamt, rate, tenure} = req.body;
let createdloan;
createdloan = await loan.create({
maxamt, 
bankname, 
loanid, 
tenure, 
installments, 
rate, 
emailid, 
});
res.json(createdloan);



}

exports.getloan = async(req, res, next) => {
const {id} = req.params;
let var_loan_List;
 var_loan_List = await loan.findById(id,'rate loanid bankname tenure installments emailid maxamt ');
res.json(var_loan_List);



}




