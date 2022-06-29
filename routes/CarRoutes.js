const express = require('express');
const router = express.Router()
const { Car } = require('../schema/UserSchema') 
router.post('/create', (req, res) => {
    const data = new Car({
        brand: req.body.brand,
        model: req.body.model,
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
        const data = await Car.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router