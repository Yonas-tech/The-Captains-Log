// Dependencies: 
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
const port = 3000;
const Logs = require('./models/logs');
const seed = require("./resource/seed");

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

// Middleware:

// app.use((req, res, next) => {
//     console.log('I run for all routes');
//     next();
// })
app.use(express.urlencoded({ extended: false })); //body-parser
app.use(methodOverride('_method'));



// JSX View Engine:
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


// ROUTES: [I.N.D.U.C.E.S]

// Index:
app.get('/logs/', (req,res)=>{
    Logs.find({}, (err, allLogs)=>{
        res.render('Index', {
            allLogs: allLogs
        })
    })
})


// New:
app.get('/logs/new', (req,res)=>{
    res.render('New');
})


// Delete:
app.delete('/logs/:id', (req, res) =>{
    Logs.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs/');
    })
})


// Update:




// Create: 
app.post('/logs/', (req, res)=>{
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }

    Logs.create(req.body, (error, createdLogs)=>{
        res.redirect('/logs/')
    });
})

app.get('/logs/seed', (req, res)=>{
    Logs.create(seed, (err, foundLog)=>{
        res.redirect('/logs/');
    })
});


// Edit: 
app.get('/logs/:id/edit', (req,res)=>{
    console.log(req.params)
    Logs.findById(req.params.id, (err, foundLog)=>{
        if(!err){
            res.render(
                'Edit', {log: foundLog}
            );
        } else {
            res.send({msg: err.message})
        }
    });
});



// Show: 
app.get('/logs/:id',(req, res)=>{
    Logs.findById(req.params.id, (err, foundLog)=>{
        res.render('Show',{
            Log: foundLog
        });
    });
});


// Listen
app.listen(port, ()=>{
    console.log(`Server is listening on, ${port}`)
})