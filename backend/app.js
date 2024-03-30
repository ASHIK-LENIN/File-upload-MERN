const express = require('express')
const appRouter = require('./routes/file.route')
const port = 5000;
const app = express();

app.use('api/v2', appRouter)

app.listen( port,() =>{
    console.log(`app is listen at ${port}`);
})

module.exports = app;
