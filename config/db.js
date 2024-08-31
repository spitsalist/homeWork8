import Sequelize from 'sequelize'
import config from './config.json' assert {type: 'json'}
const env =  'development'
const dbConfig = config[env]

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
})

export default sequelize