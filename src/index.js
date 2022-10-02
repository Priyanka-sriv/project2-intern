const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route.js')
// const multer  = require('multer')
const { default: mongoose } = require('mongoose')
const app = express()



app.use(bodyParser.json())
// app.use(multer().any())

mongoose.connect("mongodb+srv://Priyanak-BackendProject:CD0Y7Vi1xxgIRocV@cluster0.78bw9.mongodb.net/test"
    , {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.use(function (req, res) {
    return res.status(400).send({status : false, message : "path not found"})
    });


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
