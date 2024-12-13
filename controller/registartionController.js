const ErrorHandler = require("../utils/default/errorHandler");
const registration = require("../models/registrationModel");
exports.addregi = async (req, res, next) => {
  const {
    customername,
    propertyname,
    registrationdate,
    registrationid,
    registrationstatus,
  } = req.body;
  let createdCustomer;
  createdCustomer = await registration.create({
    customername,
    registrationdate,
    registrationid,
    propertyname,
    registrationstatus,
  });
  res.json(createdCustomer);
};

exports.deleteregi = async (req, res, next) => {
  const { id } = req.params;
  const deletedregistration = await registration.findByIdAndDelete(id);
  res.json("Data Deleted Successfully!");
};

exports.getregi = async (req, res, next) => {
  const { id } = req.params;
  let var_registration_List;
  var_registration_List = await registration.findById(
    id,
    "registrationdate registrationstatus customername propertyname registrationid "
  );
  res.json(var_registration_List);
};

exports.updateregi = async (req, res, next) => {
  const {
    customername,
    propertyname,
    registrationdate,
    registrationid,
    registrationstatus,
  } = req.body;
  let updatedregistration;
  updatedregistration = await registration.updateMany(
    {
      registrationid,
    },
    {
      customername: customername,
      propertyname: propertyname,
      registrationdate: registrationdate,
      registrationstatus: registrationstatus,
      registrationid: registrationid,
    },
    { new: true }
  );
  res.json(updatedregistration);
};
