const asyncHandler = require("express-async-handler");

const Talk = require("../model/talkModel");

const getTalk = asyncHandler(async (req, res) => {
  const talks = await Talk.find({ talk_user: req.user.id });
  res.status(200).json(talks);
});

module.exports = {
  getTalk,
};
