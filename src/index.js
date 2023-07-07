
import { corsConfig } from './middleware/corsConfig.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { testRouter } from './routes/test.routes.js'
dotenv.config()
const PORT = process.env.PORT || 3000

// Configuración del server
const app = express()
app.use(express.json())

// Configuración del cors
app.use(cors())
app.use(corsConfig)

// Rutas
app.use('/api/', testRouter)

// Endpoints
app.use('/', (req, res) => {
  return res.status(200).json({
    msg: 'Bienvenido al backend del server IoT'
  })
})
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  })
})
app.listen(PORT, () =>
  console.log(`\x1B[34mServer running in ${PORT} port.\x1B[0m`)
)
