const mongoose = require('mongoose');
const { Schema } = mongoose
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
            ref: "Car"
        }
    ]

})

const User =  mongoose.model('User', UserSchema)
const Car =  mongoose.model('Car', CarSchema)

module.exports = {User, Car}