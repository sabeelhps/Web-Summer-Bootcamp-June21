const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
    },
    user: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
