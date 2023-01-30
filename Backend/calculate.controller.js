const { CalculateService } = require("./calculate.service")

module.exports.CalculateController = (req, res) => {
    let {operand1, operand2, symbol } = req.body
    console.log(req.body)
    try {
        let data = CalculateService(operand1, operand2, symbol)
        return res.send({data}).status(200)
    } catch (error) {
        console.log(error)
        res.status(400).send({message: "An error occured"})
    }
}