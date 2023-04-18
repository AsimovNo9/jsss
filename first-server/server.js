 const express = require("express");

const app = express();

app.get("/", function(request, response){
	response.send("Hello");
});

app.get("/contact", function(req,res){
	res.send("Contact Damola @ adedamola.sode@gmail.com");
});

app.get("/about", function(req,res){
	res.send("I am a robotics engineer interested in learning \
		more about computers and the world of programming");
});

app.listen(3000, function(){
	console.log("Server has started on port 3000");
});
