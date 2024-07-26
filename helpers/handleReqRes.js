/*
 * Title: Handle Request Response
 * Description: Handle Request Response
 * Author: Sharul Islam
 * Date:25/7/24
 *
 */

//dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {notFoundHandler} = require("../handlers/routeHandlers/notFoundHandler");

// module scaffolding
const handler = {};

//handle Request Response
handler.handleReqRes = (req, res) => {
  // request handling

  //get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    trimedPath,
    method,
    queryStringObject,
    headersObject,
  }

  

  const chosenHandler = routes[trimedPath] ? routes[trimedPath] : notFoundHandler ;

  chosenHandler(requestProperties, (statusCode, payload)=>{
     statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
     payload = typeof(payload) === 'object' ? payload : {};
     const payloadString = JSON.stringify(payload);

     //return the final response
     res.writeHead(statusCode);
     res.end(payloadString);
  });

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    //response handling
    res.end("Hello Programmer");
  });
};

module.exports = handler;
