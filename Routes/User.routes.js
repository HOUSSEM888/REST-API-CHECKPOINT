const express=require('express')
const User = require('../Models/user.Schema')
const router=express.Router()
const mongoose= require('mongoose')

const userCtrl = require('../controllers/User.controllers')


router.post('/add-new-user',usersCtrl.addUser)

router.put('/update-user/:id',usersCtrl1.updateUser)


module.exports = router