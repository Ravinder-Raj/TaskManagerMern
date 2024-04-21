const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const routes = require("./routes/TaskRoutes")

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json()); 
app.use(cors({
    origin: ["https://gotaskmanager.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log('Mongo db connected...'))
.catch((err) => console.log(err));
  
//all routes
app.use("/api", routes);
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
