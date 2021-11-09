const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoundSchema = new Schema({
  datePosted: {
    type: Date,
    default: Date.nowx,
  },
  userID: {
    type: String,
  },
  playerA: {
    type: String,
  },
  course: {
    type: String,
  },
  datePlayed: {
    type: Date,
  },
  handicap: {
    type: Number,
  },
  shots1: {
    type: Number,
  },
  points1: {
    type: Number,
  },
  shots2: {
    type: Number,
  },
  points2: {
    type: Number,
  },
  shots3: {
    type: Number,
  },
  points3: {
    type: Number,
  },
  shots4: {
    type: Number,
  },
  points4: {
    type: Number,
  },
  shots5: {
    type: Number,
  },
  points5: {
    type: Number,
  },
  shots6: {
    type: Number,
  },
  points6: {
    type: Number,
  },
  shots7: {
    type: Number,
  },
  points7: {
    type: Number,
  },
  shots8: {
    type: Number,
  },
  points8: {
    type: Number,
  },
  shots9: {
    type: Number,
  },
  points9: {
    type: Number,
  },
  shots10: {
    type: Number,
  },
  points10: {
    type: Number,
  },
  shots11: {
    type: Number,
  },
  points11: {
    type: Number,
  },
  shots12: {
    type: Number,
  },
  points12: {
    type: Number,
  },
  shots13: {
    type: Number,
  },
  points13: {
    type: Number,
  },
  shots14: {
    type: Number,
  },
  points14: {
    type: Number,
  },
  shots15: {
    type: Number,
  },
  points15: {
    type: Number,
  },
  shots16: {
    type: Number,
  },
  points16: {
    type: Number,
  },
  shots17: {
    type: Number,
  },
  points17: {
    type: Number,
  },
  shots18: {
    type: Number,
  },
  points18: {
    type: Number,
  },
});

module.exports = State = mongoose.model("round", RoundSchema);
