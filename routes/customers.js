const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const ObjectsToCsv = require('objects-to-csv');

//customer mongodb document CRUD operations

//Get All
router.get('/', async (req, res) => {
    try{
        const customers = await Customer.find();
        const csv = new ObjectsToCsv(customers);
        await csv.toDisk('./customer_csv_files/customer_info.csv');
        res.json(customers)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    
})

//Get One
router.get('/:id',getCustomer,  (req, res) => {
    res.send(res.customer.customerId)
})

//Create One
router.post('/', async (req, res) => {
    const customer = new Customer({
        created: Date.now(),
        customerId: req.body.customerId,
        inoviceId: req.body.inoviceId
    })

    try{
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Update One
router.patch('/:id', getCustomer, async (req, res) => {
    if(res.body.customerId) {
        res.customer.customerId = req.body.customerId;
    }
    if(req.body.inoviceId){
        res.customer.inoviceId = req.body.inoviceId;
    }

    try{
        const updatedCustomer = await res.customer.save();
        res.json(updatedCustomer);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

//Delete One
router.get('/:id', getCustomer, async (req, res) => {
    try{
        await res.customer.remove();
        res.json({message: 'Deleted customer'});
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getCustomer (req, res, next) {
    let customer;
    try{
        customer = await Customer.findById(req.params.id);
        if(!customer){
            return res.status(404).json({message: 'Cannot find Customer'});
        } 

    } catch(err) {
        return res.status(500).json({message: err.message})
    }

    res.customer = customer;
    next();
}

module.exports = router;