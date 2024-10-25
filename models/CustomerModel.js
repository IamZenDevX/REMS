const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const CustomerSchema = new mongoose.Schema({
  customerid: {
    type: Number,
  },
  customerpassword: {
    type: String,
    select: false,
  },
  firstname: {
    type: String,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
  },
  emailid: {
    type: String,
  },
  dateofbirth: {
    type: Date,
  },
  phonenumber: {
    type: String,
  },
  occupation: {
    type: String,
  },
  annualincome: {
    type: String,
  },
  address: {
    type: String,
  },
});

CustomerSchema.pre("save", async function (next) {
  this.customerpassword = await bcrypt.hash(this.customerpassword, 10);
});

module.exports = mongoose.model("Customer", CustomerSchema);
