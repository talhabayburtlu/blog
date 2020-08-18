const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 5
    },
    hasPermission: {
        type: Boolean,
        required: true
    },
    token: {
        type: String,
    }
}, {timestamps: true});


adminSchema.statics.findAdmin = async function (username,password) {
    const admin = await Admin.findOne({username})

    if (!admin) {
        throw new Error("Admin Kullanıcı Adı Veya Şifre Uyuşmuyor.")
    }

    const isVerified = await bcrypt.compare(password, admin.password)

    if (!isVerified) {
        throw new Error("Admin Kullanıcı Adı Veya Şifre Uyuşmuyor.")
    }

    return admin
}

adminSchema.methods.createNewToken = async function () {
    const admin = this
    const token = jwt.sign({ _id: admin._id.toString() }, process.env.JWT_SECRET)
    admin.token = token
    await admin.save()

    return token
}

adminSchema.pre('save', async function (next) {
    const admin = this

    if (admin.isModified('password')) {
        admin.password = await bcrypt.hash(admin.password, 8)
    }

    next()
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;