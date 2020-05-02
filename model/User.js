let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },

});

module.exports = mongoose.model("User", UserSchema);
