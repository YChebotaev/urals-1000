const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const user = new mongoose.Schema({
  _id: String,
  token: String,
  name: String,
  climbs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "climb"
    }
  ],
  url: String,
  avatar: {
    url: String
  },
  createDate: Date,
  rating: Number // Virtual property
});

module.exports = user;

user.methods.getOrCreateToken = async function() {
  if (!this.token) {
    this.token = jwt.sign(this.toObject(), process.env.APP_JWT_SECRET);
    await this.save();
  }
  return this.token;
};
