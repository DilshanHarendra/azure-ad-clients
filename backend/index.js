const express = require('express');
const morgan = require('morgan');
const passport = require('./passportConfig');
const cors = require('cors');
const app = express();
const productRouter = require('./routes/products');

app.use(express.json());
app.use(cors());



app.use(morgan('dev'));

app.use(passport.initialize());






app.use('/api/products', productRouter);


app.get('/public', (req, res) => {
    res.send( {'date': new Date() } )
});


/*
* secret=2ad4a05d-f4d2-4f81-a1ea-703936e03d13
* value = dkY8Q~K6aXuEOaYhDBeodjJQEnpDbRyi6aFYZcWz
* */


app.listen(8000,()=>console.log("http://localhost:8000"))
