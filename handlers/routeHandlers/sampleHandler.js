/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Sharul Islam
 * Date: 26-07-2024
 */

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
