const fs = require('fs'); // pull in the file system module

// I made an index function that takes the filepath, if not I had to do a getIndex
// function for each client.html
const reusableGetIndex = (request, response, filepath) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(fs.readFileSync(`${__dirname}${filepath}`));
  response.end();
};


module.exports.reusableGetIndex = reusableGetIndex;
