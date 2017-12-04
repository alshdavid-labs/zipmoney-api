const { createUser, getUsers, getUser, updateUser, deleteUser } = require("../../services/users.service")
const express = require('express')
const app = express();
const router = express.Router()

router.get('', async (req, res) => {
    try {

        res
            .status(200)
            .set('Message', "Users Found")
            .send(await getUsers())     
    } catch (error) {
        res
            .status(500)
            .set('Message', "Something Bad Happened")
            .send({ message: "Something Bad Happened" })   
    }
})

router.get('/:id', async (req, res) => {
    try {
        const f = await getUser(req.params.id)
        if (!f) {
            throw "User Not Found"
        }
        res
            .status(200)
            .set('Message', "User Found")
            .send(f)     
    } catch (error) {
        res
            .status(400)
            .set('Message', error)
            .send({ message: error })   
    }
})

module.exports = { 
    router 
}