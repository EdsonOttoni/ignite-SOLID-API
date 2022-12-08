import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'

import { AppError } from './errors/AppError'
import { router } from './routes'
import swaggerFile from './swagger.json'

async function initializedServer() {
  const app = express()
  const PORT = process.env.PORT || 3333

  try {
    app.use(express.json())

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup())

    app.use(router)
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          message: err.message,
        })
      }

      return res.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
      })
    })

    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}/`)
    })
  } catch (err) {
    console.log(err)
  }
}

initializedServer()
