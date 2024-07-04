const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res)=>{
    res.send("quieres una pepsi");
});

app.listen(port, ()=>{
    console.log(`Server ejecutando el el puerto ${port}`);
});


