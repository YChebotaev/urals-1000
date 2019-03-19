const mongoose = require("mongoose");
const Summit = require("../../model/Summit");
const User = require("../../model/User");
const Climb = require("../../model/Climb");

const DEFAULT_CLIMB_AVATAR = {
  url: "http://1000.southural.ru/static/climber_sm.png",
  width: 50,
  height: 50
};

module.exports = async (req, res) => {
  const user = await User.findOne({
    _id: req.user._id
  });

  const summit = await Summit.findOne({
    _id: mongoose.Types.ObjectId.createFromHexString(req.params.id)
  });

  const climb = new Climb({
    ...req.body,
    date: req.body.date,
    comment: req.body.comment,
    user: user._id,
    summit: summit._id
  });

  user.climbs.push(climb);
  summit.climbs.push(climb);

  const { imageUrls } = req.body;
  imageUrls.forEach(imageUrl => {
    summit.images.push({
      url: imageUrl
    });
  });

  await climb.save();
  await user.save();
  await summit.save();

  res.json(climb);
};
