const express = require("express");
const request = require("request");

const PORT = 5050;
const HOST = "localhost";
const API_SERVICE_URL = "https://www.metaweather.com/api/";

app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/search", (req, res) => {
  const query = req.query["query"];

  const url = API_SERVICE_URL + "location/search/?query=" + query;

  request(url).pipe(res);
});

app.get("/coords", (req, res) => {
  const lattlong = req.query["lattlong"];

  const url = API_SERVICE_URL + "location/search/?lattlong=" + lattlong;

  request(url).pipe(res);
});

app.get("/location", (req, res) => {
  const woeid = req.query["woeid"];

  const url = API_SERVICE_URL + "location/" + woeid;

  request(url).pipe(res);
});

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
