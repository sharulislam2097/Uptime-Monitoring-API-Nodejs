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
