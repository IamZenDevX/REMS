const Customer = require('../models/CustomerModel');


exports.getcustomer = async(req, res, next) => {
const {id} = req.params;
let var_Customer_List;
 var_Customer_List = await Customer.find({ },'dateofbirth address firstname middlename phonenumber customerpassword customerid occupation emailid lastname annualincome ');
res.json(var_Customer_List);



}

exports.login = async(req, res, next) => {
const {customerid, password} = req.body;
//		save
  Customer.findOne({customerid:id},function(err,customer){
        if(err){
            console.log(err);
        }else{
            console.log(customer.customerpassword);
            if(customer.customerpassword==pass){
                res.send("Logged in");
            }
        }
    }
 );




}

exports.register = async(req, res, next) => {
const {address, annualincome, customerid, customerpassword, dateofbirth, emailid, firstname, lastname, middlename, occupation, phonenumber} = req.body;
let createdCustomer;
createdCustomer = await Customer.create({
occupation, 
address, 
lastname, 
phonenumber, 
customerpassword, 
dateofbirth, 
firstname, 
annualincome, 
customerid, 
emailid, 
middlename, 
});
res.json(createdCustomer);



}




