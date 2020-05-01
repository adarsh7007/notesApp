const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
    },
    description: {
      type: String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Note", NoteSchema);
