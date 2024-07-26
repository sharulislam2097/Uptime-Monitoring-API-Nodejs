/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sharul Islam
 * Date: 25/7/24
 *
 */

//dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

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
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
