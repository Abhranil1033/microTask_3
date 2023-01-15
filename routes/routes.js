const express = require('express');
const router = express.Router();

router.get('/get-address', (req, res)=>{
    res.render('index');
})



module.exports = router;