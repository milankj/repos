const mongoose = require("mongoose");
const dummy = require("mongoose-dummy");

const ignoredFields = ["_id", "__v"];
let schemaDefinition = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
let model = mongoose.model("User", schemaDefinition);
let randomObject = dummy(model, {
  ignore: ignoredFields,
  returnDate: true,
});
console.log(JSON.stringify(randomObject));
