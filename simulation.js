"use strict";

class User {
    constructor(type, name, phoneNumber){
        this.type = type;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}

class Truck {
    constructor(loadCapacity, vehicleNumber) {
        this.source = [];
        this.destination = [];
        this.loadCapacity = loadCapacity;
        this.currentLoad = 0;
        this.vehicleNumber = vehicleNumber;
        this.location = null;
        this.owner = null;
        this.driver = null;
    }
    addOwner(owner){
        this.owner = owner;
    }
    addDriver(driver){
        this.driver = driver;
    }
    addSource(source){
        this.source.push(source);
    }
    addDestination(destination){
        this.destination.push(destination);
    }
    currentLocation(location){
        this.location = location
    }
    updateCurrentLoad(cload){
        this.currentLoad += cload;
    }
}

function getRandomInRange(coordinates) {
    var fixed = 6;
    var from = coordinates[0]
    var to = coordinates[1] 
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

var indiaLatitude = [8.04,37.06]
var indiaLongitude = [68.07,97.25]

console.log('randomLatitude:',getRandomInRange(indiaLatitude))
console.log('randomLongitude:',getRandomInRange(indiaLongitude))