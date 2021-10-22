const express = require('express')
const router = express.Router()

//State model
const Course = require('../../models/Course')

// @route   GET api/round
// @desc    GET All Rounds
// @access  Public
router.get('/', (req, res) => {
    Course.find()
        .sort({ datePosted: -1 })
        .then(round => res.json(round))
})

router.post('/', (req, res) => {
    const newCourse = new Course({
        courseName: req.body.courseName,
        coursePar: req.body.coursePar,
        slopeRatingYellow: req.body.slopeRatingYellow,
        holes: {
            1: { name: req.body.holes[1].name, yellowYds: req.body.holes[1].yellowYds, par: req.body.holes[1].par, SI: req.body.holes[1].SI },
            2: { name: req.body.holes[2].name, yellowYds: req.body.holes[2].yellowYds, par: req.body.holes[2].par, SI: req.body.holes[2].SI },
            3: { name: req.body.holes[3].name, yellowYds: req.body.holes[3].yellowYds, par: req.body.holes[3].par, SI: req.body.holes[3].SI },
            4: { name: req.body.holes[4].name, yellowYds: req.body.holes[4].yellowYds, par: req.body.holes[4].par, SI: req.body.holes[4].SI },
            5: { name: req.body.holes[5].name, yellowYds: req.body.holes[5].yellowYds, par: req.body.holes[5].par, SI: req.body.holes[5].SI },
            6: { name: req.body.holes[6].name, yellowYds: req.body.holes[6].yellowYds, par: req.body.holes[6].par, SI: req.body.holes[6].SI },
            7: { name: req.body.holes[7].name, yellowYds: req.body.holes[7].yellowYds, par: req.body.holes[7].par, SI: req.body.holes[7].SI },
            8: { name: req.body.holes[8].name, yellowYds: req.body.holes[8].yellowYds, par: req.body.holes[8].par, SI: req.body.holes[8].SI },
            9: { name: req.body.holes[9].name, yellowYds: req.body.holes[9].yellowYds, par: req.body.holes[9].par, SI: req.body.holes[9].SI },
            10: { name: req.body.holes[10].name, yellowYds: req.body.holes[10].yellowYds, par: req.body.holes[10].par, SI: req.body.holes[10].SI },
            11: { name: req.body.holes[11].name, yellowYds: req.body.holes[11].yellowYds, par: req.body.holes[11].par, SI: req.body.holes[11].SI },
            12: { name: req.body.holes[12].name, yellowYds: req.body.holes[12].yellowYds, par: req.body.holes[12].par, SI: req.body.holes[12].SI },
            13: { name: req.body.holes[13].name, yellowYds: req.body.holes[13].yellowYds, par: req.body.holes[13].par, SI: req.body.holes[13].SI },
            14: { name: req.body.holes[14].name, yellowYds: req.body.holes[14].yellowYds, par: req.body.holes[14].par, SI: req.body.holes[14].SI },
            15: { name: req.body.holes[15].name, yellowYds: req.body.holes[15].yellowYds, par: req.body.holes[15].par, SI: req.body.holes[15].SI },
            16: { name: req.body.holes[16].name, yellowYds: req.body.holes[16].yellowYds, par: req.body.holes[16].par, SI: req.body.holes[16].SI },
            17: { name: req.body.holes[17].name, yellowYds: req.body.holes[17].yellowYds, par: req.body.holes[17].par, SI: req.body.holes[17].SI },
            18: { name: req.body.holes[18].name, yellowYds: req.body.holes[18].yellowYds, par: req.body.holes[18].par, SI: req.body.holes[18].SI },
        }
    })
    newCourse.save().then(course => res.json(course))
})


module.exports = router