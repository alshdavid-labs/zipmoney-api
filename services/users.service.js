const moment = require("moment")
const { objectID, insert, insertOne, findOne, find, updateOne, remove, anyCaseRegex, aggregate } = require("./database.service")
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
    return await insertOne({ 
        ...User(), 
        ...User(user), 
        ...{ createdAt: moment().toISOString() } 
    })
}

const getUser = async (id) => {
    return await findOne({ _id: new objectID(id) })
}

const getUsers = async (query) => {
    return await find(query || {})
}

const searchUsers = async (term) => {
    term = anyCaseRegex(term)
    let res = await find({
        $or: [
            { firstName: term }, 
            { lastName: term },
            { email: term },
            { phone: term },
            { businessUnit: term }
        ]
    })
    return res
}

const updateUser = async (id, changes) => {
    if (
        !changes.firstName ||
        !changes.lastName ||
        !changes.email ||
        !changes.phone ||
        !changes.businessUnit
    ) {
        throw "Missing Fields"
    }
    let user = await getUser(id)
    return await updateOne({ _id: new objectID(id) }, { ...User(), ...user, ...User(changes) })
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
    deleteAllUsers,
    searchUsers
}