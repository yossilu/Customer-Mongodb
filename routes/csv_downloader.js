const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', async (req, res) => {
    // console.log(__dirname)
    const filePath = './customer_csv_files/customer_info.csv';
    res.download(filePath);
})

module.exports = router;