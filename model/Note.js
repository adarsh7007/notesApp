const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Note", NoteSchema);
