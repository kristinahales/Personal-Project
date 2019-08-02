require('dotenv').config({ path: __dirname + '/../.env' })
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const uc = require('./controllers/user_controller');
const pc = require('./controllers/projects_controller');
const ic = require('./controllers/inventory_controller');
const nodemailer = require('nodemailer');
const fc = require('./controllers/favorites_controller');
const authmw = require('./middleware/authCheck');
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

//Form endpoints
app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h4>Contact Details</h4>
            <p>Name: ${req.body.name}</p>
            <p>Email: ${req.body.email}</p>
            <p>Classroom: ${req.body.classroom}</p>
        <h4>Request for Supplies</h4>
        <p>Supplies: ${req.body.textValue}</p>
        <p>Additional Comments: ${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'marcelo.williamson49@ethereal.email',
                pass: 'rW5YrtYKMPmQZqwnkg'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'marcelo.williamson49@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'Supplies Order',
            text: req.body.message,
            html: htmlEmail
        }
        
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

//User endpoints 
app.post('/api/login', uc.login);
app.post('/api/register', uc.register);
app.delete('/api/logout', uc.logout);
app.get('/api/user', authmw, uc.getUser);

//project endpoints 
app.get('/api/projects', pc.getAllProjects);
app.delete('/api/delete/project/:projectId', pc.deleteProject, pc.getAllProjects);
app.post('/api/addProject', pc.addArtProject, pc.getAllProjects);
app.get('/api/filtered/projects', pc.filteredProjects);

//favorite endpoints
app.post('/api/addFavorite/:projectId', fc.addFavorite);
app.get('/api/favoriteProjects', fc.getFavoriteProjects);
app.delete('/api/deleteFavorite/:projectId', fc.deleteFavorite);


//inventory endpoints 
app.get('/api/inventory', ic.getAllInventory);
app.put('/api/inventory/edit/:inventoryId', ic.editQuantity);
app.get('/api/lowInventory', ic.getLowInventory);