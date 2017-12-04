const { objectID, insert, findOne, find, updateOne, remove } = require("./database.service")
const { User } = require("../models/users.model")

const createUser = async (user) => {
    const businessUnits = ['sales', 'integrations', 'technology', 'marketing']
    if (
        !user.firstName ||
        !user.lastName ||
        !user.email ||
        !user.phone ||
        !user.businessUnit
    ) {
        throw "Missing Fields"
    }
    
    if (!businessUnits.find(x => x == user.businessUnit.toLowerCase())) {
        throw "Invalid Business Unit"
    }
    return await insert({ ...User(), ...user })
}

const getUser = async (id) => {
    return await findOne({ _id: new objectID(id) })
}

const getUsers = async (query) => {
    return await find(query || {})
}

const updateUser = async (id, changes) => {
    let user = await getUser(id)
    return await updateOne({ _id: new objectID(id) }, { ...User(), ...user, ...changes })
}

const deleteUser = async (id) => {
    return await remove({ _id: new objectID(id) })
}

const deleteAllUsers = async (id) => {
    return await remove({})
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    deleteAllUsers
}