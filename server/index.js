require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth")
const connection = require("./db");
const dotenv = require("dotenv");
 
dotenv.config()
//dotenv.config()
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req,res)=>{
    res.send ("API IS RUNNING SUCCESSFULLY !");
})
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT;
app.listen(port, console.log(`Listening on port ${port}...`));