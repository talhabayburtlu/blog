const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const admin = await Admin.findOne({ _id: decoded._id, 'token': token })
        
        if (!admin) {
            throw new Error("Lütfen admin kimliğini doğrulayınız.")
        } else if (!admin.hasPermission) {
            throw new Error("Bu Yöneticinin Yetkisi Bulunmamaktadır!")
        }

        req.token = token
        req.admin = admin
        next()
    } catch (e) {
        if (e.message === "Lütfen admin kimliğini doğrulayınız.")
            res.status(401).send({ error: "Lütfen admin kimliğini doğrulayınız." })
        else if (e.message === "Bu Yöneticinin Yetkisi Bulunmamaktadır!")
            res.status(403).send({ error: e })
        
    }
}

module.exports = auth