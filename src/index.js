var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.method == "GET"){
		if(req.url == "/welcome"){
      res.statusCode = 200;
			res.setHeader("Content-Type","text/plain");
			res.end('Welcome to Dominos!');
    }
		if(req.url == "/contact"){
      res.statusCode = 200;
			res.setHeader("Content-Type","application/json");
			res.end('{
phone: '18602100000',
email: 'guestcaredominos@jublfood.com'
}');
    }
}

module.exports = httpServer;
