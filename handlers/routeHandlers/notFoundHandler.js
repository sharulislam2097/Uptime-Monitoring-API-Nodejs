/*
 * Title: Not found handler
 * Description: 404 not found handler
 * Author: Sharul Islam
 * Date: 26-07-2024
 */

//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "your requested URL not found",
  });
};

module.exports = handler;
