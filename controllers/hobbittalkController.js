// Hobbittalk Backend
// by Bernardo F. Martinez Meave
// Mongo DB Controller routines
const asyncHandler = require("express-async-handler");

const Talk = require("../model/talkModel");

const getTalk = asyncHandler(async (req, res) => {
  const talks = await Talk.find({ talk_user: req.user.id });
  res.status(200).json(talks);
});

const setTalk = asyncHandler(async (req, res) => {
  console.log(req.body);

  if (!req.body.talk_message) {
    res.status(400);
    throw new Error("Talk something");
  }

  const hobbittalk = await Talk.create({
    talk_user: req.user.id,
    talk_message: req.body.talk_message,

    hidden: req.body.hidden,
  });
  res.status(201).json({ hobbittalk });
});

module.exports = {
  getTalk,
  setTalk,
};
