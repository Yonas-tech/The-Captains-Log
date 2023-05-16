// Dependencies: 
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
const port = 3000;

// Instantiate express app
const app = express()


// MONGOOSE:
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, 
                { useNewUrlParser: true, 
                 useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


// Middleware
// app.use((req, res, next) => {
//     console.log('I run for all routes');
//     next();
// })
app.use(express.urlencoded({ extended: false })); //body-parser
app.use(methodOverride('_method'));



// JSX:
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// ROUTES: INDUCE

// Index:


// New:
app.get('/logs/new', (req,res)=>{
    res.render('New');
})

// Delete:


// Update:


// Create: 
app.post('/logs/', (req, res)=>{
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }

    
    Log.create(req.body, (error, createdLogs)=>{
        res.redirect('/logs/')
    });
})


// Edit: 





app.listen(port, ()=>{
    console.log(`Server is listening on, ${port}`)
})