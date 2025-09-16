const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Products = require('./models/products');
const AppError = require('./utils/AppError');
const wrapAsync = require('./utils/wrapAsync');
const ejsMate = require('ejs-mate');


// Mongoose Connection
mongoose.connect('mongodb://127.0.0.1:27017/products')
    .then(() => {
        console.log("Mongo Connection Success")
    })
    .catch((err) => {
        console.log("Mongo Error")
        console.log(err)
    })

//Config
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Routes
app.get('/', (req, res) => {
    res.render('home');
})

//CRUD

//Create

app.get('/products/new', (req, res) => {
    res.render('products/new');
    console.log("Add Products Page ");
})

app.post('/products', wrapAsync(async (req, res) => {
    const product = new Products(req.body);
    await product.save();
    res.redirect('/products');
    console.log(`${product.name} Page `);
}))

//Read 

app.get('/products', wrapAsync(async (req, res) => {
    const allProducts = await Products.find({});
    res.render('products/index', { allProducts });
    console.log("All Products Page ");
}))

app.get('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.render('products/show', { product });
    console.log(`${product.name} Page `);
}))

//Update

app.get('/products/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.render('products/edit', { product });
    console.log("Edit Product Page ");
}))

app.patch('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const product = await Products.findByIdAndUpdate(id, req.body);
    res.redirect(`/products/${id}`);
    console.log(`${product.name} Page`)
}))

//Delete

app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Products.findByIdAndDelete(id);
    res.redirect("/products");
}))

//404
app.all(/(.*)/, (req, res, next) => {
    next(new AppError(404, 'Page NOT FOUND !!'))
})

//Error
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong !!" } = err;
    res.status(statusCode).render('error', { err, message });
})

//Server
app.listen(3000, () => {
    console.log("Server Running");
})