const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message:'Handling POST requests to /orders'
  })
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
      message: 'You discovered order Id',
      orderId: req.params.orderId
    })
})

router.patch('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated order'
  })
})

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted order',
    orderId: req.params.orderId
  })
})

module.exports = router

