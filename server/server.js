var express = require('express');
var bodyParser = require("body-parser");
var invoices = require('../modals/invoices.js')
var client = require('../modals/client');

var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var defaultRoute = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

defaultRoute.route("/hello").get(function (req, res) {
    var clientId = req.query.clientId;
    invoices.getInvoices(clientId, req, res, undefined);
});


defaultRoute.route("/info").get(function (req, res) {
    var clientId = req.query.clientId;
    client.getBasicInfo(clientId,req, res);
});

defaultRoute.route("/clients").get(function(req,res){
    client.getAllClients(req,res);
});

defaultRoute.route("/stats").get(function(req,res){
    var clientId = req.query.clientId;
    var fyYear =2017;
    client.getClientStats(clientId,fyYear,req,res);
});


app.use("/default", defaultRoute);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(server_port,server_ip_address ,function () {
    console.log("listening at " + server_port);
});