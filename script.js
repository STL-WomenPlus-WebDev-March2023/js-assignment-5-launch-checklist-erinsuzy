// Write your JavaScript code here!

import { myFetch, pickPlanet, addDestinationInfo } from "./scriptHelper.js";

window.addEventListener("load", function() {

    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
        //Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   let planetSelect = pickPlanet(listedPlanets);
   addDestinationInfo(document, planetSelect.name, planetSelect.diameter, planetSelect.star, planetSelect.distance, planetSelect.moons, planetSelect.image);
    })
   
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;

    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelInput.value);

    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoInput.value);

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
});

    list.style.visibility = "hidden";
    let form = document.querySelector("form");
