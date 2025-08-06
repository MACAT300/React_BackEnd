// create a server
const http = require("http");

// select server
const server = http.createServer((request, response) => {
  // response code s for the machine
  response.writeHead(200);
  // response meessage for human
  response.end("Hello World!11111");
});

// start a server
server.listen(1314, () => {
  // confirmation of the server has started
  console.log("The server is running at http://localhost:1314");
});
