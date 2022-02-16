const express= require('express');
const app= express();
const dotenv = require('dotenv');
const db = require('./src/config/dbconfig');
var cors = require('cors')
var helmet = require('helmet')
var morgan = require('morgan')

// Config
app.use(express.json());
dotenv.config();
app.use(cors())
app.use(helmet())
app.use(morgan("common"))

// Routes
const loginRoute = require('./src/api/routes/login')
const usersRoute = require('./src/api/routes/users')

// Middleware
app.use('/api/login', loginRoute);
app.use('/api/users', usersRoute);
app.get("/ping", (req,res)=> {res.send("pong")} )

// Conntecting to Mongo Atlas db
db.connectDB();

app.listen(process.env.PORT, ()=>{
	console.log(`server is listening on port:${process.env.PORT}`)
})