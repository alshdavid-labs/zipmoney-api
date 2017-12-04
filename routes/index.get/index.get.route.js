const { createUser, getUsers, getUser, updateUser, deleteUser } = require("../../services/users.service")
const express = require('express')
const app = express();
const router = express.Router()

router.get('', async (req, res) => {
    try {
        res
            .status(200)
            .set('Message', "Hello World")
            .send({ Hello: "World"})     
    } catch (error) {
        res
            .status(500)
            .set('Message', "Something Bad Happened")
            .send({ message: "Something Bad Happened" })   
    }
})

module.exports = { 
    router 
}