const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schemas

const EachHoleSchema = new Schema({
    name: {type: String}, 
    yellowYds: {type: Number}, 
    par: {type: Number}, 
    SI: {type: Number}
})

const HolesSchema = new Schema({
    1: {type: EachHoleSchema},
    2: {type: EachHoleSchema},
    3: {type: EachHoleSchema},
    4: {type: EachHoleSchema},
    5: {type: EachHoleSchema},
    6: {type: EachHoleSchema},
    7: {type: EachHoleSchema},
    8: {type: EachHoleSchema},
    9: {type: EachHoleSchema},
    10: {type: EachHoleSchema},
    11: {type: EachHoleSchema},
    12: {type: EachHoleSchema},
    13: {type: EachHoleSchema},
    14: {type: EachHoleSchema},
    15: {type: EachHoleSchema},
    16: {type: EachHoleSchema},
    17: {type: EachHoleSchema},
    18: {type: EachHoleSchema},
})


const CourseSchema = new Schema({
    courseName: {type: String,required: true},
    coursePar: {type: Number,required: true},
    slopeRatingYellow: {type: Number,required: true},
    holes: {type: HolesSchema}
})



module.exports = State = mongoose.model('course', CourseSchema)