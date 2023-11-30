const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware required to pass json reqest body
app.use( express.json() );


//import routes TODO api
const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);


//start server
app.listen(PORT, () => {
    console.log("server started at ${PORT}");
})

//connect to db
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get("/", (req,res)=>{
    res.send (`<h1> this is homepage</h1>`)
})