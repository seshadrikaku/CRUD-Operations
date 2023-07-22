import  Express  from "express";
import cors from "cors"
import connect from "./database/conn.js";
import dotenv from "dotenv";
import route from "./Routes/userRoute.js";

const app=Express();

app.use(cors())
dotenv.config()
app.use(Express.json())
app.use("/api",route)




connect().then(()=>{
try {
    app.listen(5000,()=>{
        console.log("started on port 5000")
    })  
} catch (error) {
    throw error
}
console.log("database is connected")
}).catch((err)=>{
    console.log(err)
})





