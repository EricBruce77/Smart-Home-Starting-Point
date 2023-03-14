"use strict";

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
  $("#setting_notifications").textContent = "Off";
  $("#setting_lighting_mode").textContent = "Off";

  $("#notifications").checked = true;

  $("#eco").checked = true;
  $("#temperature").value = 21;
  $("#location").value = "L7W 4T8";

  evt.preventDefault();
};

const onSubmit = (evt) => {
  //TODO::Reset any errors before submitting
  $("#error_temperature").textContent = "";
  $("#error_location").textContent = "";


  //TODO:: Set notifications since it doesn't need to be validated
  let notifications = $("#notifications").checked;
  if (notifications) {
    $("#setting_notifications").textContent = "On";
  } else {
    $("#setting_notifications").textContent = "Off";
  }
  
  
  //make a foor loop for the lighting with no validation
  //querySelectorAll returns an array of everything that matches the argument
  let lighting = document.querySelectorAll('input[name="lighting"]:checked');
  let lightingMode = "";
  for (let i = 0; i < lighting.length; i++) {
    lightingMode += lighting[i].value + " ";
  }
  $("#setting_lighting_mode").textContent = lightingMode;


  //TODO:: Validate the postal code with the Regular Expression, Display an error if not valid


  let location = $("#location").value;

  if (postalRegEx.test(location)){
    //if the postal code is valid this code will run
  }else{
    //Add your logic here if the postal code is not valid
    $("#error_location").textContent = "Location is not valid";
    //TODO:: Validate the temperature by checking the range and if it's a number
  }
    //TODO:: Display an error if not valid
  let temperature = $("#temperature").value;
  if (temperature < 15 || temperature > 30 || isNaN(temperature)) {
    $("#error_temperature").textContent = "Temperature is not valid";
  } else {
    $("#setting_temperature").textContent = temperature;
  }
    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date
  $("#date_display").textContent = new Date().toDateString();
  //TODO:: Add Reset Form listener
  $("#reset_form").addEventListener("reset", onReset);
  //TODO:: Add Submit Form listener
  $("#update_settings").addEventListener("click", onSubmit);
});