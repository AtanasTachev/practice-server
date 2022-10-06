const router = require('express').Router()
const breweryService = require('../services/breweryService')

router.post('/create', async(req, res) => {
    let {brewery, user, address, product, quantity} = req.body
    try {
        let order = await breweryService.createOrder(brewery, user, address, product, quantity)
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router