import { tables, employee } from '../seeders/seedData'
import Tables from './models/tables'
import { db } from './models'
import Employee from './models/employee'

export const seed = async () => {
    await db.sync({ force: true })
    await Promise.all(tables.map(table => Tables.create(table)))
    await Promise.all(employee.map(employee => Employee.create(employee)))
    // await Waiting.create()
    console.log('Database populated')
}