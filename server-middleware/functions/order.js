import orders from '../data/orders.js'

export default {
    async getByUserId(req, res) {
        setTimeout(() => {
            let userId = req.body.userId
            if (userId) {
                res.json(orders.filter((order) => order.userId == userId))
            }
        }, 500)
    }
}