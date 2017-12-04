const { createUser, getUsers, getUser, updateUser, deleteUser } = require("./services/users.service")
const { app } = require("./services/express.service")
const config = require('./config.json')

void async function init(){
    try {
        app.listen(config.http.port, config.http.hostname)
        console.log(`Server | ${config.http.hostname}:${config.http.port}`)
    } catch (error) {
        console.log("Error", error)
    }
    
}()



