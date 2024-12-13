const ErrorHandler = require("../utils/default/errorHandler");
const transaction = require("../models/transactionModel");

exports.addtran = async (req, res, next) => {
  const {
    amtpaid,
    bankname,
    referencenum,
    transactiondate,
    transactionid,
    transactionmode,
    transactionstatus,
  } = req.body;
  let createdtransaction;
  createdtransaction = await transaction.create({
    transactionid,
    amtpaid,
    referencenum,
    transactiondate,
    transactionmode,
    transactionstatus,
    bankname,
  });
  res.json(createdtransaction);
};

exports.deletetransaction = async (req, res, next) => {
  const { id } = req.params;
  const deletedtransaction = await transaction.findByIdAndDelete(id);
  res.json("Data deleted successfully!");
};

exports.gettran = async (req, res, next) => {
  const { id } = req.params;
  let var_transaction_List;
  var_transaction_List = await transaction.findById(
    id,
    "transactionid referencenum transactionstatus transactiondate bankname amtpaid transactionmode "
  );
  res.json(var_transaction_List); q
};

exports.updatetransaction = async (req, res, next) => {
  const { transactionid } = req.params;
  let updatedtransaction;
  updatedtransaction = await transaction.findByIdAndUpdate(
    transactionid,
    {
      bankname: bankname,
      transactionstatus: transactionstatus,
      transactiondate: transactiondate,
      referencenum: referencenum,
      transactionmode: transactionmode,
      amtpaid: amtpaid,
    },
    { new: true }
  );
  res.json(updatedtransaction);
};
