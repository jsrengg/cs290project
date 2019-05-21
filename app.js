var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");
app.set('port', port);

app.get("/", function(req, res){
   res.render("home.html") 
});

app.get("/about", function(req,res){
   res.render("about.html");
})

app.get("/gallery", function(req,res){
   res.render("gallery.html");
})

app.get("/resources", function(req,res){
   res.render("resources.html");
})

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');

});