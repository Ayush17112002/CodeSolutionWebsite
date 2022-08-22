const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log("Error in running the Server.");
    }else{
        console.log("Server is running at port ", port);
    }
})