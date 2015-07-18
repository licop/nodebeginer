var http = require("http"),
    url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8110);
  console.log("Server has started.");
}

exports.start = start;