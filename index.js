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
const environment = require("./helpers/environments");

//app object - module scaffolding
const app = {};

//create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening to port no ${environment.port}`);
  });
};

//handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
