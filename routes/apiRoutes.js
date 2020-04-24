var deleteData = require("../data/deleteData");
var saveData = require("../data/saveData");
var writeData = require("../data/writeData");

module.exports = function(app) {
    
  
    app.get("/api/delete", function(req, res) {
      res.json(deleteData);
    });
  
    app.get("/api/save", function(req, res) {
      res.json(saveData);
    });

    app.get("/api/write", function(req, res) {
        res.json(writeData);
      });

      
};