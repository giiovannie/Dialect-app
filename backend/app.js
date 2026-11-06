import express from 'espress'
import "dotenv/config"
import cookieParser from 'cookie-parser'
import { startDB } from './src/config/database.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

const PORT = process.env.PORT || 3005;

app.listen(PORT, async()=>{
    try {
        await startDB()
        console.log(`server ensendido correctamente en el puerto :p`);
    } catch (error) {
        console.log(`lo sentimos ocurrio un error iniciando el servidor :c )`);
    }
})