const jwt = require('jsonwebtoken')

const Ziza =require('../models/Ziza')

const requireAuthBoss = async (req, res, next) => {

const { authorization } = req.headers

if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
}

const token = authorization.split(' ')[1]

try {
    const { id , role} = jwt.verify(token, process.env.SECRET)

    req.user = await Ziza.findOne({ id }).select('_id')

    if ( role !== 'Boss') {
    return res.status(403).json({ error: 'Access forbidden' });
    }
    next()

} catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
}
}

module.exports = requireAuthBoss