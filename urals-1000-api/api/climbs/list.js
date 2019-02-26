const User = require("../../model/User");
const populate = require("../../lib/populate2");

module.exports = async (req, res) => {
  let users = await User.find({});

  users = users.filter(user => {
    return user.climbs.length > 0;
  });

  users = await Promise.all(
    users.map(async user => {
      await populate(user, "climbs");
      await Promise.all(user.climbs.map(climb => populate(climb, "summit")));
      return user;
    })
  );

  users = users.sort((userA, userB) => {
    let result = userB.climbs.length - userA.climbs.length;
    if (result == 0) {
      result = userB.createDate - userA.createDate;
    }
    return result;
  });

  users = users.map((user, rating) => {
    return Object.assign(user, {
      rating: rating + 1
    });
  });

  res.json(users);
};
