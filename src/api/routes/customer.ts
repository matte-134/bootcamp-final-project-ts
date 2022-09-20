import express from 'express'
export const customerRouter = express.Router()
import Customer from '../../db/models/customer'

// CREATE /customer
customerRouter.post("/", async (req, res) => {
    await Customer.create(req.body)
    console.log(req.body)
    res.send("Customer added now")
})

// GET /customer (by first name)
customerRouter.get("/:firstName", async (req, res) => {
    // let findName: string = req.params.firstName.charAt(0).toUpperCase() + req.params.firstName.slice(1)
    let names = await Customer.findAll({
        where: {
            firstName: req.params.firstName
        }
    })
    res.send(names)
})