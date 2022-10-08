import  express, {Request, Response}  from "express";
import dotenv from "dotenv"
import DBService from './config/dbCobbection'


dotenv.config()
const app : any = express()




app.get('/', (request : Request, response : Response) => {
        response.status(200).json({
            message : "success"
        })
})



app.listen(process.env.PORT, ()=> {
    console.log(`App listing to the port num ${process.env.PORT}`)
    
})