
require('isomorphic-fetch');
    let formSubmission = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName");
    let copilot = document.querySelector("input[name=copilotName");
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let cargoMass = document.querySelector("input[name=cargoMass");
    

    function testInput() {
    if (pilot.value === "" || copilot.value === "" || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
        alert("All fields are requred!");
    }
    return 
}


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
    
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
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
