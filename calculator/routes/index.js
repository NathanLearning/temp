const express = require('express')

const router = express.Router()

router
    .get('/add/:nOne/:nTwo', (req, reply) =>  {
        const { nOne, nTwo } = req.params

        reply.send(String(Number(nOne) + Number(nTwo)))
    })

    .get('/subtract/:nOne/:nTwo', (req, reply) =>  {
        const { nOne, nTwo } = req.params

        reply.send(String(nOne) - (nTwo))
    })

    .get('/multiply/:nOne/:nTwo', (req, reply) =>  {
        const { nOne, nTwo } = req.params

        reply.send(String(nOne) * (nTwo))
    })

    .get('/add/:nOne/:nTwo', (req, reply) =>  {
        const { nOne, nTwo } = req.params

        reply.send(String(nOne) / (nTwo))
    })

module.exports = router