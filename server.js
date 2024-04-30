require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const studentsRoutes = require('./routes/students')

const app = express()

app.use((req, res, next)  => {
    console.log(req.path, req.method)
    next()
})
 
app.use(express.json())
app.use('/api/students',studentsRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })


