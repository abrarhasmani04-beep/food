//start server

import dotenv from 'dotenv'
dotenv.config()
import app from "./src/app.js";
import connectDB from "./src/db/db.js";


const PORT = 9000;

app.listen(PORT,()=>{
console.log('server is running on port 9000');
connectDB()

})