const Engine = require('tingodb')()
const db = new Engine.Db('./', {});
const collection = db.collection("db.users");

const insert = (documents) => new Promise(
    (res, rej) => collection.insert(documents, {w:1}, 
        (error, result) => error ? rej(error) : res(result)
    )
)

const insertOne = (documents) => new Promise(
    (res, rej) => collection.insert(documents, {w:1}, 
        (error, result) => error ? rej(error) : res(result[0])
    )
)

const findOne = (query) => new Promise(
    (res, rej) => collection.findOne(query, 
        (error, result) => error ? rej(error) : res(result)
    )
)

const find = (query) => new Promise(
    (res, rej) => collection.find(query).toArray( 
        (error, result) => error ? rej(error) : res(result)
    )
)

const updateOne = (query, update) => new Promise(
    (res, rej) => collection.update(query, update, 
        (error, result) => error ? rej(error) : res(result)
    )
)

const remove = (query, update) => new Promise(
    (res, rej) => collection.remove(query, 
        (error, result) => error ? rej(error) : res(result)
    )
)

module.exports = {
    db,
    objectID: Engine.ObjectID,
    insert,
    insertOne,
    findOne,
    find,
    updateOne,
    remove
}