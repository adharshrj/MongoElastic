const express = require('express');
const router = express.Router()
const { Car } = require('../schema/Schema') 
router.post('/create', async (req, res) => {
    const data = new Car({
        brand: req.body.brand,
        model: req.body.model,
    })
    try {
        await data.save();
        res.status(200).json(data)
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

router.get('/get/:id', async (req, res) => {
    try{
        const data = await Car.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Car.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Car.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router