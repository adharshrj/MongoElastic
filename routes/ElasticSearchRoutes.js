const { phraseSearch } = require('../SearchEngine/SearchEngine');
const { Pokemon } = require('../schema/Schema');
const express = require('express');
const router = express.Router()

router.get('/:index/:type', async (req, res) => {
    const data = await phraseSearch(req.params.index, req.params.type, req.query.q);
    res.json(data);
});


router.post('/sync', async (_req, res) => {
    const stream = await Pokemon.synchronize();
    let count = 0;
    
    stream.on('data', function(_err, _doc) {
      count++;
      console.log("Elastic Indexing User: ",count)

    }); 
    
    stream.on('close', function() {
      console.log('Elastic indexed ' + count + ' users!');
      res.status(200).json(`Elastic indexed ${count} users!`)
    });
    
    stream.on('error', function(err) {
      console.log(err);
      res.status(400).json(`Error Occured - ${err}`)
    });

    return res
});

module.exports = router;
