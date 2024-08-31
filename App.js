import express from 'express';
import sequelize from './config/db.js'; 
import {router} from './router/router.js'
const app = express()
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    try{
        await sequelize.authenticate()
        console.log('Connected to database')
        console.log(`Server is running on port ${PORT}`)
    }catch(err) {
        console.log('Error connecting to database')
    }
})