// Dependencies: 
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
const port = 3000;
// Instantiate express app
const app = express()
//require route controllers
const logRoutes = require('./controllers/logs')
const foodLogRoutes = require('./controllers/foodLogs')


// MONGOOSE:
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, 
                { useNewUrlParser: true, 
                 useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


// MIDDLEWARE:

app.use(express.urlencoded({ extended: false })); //body-parser
app.use(methodOverride('_method'));

// // JSX View Engine:
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// Routes: 
app.use('/logs', logRoutes)
app.use('/foodLogs', foodLogRoutes)



// LISTEN
app.listen(port, ()=>{
    console.log(`Server is listening on, ${port}`)
})