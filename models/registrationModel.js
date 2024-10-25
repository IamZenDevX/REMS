const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  registrationid: {
    type: String,
  },
  propertyname: {
    type: String,
  },
  customername: {
    type: String,
  },
  registrationdate: {
    type: String,
  },
  registrationstatus: {
    type: String,
  },
});

module.exports = mongoose.model("registration", registrationSchema);
