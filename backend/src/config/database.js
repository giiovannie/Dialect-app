import 'dotenv/config'
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

export const connectDatabase = async () => {
    await sequelize.authenticate()
    await sequelize.sync()
    console.info('Conexión con MySQL establecida.')
}