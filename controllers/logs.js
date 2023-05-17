const methodOverride = require('method-override');
const seed = require("../resource/seed");
const Logs = require('../models/logs');
const express = require('express');
const app = express();




// Middleware:
app.use(express.urlencoded({ extended: false })); //body-parser
app.use(methodOverride('_method'));


// JSX View Engine:
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


// SEED 
app.get('/logs/seed', (req, res)=>{
    Logs.create(seed, (err, foundLog)=>{
        res.redirect('/logs/');
    })
});

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
app.put('/logs/:id', (req,res)=>{
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }

    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
        console.log(updatedLog.title)
        res.redirect(`/logs/${req.params.id}`); 
    });
});

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

module.exports= app;