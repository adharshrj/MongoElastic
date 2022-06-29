const express = require('express');
const router = express.Router()
const { User } = require('../schema/UserSchema') 
router.post('/create', (req, res) => {
    const data = new User({
        name: req.body.name,
        age: req.body.age,
        cars: req.body.cars
    })
    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (_req, res) => {
    try{
        const data = await User.find().populate('cars').exec();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;