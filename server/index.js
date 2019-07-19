require('dotenv').config({ path: __dirname + '/../.env' })
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()
app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: true,
        resave: false
    })
);


massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Server is listening on ${SERVER_PORT}`)
    });
})
.catch(error => console.log(error))


