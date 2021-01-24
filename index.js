const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))
    .listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))
