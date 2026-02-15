const http = require("http");
http.createServer((req,res) => {
	res.write("Hello from devops project");
	res.end();
}).listen(3200);