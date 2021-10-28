const express = require('express')
const mongoose = require('mongoose')

const path = require('path')
const app = express();
const config = require("config")


//Bodyparser middleware
app.use(express.json());

// DB Config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/rounds', require('./routes/api/rounds'))
app.use('/api/courses', require('./routes/api/courses'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

// Serve static assets if in production

if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));