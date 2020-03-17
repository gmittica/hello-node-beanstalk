var cors = require('cors');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(cors())


app.get('/', function(req, res){
  res.json([{
    "id": 1,
    "title": "Questo è un titolo"
  }])
})

app.listen(port, function(){
  console.log('Server listening on ', port);
})
