const { createUser, getUsers, getUser, updateUser, deleteUser } = require("../../services/users.service")
const express = require('express')
const app = express();
const router = express.Router()

router.post('', async (req, res) => {
    try {
        res
            .status(200)
            .set('Message', "Users Found")
            .send(await createUser(req.body))     
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