import dotenv from 'dotenv'
dotenv.config({
    
})
import app from './app.js'
import { connectDB } from './src/DB/db.js'

connectDB().then(
    ()=>{
    app.listen(`${process.env.PORT}`|| 8000 , ()=>{
        console.log(`Server Running on ${process.env.PORT} `);
    })
    }
).catch((error)=>{
    console.log('Failed To connect', error.message)
})