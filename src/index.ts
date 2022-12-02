import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { router } from './routes'
import swaggerFile from './swagger.json'

async function initializedServer() {
  const app = express()
  const PORT = process.env.PORT || 3333

  try {
    app.use(express.json())

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup())

    app.use(router)

    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}/`)
    })
  } catch (err) {
    console.log(err)
  }
}

initializedServer()
