const express = require("express");
const bodyParser = require("body-parser");
const TSQL = require("./lib/TSQL");

const expressWS = require("express-ws")(express());
const app = expressWS.app;

const Config = require("./config");

import Router from "./routes/Router";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

Router(app, {
	TSQL: new TSQL(Config),
	WebSocket: expressWS
});

app.listen(Config.Server.Port, () => {
	console.log(`Insight API is now listening on port: ${ Config.Server.Port }`);
});