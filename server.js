var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('Questa è una prova con nuovo step manuale!')
})

app.listen(port, function(){
  console.log('Server listening on ', port);
})
