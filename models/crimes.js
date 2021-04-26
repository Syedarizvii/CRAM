const mongoose = require("mongoose");

const CrimeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  reportedby: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Ocurence_Date: {
    type: String,
    required: true,
  },
  Crime_type: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  Reported_Date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Province: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  investigated_by:{
    type: String
    // required: true
  },
  designation:{
    type: String
    // required: true
  }
});

const Crime = mongoose.model("Crime", CrimeSchema);

module.exports = Crime;
