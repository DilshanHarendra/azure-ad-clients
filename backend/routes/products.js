const express = require('express');
const readMiddleware = require("../middlewares/readMiddleware");
const writeMiddleware = require("../middlewares/writeMiddleware");
// initialize router
const router = express.Router();
const products =[]

router.get('/',readMiddleware, (req, res) => {
    res.status(200).send({data:products})
});
router.get('/:id',readMiddleware, (req, res) => {
    const id= req.params.id
    res.status(200).send({data:products[id]})
});

router.post('/',writeMiddleware, (req, res) => {
    const product ={
        ...req.body,
        id: products.length + 1
    }
    products.push(product)
    res.status(200).send({data:product})
});


module.exports = router
