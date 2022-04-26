const mongoose = require("mongoose");
const dummy = require("mongoose-dummy");

const ignoredFields = ["_id", "__v"];
const videoSchema = new mongoose.Schema({
  videoFile: {
    // data: Buffer,
    type: String,
  },
  tag: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    validator: (title) => title.length < 200 && title.length > 2,
    message:
      "Description must be greater than length 2 and less than length 200",
  },
});

let model = mongoose.model("Video", videoSchema);
let randomObject = dummy(model, {
  ignore: ignoredFields,
  returnDate: true,
});
console.log(JSON.stringify(randomObject));
