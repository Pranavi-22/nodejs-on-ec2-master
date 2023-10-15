var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. THis is TECHESSAY, pranavi hi nameste hello,demo 123'); //write a response to the client
  res.end(); //end the response
}).listen(5000); //the server object listens on port 4000
