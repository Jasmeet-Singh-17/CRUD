const Products = require('../models/products')
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/products')
    .then(() => {
        console.log("Mongo Connection Success")
    })
    .catch((err) => {
        console.log("Mongo Error")
        console.log(err)
    })

const products = [
    {
        name: 'Onion',
        qty: 10,
        price: 10,
        isAvailable: true
    },
    {
        name: 'Potato',
        qty: 5,
        price: 7,
        isAvailable: false
    },
    {
        name: 'Milk',
        qty: 100,
        price: 50,
        isAvailable: true
    },
    {
        name: 'Bread',
        qty: 50,
        price: 30,
        isAvailable: true
    },
    {
        name: 'Butter',
        qty: 40,
        price: 79,
        isAvailable: false
    }
]

Products.insertMany(products)
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })



