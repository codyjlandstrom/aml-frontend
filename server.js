// server.js
// where your node app starts

// init project
const express = require('express');
// const request = require('request');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Detail page routing
app.get('/detail', function(request, response) {
  response.sendFile(__dirname + '/views/detail.html');
});

// measures page routing
app.get('/measures', function(request, response) {
  response.sendFile(__dirname + '/views/detail.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/test', function(req, res, next) {
  request({
    uri: 'https://2p4fw5ceka.execute-api.us-west-2.amazonaws.com/prod/measures/',
  }).pipe(res);
});

// Test requests library
// request('https://2p4fw5ceka.execute-api.us-west-2.amazonaws.com/prod/measures', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log("This is the body" + body) // Print the google web page.
//   }
// })

// const baseURL = 'https://0c5cb147-9973-41a2-8df0-946c0b95e117.mock.pstmn.io/measures/';
// const DAT_TOKEN = 'f9bdeb0ce173056c81ff2000909536d0e5857d43'
// const request = new XMLHttpRequest()
// const listList = document.getElementById('list');


// request.open('GET', baseURL, true)
// request.setRequestHeader('Authorization', 'Bearer ' + DAT_TOKEN);
// request.onload = function() {
//   // Begin accessing JSON data here
//   const data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(measure => {
//       const newListItem = document.createElement('li');
//       newListItem.innerHTML = list;
//       listList.appendChild(newListItem);
//     })
//   } else {
//     console.log('error')
//   }
// }
