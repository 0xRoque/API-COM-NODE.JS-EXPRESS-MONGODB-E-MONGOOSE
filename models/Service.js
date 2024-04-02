const mongoose = require("mongoose")
const { Schema } = mongoose

// Define um esquema (schema) para os dados do serviço
const serviceSchema = new Schema({
        // Campo para armazenar o nome do serviço
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    // TimeStamps salva a data de criação e atualização do registo
}, {timestamps: true}) 

// Cria um modelo de dados chamado "Service" com base no esquema definido
const Service = mongoose.model("Service",serviceSchema)

// Exporta o modelo "Service" e o esquema "serviceSchema" para uso em outros arquivos
module.exports = {
    Service, serviceSchema
}
