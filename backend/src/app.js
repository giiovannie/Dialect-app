import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDatabase } from './config/database.js'

const app = express()
app.use(express.json())
app.use(cookieParser())

const allowedOrigins = (process.env.CORS_ORIGINS ?? '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)

app.use(cors({
    origin: (origin, callback) => {
        callback(null, !origin || allowedOrigins.includes(origin))
    },
    credentials: true,
}))

const PORT = process.env.PORT || 3005

const startServer = async () => {
    await connectDatabase()
    app.listen(PORT, () => {
        console.info(`Servidor iniciado en el puerto ${PORT}.`)
    })
}

startServer().catch((error) => {
    console.error('No se pudo iniciar el servidor. Falló la conexión con MySQL.')
    console.error(error)
    process.exitCode = 1
})