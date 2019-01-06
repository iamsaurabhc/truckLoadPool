const ApiBuilder = require('claudia-api-builder'),
AWS = require('aws-sdk');
var api = new ApiBuilder(),
dynamoDb = new AWS.DynamoDB.DocumentClient();

api.post('/trucksMoving', function (request) { // SAVE your truck
    var params = {  
        TableName: 'trucksMoving',  
        Item: {
            movementId: request.body.movementId,
            truckSource: request.body.source, // truck starting point name
            truckDestination: request.body.destination, // truck ending point name
            truckTotalCapacity: request.body.totalCapaity, // truck total capacity
            truckLoadedCapacity: request.body.loaded // truck loaded capacity
        } 
    }
    return dynamoDb.put(params).promise(); // returns dynamo result 
}, { success: 201 }); // returns HTTP status 201 - Created if successful

api.get('/trucksMoving', function (request) { // GET all trucks
    return dynamoDb.scan({ TableName: 'trucksMoving' }).promise()
        .then(response => response.Items)
});

module.exports = api