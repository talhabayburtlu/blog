const express = require('express');
const Admin = require("../models/admin");
const auth = require("../auth/auth")

const router = new express.Router();

router.post("/blog/admin" ,async(req,res) => {
    const admin = new Admin(req.body)

    try {
        admin.save()
        res.status(201).send(admin)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post("/blog/admin/login" , async(req,res) => {
    try {
        const admin = await Admin.findAdmin(req.body.username,req.body.password)
        await admin.createNewToken()
        res.send(admin)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post("/blog/admin/logout" , auth ,async(req,res) => {
    try {
        req.admin.token = null
        await req.admin.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get("/blog/admin/auth" , auth , (req,res) => {
    res.send()
})

module.exports = router;