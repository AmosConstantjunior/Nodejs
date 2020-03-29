const express = require('express');
const app = express();
const path = require('path');


app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});
app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
    
  });