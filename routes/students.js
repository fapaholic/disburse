const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all Students'})
})


router.get('/:id', (req, res) => {
    res.json({mssg: 'Get Single Students'})
})

router.post('/', (req, res) => {
    res.json({mssg: 'REGISTER a new Student'})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a Students'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a Students'})
})

module.exports = router