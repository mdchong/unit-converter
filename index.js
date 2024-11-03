
// User gives input and clicks convert
// Output the converted using innerHTML

let inputEl = document.getElementById("input");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-id");

const length = 3.281; // m-f (*), f-m (/)
const volume = 3.785; // l-g (/), g-l (*)
const mass = 2.205; //kg-lb (*),  lb-kg (/)

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value;
    let meterToFeet = baseValue * length;
    let feetToMeter = baseValue / length;
    let litersToGallons = baseValue / volume;
    let gallonsToLiters = baseValue * volume;
    let kilosToPounds = baseValue * mass;
    let poundsToKilos = baseValue / mass;

    lengthEl.textContent = `${baseValue} meter = ${meterToFeet.toFixed(3)} feet |  ${baseValue} feet = ${feetToMeter.toFixed(3)} meter`;
    volumeEl.textContent = `${baseValue} liters = ${litersToGallons.toFixed(3)} gallons | ${baseValue} gallons = ${gallonsToLiters.toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilos = ${kilosToPounds.toFixed(3)} kilos | ${baseValue} pounds = ${poundsToKilos.toFixed(3)} kilos`
})