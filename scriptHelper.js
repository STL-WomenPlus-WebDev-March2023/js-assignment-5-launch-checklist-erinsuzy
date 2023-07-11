
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
    <img src="${imageUrl}">
    `;
   
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

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert ("All fields are required!");
    } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
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
     } else if (fuelLevel < 10000 && cargoMass > 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`
        cargoStatus.innerHTML = `Cargo mass too high for launch`
        launchStatus.innerHTML = `Shuttle not ready for launch`
        launchStatus.style.color = "#FF0000"
     } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`
        cargoStatus.innerHTML = `Cargo mass low enough for launch`
        launchStatus.innerHTML = `Shuttle is ready for launch`
        launchStatus.style.color = "#00FF00"
     }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let PlanetX = Math.floor(Math.random)*(planets.length) 
    return planets[PlanetX];
}


const _addDestinationInfo = addDestinationInfo;
export { _addDestinationInfo as addDestinationInfo };
const _validateInput = validateInput;
export { _validateInput as validateInput };
const _formSubmission = formSubmission;
export { _formSubmission as formSubmission };
const _pickPlanet = pickPlanet;
export { _pickPlanet as pickPlanet };
const _myFetch = myFetch;
export { _myFetch as myFetch };
