// node app called fetcher.js.
// takes two command line arguments:
// 1. a URL
// 2. a local file path 

// should download the resource at the URL 
//to the local path on your machine. 
//Upon completion, it should print out a message
// like Downloaded and saved 1235 bytes 
// to ./index.html.

//1.make an http request and wait for response.
const request = require('request');
//use the request library to make the HTTP request
const fs = require('fs');
//Use Node's fs (file system) module to write the file (enables interacting with the file system)
const args = process.argv.slice(2);
//accept arguments from command line and slice first two irrelevant arguments
const URL = args[0];
//url to download from input into command line
const localFilePath = args[1];


// 2. After http request complete...

// 3. take data you receive & write to local file
const fetcher = (URL, localFilePath) => {
  request(URL, function (error, response, body) {
    if (error) {
      console.log('Failed to download resource');
    }
    fs.writeFile(localFilePath, body, err => {
      //asynchronously write data to the file, replacing if it already exists
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded ${body.length} bytes to ${localFilePath}`);
      //print confirmation of download NOTE: --> (add byte size)
    });

  });
  
};

fetcher(URL, localFilePath);


// EXPECTED > INPUT & OUTPUT
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html


// const fs = require('fs');

// const content = 'Some content!';

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });
