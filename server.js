const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/aboutus', (req, res) => {
    res.send("hi <strong>muram</strong>");
});

app.get("/User",(req,res)=>{
 var q = [{id:1,username:"admin",password:"123"},{id:1,username:"admin",password:"123"},{id:1,username:"admin",password:"123"}];
req.send(q);

})
app.listen(3000, () => console.log('Example app listening on port 3000!'));

