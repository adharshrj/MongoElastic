const express = require('express');
const router = express.Router()
const { User } = require('../schema/Schema')
router.post('/create',async (req, res) => {
    const data = new User({
        name: req.body.name,
        age: req.body.age,
        cars: req.body.cars
    })
    try {
        await data.save();
        return res.status(200).send(data)
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
})

router.get('/getAll', async (_req, res) => {
    try {
        const data = await User.find().populate('cars').exec();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/get/:id', async (req, res) => {
    try {
        const data = await User.findById(req.params.id).populate('cars').exec();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
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
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;