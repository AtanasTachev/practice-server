const Order = require('../models/Order')
const Brewery = require('../models/Brewery')
const User = require('../models/User')

exports.createOrder = async function (brewery, user, address, product, quantity) {
    let order = new Order({brewery, user, address, product, quantity})
    let user = await User.finfByIdAndUpdate(user, {
        $push: { myOrders: order._id }
    })
    return [order.save(), user]
}
