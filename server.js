require("dotenv").config(); 

/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');



/* ====== Internal Modules  ====== */
// Required Internal Modules
// all code that is our code
require('./config/database');
const routes = require("./routes");
const indexRouter = require('./routes/index');



/* ====== Instanced Module  ====== */
// Create the Express app
const app = express();
// returns an object that is our server

	
/* ====== Middleware  ====== */ 
//(app.use)
// body data middleware
app.use(express.urlencoded({extended:true}));
//method overrise middlware
app.use(methodOverride('_method'));
//serve public files
app.use(express.static('public'));
//logger
app.use((req,res,next)=> {
    console.log(req.url, req.method);
    next();
});


/* ====== System Variables  ====== */
const PORT = process.env.PORT || 4000; // full caps signify a config variable

/* ====== App Configuration  ====== */
app.set('view engine', 'ejs');

/* ====== Routes  ====== */
// app.use("/posts", indexRouter);
app.get("/posts", (req,res)=>{
    res.render('./posts/index')
}); //need to change this and use 'use' to use the routers.... 



app.get("/", (req, res) => {
	res.render("index");
});

/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)
app.listen(PORT, function () {
	console.log(`i'm a little server live on port http://localhost:${PORT}`);
});
