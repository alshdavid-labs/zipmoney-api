const config = require('../config.json')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const routes = (router) => [
    { url : '/',          route : 'index.get' },
    { url : '/users/',    route : 'users.get' },
    { url : '/users/',    route : 'users.post' },
    { url : '/users/',    route : 'users.patch' },
    { url : '/users/',    route : 'users.delete' }
]
.reduce((router,route) => router.use(route.url, require(`../routes/${route.route}/${route.route}.route`).router), router)


app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Headers", config.http.headers.allow);
    res.header("Access-Control-Expose-Headers", config.http.headers.expose);
    res.header("Access-Control-Allow-Origin", config.http.headers.origin);
    res.header('Access-Control-Allow-Methods',  config.http.headers.methods);    
    'OPTIONS' == req.method ? res.send(200) : next()
});

app.use(routes(express.Router()))

module.exports = {
    app
}