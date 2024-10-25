const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  ownerid: {
    type: Number,
  },
  ownerpassword: {
    type: String,
  },
});

module.exports = mongoose.model("Owner", OwnerSchema);
