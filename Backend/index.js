const express = require("express")
const cors = require("cors")
let bodyParser = require('body-parser')
const { CalculateController } = require("./calculate.controller")
const app = express()
const routes = express.Router()
const PORT = 5000

// create application/json parser
var jsonParser = bodyParser.json()
 
routes.post('/calculate', CalculateController)
routes.get("/", (req, res) => {
    return res.send("Welcome to CALCULATE APP")
})

app.use(jsonParser)
app.use(routes)
app.use(cors())
app.listen(PORT, () => {
    console.log("App started on port " + PORT)
})