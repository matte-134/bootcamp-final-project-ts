import express, { Application, Request, Response, Router } from 'express'
import { seed } from './db/init'
import { customerRouter } from './api/routes/customer'
import { tablesRouter } from './api/routes/tables'
import { displayRouter } from './api/routes/display'



const app: Application = express()
const port = 8000

seed()
function loggerMiddleware(request: express.Request, response: express.Response, next: () => void) {
    console.log(`${request.method} ${request.path}`)
    next()
}

app.use(loggerMiddleware)
// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/customer', customerRouter)
app.use('/tables', tablesRouter)
app.use('/display', displayRouter)
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send('Welcome')
})

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}