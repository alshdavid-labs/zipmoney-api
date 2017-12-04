const { createUser, getUsers, getUser, updateUser, deleteUser } = require("./services/users.service")
const { app } = require("./services/express.service")
const config = require('./config.json')
const port = process.env.PORT || config.http.port

void async function init(){
    try {
        app.listen(port, config.http.hostname)
        console.log(`Server | ${config.http.hostname}:${port}`)
    } catch (error) {
        console.log("Error", error)
    }
}()






