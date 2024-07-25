/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sharul Islam
 * Date: 25/7/24
 *
 */

//dependencies
const http = require("http");
const { type } = require("os");
const url = require("url");

//app object - module scaffolding
const app = {};

//configuration

app.config = {
  port: 3000,
};

//create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port no ${app.config.port}`);
  });
};

//handle Request Response
app.handleReqRes = (req, res) => {
  // request handling

  //get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;
    
  
  
  

  //response handling
  res.end("Hello Programmer");
};

// start the server
app.createServer();
