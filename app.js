const express = require('express');
var bodyParser = require('body-parser');
var path    = require("path");
var apigClientFactory = require('aws-api-gateway-client').default;
const app = express()
const port = 3000
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var apigClient = apigClientFactory.newClient({
    invokeUrl:'https://1jsundfd1f.execute-api.us-east-2.amazonaws.com/latest',
    accessKey: '',
    secretKey: '',
    region: 'us-east-2'
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/intro.html'));
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname+'/public/intro.html'));
});

app.get('/searchTruck', function(req, res){
    res.sendFile(path.join(__dirname+'/public/searchTruck.html'))
});

app.post('/searchTruck', function(req, res){
    
});

app.get('/addTruck', function(req, res){
    res.sendFile(path.join(__dirname+'/public/addTruck.html'))
});

app.post('/addTruck', function(req, res){
    var uniqid = require('uniqid');
    var body = req.body
    body['movementId'] = uniqid()
    console.log(body);

    var params = {
    // This is where any modeled request parameters should be added.
    // The key is the parameter name, as it is defined in the API in API Gateway.
        //param0: '',
        //param1: ''
    };

    var additionalParams = {
        // If there are any unmodeled query parameters or headers that must be
        // sent with the request, add them here.
        headers: {
            'Content-Type': 'application/json',
            //param1: ''
        },
        queryParams: {
            //param0: '',
            //param1: ''
        }
    };

    apigClient.invokeApi(params,'/trucksMoving','POST', additionalParams, body)
        .then(function(result){
            console.log('success!!')
        }).catch( function(result){
            console.error('error!',result)
        });
    res.send({ status: 'SUCCESS' });
});

app.post('/', function(req, res){
    console.log(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
