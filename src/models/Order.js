const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema ({
    brewery: {
        type: mongoose.Types.ObjectId,
        ref: 'Brewery'
    },
    
})