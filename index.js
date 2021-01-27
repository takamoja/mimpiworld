const express = require('express')
const app = express()
const passport = require('passport')
const passportHttp = require('passport-http')
const path = require('path')
const PORT = process.env.PORT || 5000
require('dotenv').config()

passport.use(new passportHttp.BasicStrategy(
    function (username, password, done) {
        if (username === process.env.STG_USERNAME && password === process.env.STG_PASSWORD) {
            return done(null, true)
        } else {
            return done(null, false)
        }
    }
))
app.use('/', passport.authenticate('basic',{session: false}) );
app.use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))
    .listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))
