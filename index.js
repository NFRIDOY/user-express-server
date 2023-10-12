/**
 * Add to scripts in the package.json file => "start" : "node index.js",
 * port in now dynamically set const port = process.env.PORT || 5000
 * 
 */
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
// const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send(`The GET app is running on port ${port}`)
    console.log(`The GET app is running on port ${port}`);
})

app.get('/user', (req, res) => {
    res.send(`The User is running on port ${port}`)
    console.log(`The User is running on port ${port}`);
})

app.listen(port, () => {
    console.log(`The app is running on port ${port}`);
})