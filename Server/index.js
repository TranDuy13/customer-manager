const route = require('./routes/index')
const https = require("https");
const {MONGO_URL} =require('./models/index')
const hostname = 'server1.hsthuyhoang.com';        
const express = require('express')
const mongoose= require('mongoose')
const {PORT} = require('./models/index')
const app =express()
const fs = require('fs');
const cors = require("cors");
const connectDB= async()=>{
    try{
        await mongoose.connect(MONGO_URL,{
                // useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useFindAndModify: false
            }
        )

        console.log('Connected')
    }catch(err){
        console.log(err.message)
        process.exit(1)
    }

}
app.use(express.json({ limit: '100mb' })); // Change '50mb' to the desired limit or use '0' for unlimited

// Increase payload size limit for form data requests
app.use(express.urlencoded({ limit: '100mb', extended: true }))
app.use(cors())
app.use(express.json())
app.use(route);
connectDB();
const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cer.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT, () => {
    console.log("HTTP server up and running on port"+PORT)
})