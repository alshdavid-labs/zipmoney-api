const { createUser, getUsers, getUser, updateUser, deleteUser } = require("../../services/users.service")
const express = require('express')
const app = express();
const router = express.Router()

router.patch('/:id', async (req, res) => {
    try {
        let u = await updateUser(req.params.id, req.body)
        console.log(u)
        res
            .status(200)
            .set('Message', "Users Updated")
            .send({ message: "User Updated" })     
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