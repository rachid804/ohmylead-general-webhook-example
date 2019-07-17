var http = require("http");

var options = {
  "method": "POST",
  "hostname": "oml.test",
  "port": null,
  "path": "/webhooks/0a89f8b6-70e2-4bcc-8fc2-536d3fc69ef9",
  "headers": {
    "cookie": "RNJ4k7X4b7OhYJifeXoDJbOOLBUiaqc05cKj3LvQ=eyJpdiI6ImZcL2gzZXNPbUZqUGlWeU1LS2pBRFp3PT0iLCJ2YWx1ZSI6IkdsczJGR2RRU0QrdUZ5RCtiMnVTTXdDeWsxMFVRUVYzdktNQlZmVkxFanRzMTRsNVpFcU14YkxQSUJRU1NoaTBuTmFkVGY3dzhBTjV4XC9WZG1sVEZxekdRUVwvdjl0SHBjSVUrbzdcL2hQVjhGenplOVNIbXc5RjFjVlJFdWhyQVBGVXhDcEVXQk9hU01IdVlOSmNqemFNS255b0ljM2JiZW5NTGh3Wkc4a2FvaDlTWVBwczZQQ0NTQkJ0cWNEVmJ0a080dGo1dEs3SHdwc2RGNXEyVFhkQXRUR1lSUUEwcWpjRXF4QTJmNWhOTzg9IiwibWFjIjoiMmUxOTYyZjc1MTFkZDFjYmJiZjJhNTJiZTc5ZDNhMTQ5NGZhMTc0OGFkYTAyMzZlOGIyYzcwYjg4NTdhNGUyMiJ9",
    "content-type": "application/json",
    "accept": "application/json",
    "content-length": "156"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  first_name: 'John',
  lastt_name: 'Doe',
  email: 'john.doe@example.com',
  phone: '+212600000000',
  custom1: 'Custom 1',
  custom2: 'Custom 2'
}));
req.end();