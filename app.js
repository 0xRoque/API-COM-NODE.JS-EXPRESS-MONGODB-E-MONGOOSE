const express = require("express")
const cors = require("cors")
const app = express()

require("dotenv").config();

app.use(cors())

// Comunicar dados via json
app.use(express.json())

// DB connection
const conn = require("./db/conn")
conn()

// Routes 
const routes = require("./routes/router")

app.use("/api",routes)

app.listen(3000, function(){
    console.log("Servidor Online!")
})

