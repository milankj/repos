const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoFile: {
    data: Buffer,
    contentType: String,
  },
  tag:[{
    type: String,

  }],
  description: {
    type: String,
    validator: (title) => title.length < 200 && title.length > 2,
      message: 'Description must be greater than length 2 and less than length 200',
  }
});

module.exports = mongoose.model("Videos", videoSchema);
