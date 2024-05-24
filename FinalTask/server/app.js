const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    description: String
})
const ProductModel = mongoose.model('Product', ProductSchema)
app.get('/products', async (req, res) => {
    try {
        const products = await ProductModel.find({})
        if (products.length > 0) {
            res.send({
                message: 'success',
                data: products
            })
        } else {
            res.send({
                message: 'data empty',
                data: null
            })
        }
    } catch (error) {
        res.send({
            message: error,
            error: true
        })
    }
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    try {
        const product = await ProductModel.findById(id)
        if (product) {
            res.send({
                message: 'success',
                data: product
            })
        } else {
            res.send({
                message: 'data empty',
                data: null
            })
        }
    } catch (error) {
        res.send({
            message: error,
            error: true
        })
    }
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await ProductModel.findByIdAndDelete(id)

        res.send({
            message: 'deleted',
            response: response
        })

    } catch (error) {
        res.send({
            message: error,
            error: true
        })
    }
})

app.post('/products', async (req, res) => {

    const newProduct = new ProductModel(req.body)
    await newProduct.save()
    res.send({
        message: 'posted',
        data: newProduct
    })

})

mongoose.connect('mongodb+srv://aydanbabayeva:aydan123@products.sf29nrm.mongodb.net/products?retryWrites=true&w=majority&appName=Products')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
