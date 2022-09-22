import express from 'express'
import Customer from '../../db/models/customer'
export const tablesRouter = express.Router()
import Tables, { TablesInterface } from '../../db/models/tables'
import { tables } from '../../seeders/seedData'

// ADD Customer to Table // /tables/:tablenumber


tablesRouter.put('/:tableNumber', async (req, res) => {
    let foundTable: any = await Tables.findOne({
    where: {
        tableNumber: req.params.tableNumber
    }
    })
    let foundCustomer: any = await Customer.findByPk(req.body.id)
    await foundTable.setCustomer(foundCustomer)
    await foundTable.update({
        occupied: true
    })
    res.send("Customer added to table")
})

// GET customer info from table

tablesRouter.get('/:tableNumber', async (req, res) => {
    let foundTable: any = await Tables.findOne({
        where: {
            tableNumber: req.params.tableNumber
        }
    })
    if(foundTable.occupied === true) {
        let customer = foundTable.CustomerId
        let data: any = await Customer.findAll({
            where: {
                id: customer
            }
        })
        res.send(data)
    } else {
        res.send('Table unoccupied')
    }
})

// REMOVE customer from table

tablesRouter.put('/:tableNumber/remove', async (req, res) => {
    let foundTable: any = await Tables.findOne({
        where: {
            tableNumber: req.params.tableNumber
        }
    })
    let customer = foundTable.CustomerId
    console.log(customer)
    await foundTable.setCustomer(null)
    await foundTable.update({
        occupied: false
    })
    await Customer.destroy({
        where: {
            id: customer
        }
    })
    res.end()
 })



// GET tables 

tablesRouter.get('/', async (req, res) => {
    let tables = await Tables.findAll()
    res.send(tables)
})

// GET tables that are unoccupied

tablesRouter.get('/unoccupied/find', async (req, res) => {
    let unoccupied: Array<object> = await Tables.findAll({
        where: {
            occupied: false
        }
    })
    let tables: any = unoccupied.map(getTableNumber)
    function getTableNumber (table: any): string  {
        return "Table " + table.tableNumber + ' has capcity of ' + table.capacity
    }
    // let capacity: any = unoccupied.map(getTableCapacity)
    // function getTableCapacity (table: any): Array<number> {
    //     return table.capacity
    // }
    res.send(unoccupied)
})

// GET tables that are occupied

tablesRouter.get('/occupied/find', async (req, res) => {
    let occupied: Array<object> = await Tables.findAll({
        where: {
            occupied: true
        }
    })
    let tables: any = occupied.map(getTableNumber)
    function getTableNumber (table: any): string {
        return table.tableNumber
    }
    res.send(tables)
})