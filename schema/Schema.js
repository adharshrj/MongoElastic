const mongoose = require('mongoose');
const { Schema } = mongoose
const mongoosastic = require('mongoosastic')
const { Client } = require('@elastic/elasticsearch')
const esClient = new Client({ node: 'http://localhost:9200' })

const CarSchema = new mongoose.Schema({
    brand: {
        required: true,
        type: String
    },

    model: {
        required: true,
        type: String
    },
})

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    cars: [
        {
            type: Schema.Types.ObjectId,
            ref: "Car",
            es_schema: CarSchema,
            es_indexed: true,
            es_type: 'nested'
        }
    ]

})

UserSchema.plugin(mongoosastic, {
    esClient: esClient, 
    populate: [
        { path: 'cars'}
    ]
    
})

const User = mongoose.model('User', UserSchema)
const Car = mongoose.model('Car', CarSchema)


module.exports = { User, Car }

