
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
        return "Empty";
    } else if (isNaN(numInput)) {
        return "Not a number";
    } else if (isNaN(numInput) === false) {
        return "Is a number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) { 
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let list = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert ("All fields are required!");
    } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoMass) === "Not a number") {
        alert ("Please enter valid information!");
    } else {
        list.style.visibility = "visible"
        pilotStatus.innerHTML = `Pilot ${pilotName} is ready`
        copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready`}

    if (fuelLevel < 10000 && cargoMass > 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`
        cargoStatus.innerHTML = `Cargo mass too high for launch`
        launchStatus.innerHTML = `Shuttle not ready for launch`
        launchStatus.style.color = "#FF0000"
      } else if (fuelLevel >= 10000 && cargoMass > 10000) {
        fuelStatus.innerHTML = `Fuel level high enough for launch`
        cargoStatus.innerHTML = `Cargo mass too high for launch`
        launchStatus.innerHTML = `Shuttle not ready for launch`
        launchStatus.style.color = "#FF0000"

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
