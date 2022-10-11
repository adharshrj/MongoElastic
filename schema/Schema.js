const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic')
const { Client } = require('@elastic/elasticsearch')
const esClient = new Client({ node: 'http://localhost:9200' })

const PokemonSchema = new mongoose.Schema({
    "id": {
        required: true,
        type: Number
    },
    "name": {
        "english": {
            required: true,
            type: String
        },
        "japanese": {
            required: true,
            type: String
        },
        "chinese": {
            required: false,
            type: String
        },
        "french": {
                required: false,
                type: String
        }
    },

    "type": [{
        required: true,
        type: String    
    }],

    "base": {
        "HP": {
            required: true,
            type: Number
        },
        "Attack": {
            required: true,
            type: Number
        },
        "Defense": {
            required: true,
            type: Number
        },
        "Sp. Attack": {
            required: true,
            type: Number
        },
        "Sp. Defense": {
            required: true,
            type: Number
        },
        "Speed": {
            required: true,
            type: Number
        }
    }
})

// PokemonSchema.plugin(mongoosastic, {
//     esClient: esClient, 
// })

const Pokemon = mongoose.model('Pokemon', PokemonSchema)



module.exports = { Pokemon }

