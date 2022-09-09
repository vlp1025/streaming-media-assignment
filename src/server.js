const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);
  switch (request.url) {
    case '/':
      htmlHandler.reusableGetIndex(request, response, '/../client/client.html');
      break;

    case '/page2':
      htmlHandler.reusableGetIndex(request, response, '/../client/client2.html');
      break;

    case '/page3':
      htmlHandler.reusableGetIndex(request, response, '/../client/client3.html');
      break;

    case '/party.mp4':
      mediaHandler.getParty(request, response);
      break;

    case '/bling.mp3':
      mediaHandler.getBling(request, response);
      break;

    case '/bird.mp4':
      mediaHandler.getBird(request, response);
      break;

    default:
      htmlHandler.reusableGetIndex(request, response, '/../client/client.html');
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
