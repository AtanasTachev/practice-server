const router = require('express').Router()
const breweryService = require('../services/breweryService')

router.post('/create', async(req, res) => {
    let {brewery, user, address, product, quantity} = req.body
    
})