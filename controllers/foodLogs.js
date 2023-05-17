const express = require('express');
var router = express.Router();
const FoodLogs = require('../models/foodLogs');
const seed = require('../resource/foodSeed');

// SEED 
router.get('/seed', async (req, res)=>{
    await FoodLogs.deleteMany({});
    await FoodLogs.insertMany(seed);
    // FoodLogs.create(seed, (err, foundLog)=>{
    //     res.redirect('/foodLogs');
    // })
});


// Index:
router.get('/', (req,res)=>{
    FoodLogs.find({}, (err, allLogs)=>{
        res.render('../views/foods/Index', {
            allLogs: allLogs
        })
    })
})

// New:
router.get('/new', (req,res)=>{
    res.render('../views/foods/New');
})

// Delete:
router.delete('/:id', (req, res) =>{
    FoodLogs.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/');
    })
})

// Update:
router.put('/:id', (req,res)=>{
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }

    FoodLogs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
        console.log(updatedLog.title);
        res.redirect('back');
        // res.redirect('..');
        // res.redirect(`/${req.params.id}`); 
    });
});

// Create: 
router.post('/', (req, res)=>{
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }

    FoodLogs.create(req.body, (error, createdLogs)=>{
        res.redirect('/')
    });
})

// Edit: 
router.get('/:id/edit', (req,res)=>{
    console.log(req.params)
    FoodLogs.findById(req.params.id, (err, foundLog)=>{
        if(!err){
            res.render(
                '../views/foods/Edit', {foundLog: foundLog}
            );
        } else {
            res.send({msg: err.message})
        }
    });
});

// Show: 
router.get('/:id',(req, res)=>{
    FoodLogs.findById(req.params.id, (err, foundLog)=>{
        res.render('../views/foods/Show',{
            Log: foundLog
        });
    });
});

module.exports= router;