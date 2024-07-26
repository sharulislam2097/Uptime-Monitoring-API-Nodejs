/*
 * Title: Routes
 * Description: Application Routes
 * Author: Sharul Islam
 * Date: 26-07-2024
 */

//dependencies

const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
    sample : sampleHandler,
};

module.exports= routes;
