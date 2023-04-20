const express = require("express");
const https = require("https");
const app = express();

const api_call = "https://api.openweathermap.org/data/2.5/weather?lat=51.39221687850878&lon=-0.0617165256099536&appid=97b36ec53c8382cc6904c36d43547827"

app.get("/", function(req, res){
	https.get(api_call, function(response){
		console.log(response.statusCode);
	});
});


app.listen(3000, function(){
	console.log("App is running on port 3000");
});
