const mongoose = require("mongoose")

require("dotenv").config()

async function main(){

    try {
        await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.fhvvjqt.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Conectado ao banco de dados")
    } catch (error) {
        console.log(`Error: ${error}`)
    }

}

module.exports = main