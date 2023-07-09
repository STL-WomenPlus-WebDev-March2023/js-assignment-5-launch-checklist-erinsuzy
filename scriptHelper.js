
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    let numInput = Number(testInput);
    if (testInput === "") {
        return "Add a number";
    } else if (isNaN(numInput)) {
        return "Not a number";
    } else if (isNaN(numInput) === false) {
        return "Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) { 
    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    if (validateInput(pilot) === "" || validateInput(copilot) === "" || validateInput(fuelLevel) === "Add a number" || validateInput(cargoMass) === "Add a number") {
        alert ("All fields are required!");
    } else if (validateInput(pilot) === "Number" || validateInput(copilot) === "Number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoMass) === "Not a number") {
        alert ("Please enter valid information!");
    } 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
