const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passwordLocalMongooses = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type:String,
        required: true,
    },
     username: {
    type: String,
    required: true, // Important for population
  },
  wishlist: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing"
  }
]
});

userSchema.plugin(passwordLocalMongooses);

module.exports = mongoose.model("User",userSchema);
