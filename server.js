var express = require("express");
var fs = require("fs")
var app = express();
var PORT = process.env.PORT || 8080;

function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });