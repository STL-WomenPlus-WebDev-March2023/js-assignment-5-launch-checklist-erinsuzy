// Write your helper functions here!
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
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let formSubmission = document.querySelector("form");
    formSubmission.addEventListener("submit", function (event) {
        const pilot = document.querySelector("input[name=pilotName");
        const copilot = document.querySelector("input[name=copilotName");
        const fuelLevel = document.querySelector("input[name=fuelLevel");
        const cargoLevel = document.querySelector("input[name=cargoMass");
  
});

    if (pilotNameInput.value === "" || copilotNameInput.value === "" || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
        alert("All fields are requred!");
        event.preventDefault();
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
