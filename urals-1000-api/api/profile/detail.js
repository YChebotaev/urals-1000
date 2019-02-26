const User = require("../../model/User");
const populate = require("../../lib/populate2");
const createObjectId = require("../../lib/createObjectId");

module.exports = async (req, res) => {
  const user = await User.findOne({
    _id: req.params.id
  });
  await populate(user, "climbs");
  // With summits
  await Promise.all(user.climbs.map(climb => populate(climb, "summit")));
  res.json(user);
};
