let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let NoteSchema = new Schema(
    {
        tittle: {
            type: String,
        },
        description: {
            type: String,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Note", NoteSchema);
