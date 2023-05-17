const Logs = require('../models/logs');
const express = require('express');
var router = express.Router();

// SEED 
router.get('/seed', (req, res)=>{
    Logs.create(seed, (err, foundLog)=>{
        res.redirect('/logs/');
    })
});

// Index:
router.get('/', (req,res)=>{
    Logs.find({}, (err, allLogs)=>{
        res.render('Index', {
            allLogs: allLogs
        })
    })
})

// New:
router.get('/new', (req,res)=>{
    res.render('New');
})

// Delete:
router.delete('/:id', (req, res) =>{
    Logs.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs/');
    })
})

// Update:
router.put('/:id', (req,res)=>{
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
router.post('/', (req, res)=>{
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }

    Logs.create(req.body, (error, createdLogs)=>{
        res.redirect('/')
    });
})

// Edit: 
router.get('/:id/edit', (req,res)=>{
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
router.get('/:id',(req, res)=>{
    Logs.findById(req.params.id, (err, foundLog)=>{
        res.render('Show',{
            Log: foundLog
        });
    });
});

module.exports= router;