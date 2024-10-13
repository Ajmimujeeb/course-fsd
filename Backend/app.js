const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const app=new express()
app.use(cors())
app.use(morgan('dev'))
const bRoutes=require('./routes/basicroutes')
app.use('/course',bRoutes);
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection')









app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
    
})