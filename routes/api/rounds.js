const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//State model
const Round = require("../../models/Round");

// @route   GET api/round
// @desc    GET All Rounds
// @access  Public
router.get("/", (req, res) => {
  Round.find()
    .sort({ datePlayed: -1 })
    .then((round) => res.json(round));
});

// @route   POST api/round
// @desc    POST a Round
// @access  Private
router.post("/", auth, (req, res) => {
  const newRound = new Round({
    userID: req.body.userID,
    playerA: req.body.playerA,
    course: req.body.course,
    datePlayed: req.body.datePlayed,
    handicap: req.body.handicap,
    shots1: req.body.shots1,
    shots2: req.body.shots2,
    shots3: req.body.shots3,
    shots4: req.body.shots4,
    shots5: req.body.shots5,
    shots6: req.body.shots6,
    shots7: req.body.shots7,
    shots8: req.body.shots8,
    shots9: req.body.shots9,
    shots10: req.body.shots10,
    shots11: req.body.shots11,
    shots12: req.body.shots12,
    shots13: req.body.shots13,
    shots14: req.body.shots14,
    shots15: req.body.shots15,
    shots16: req.body.shots16,
    shots17: req.body.shots17,
    shots18: req.body.shots18,
    points1: req.body.points1,
    points2: req.body.points2,
    points3: req.body.points3,
    points4: req.body.points4,
    points5: req.body.points5,
    points6: req.body.points6,
    points7: req.body.points7,
    points8: req.body.points8,
    points9: req.body.points9,
    points10: req.body.points10,
    points11: req.body.points11,
    points12: req.body.points12,
    points13: req.body.points13,
    points14: req.body.points14,
    points15: req.body.points15,
    points16: req.body.points16,
    points17: req.body.points17,
    points18: req.body.points18,
  });
  newRound.save().then((round) => res.json(round));
});

// @route   DELETE api/round
// @desc    DELETE a Round
// @access  Private
router.delete("/:id", auth, (req, res) => {
  Round.findById(req.params.id)
    .then((round) => round.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
