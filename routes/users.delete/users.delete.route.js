const { createUser, getUsers, getUser, updateUser, deleteUser, deleteAllUsers } = require("../../services/users.service")
const express = require('express')
const app = express();
const router = express.Router()

router.delete('/:id', async (req, res) => {
    try {
        if (req.params.id === "all") {
            await deleteAllUsers()
            return res
                .set('Message', "All Users Deleted")
                .status(200)
                .send({ message: "All Users Deleted" })
        }

        const d = await deleteUser(req.params.id)
        if (!d) {
            throw "User Not Found"
        }
        res
            .set('Message', "User Deleted")
            .status(200)
            .send({ message: "User Deleted" })     
    } catch (error) {
        res
            .set('Message', error)
            .status(400)
            .send({ message: error })   
    }
})


module.exports = { 
    router 
}