"use strict";

const $ = (selector) => document.querySelector(selector);

const division = () => {
  let division1 = $("#division_1").value;
  let division2 = $("#division_2").value;
  let result = division1 / division2;

  console.log(division2);
  console.log(division1);

  $("#division_result").value = result;
  $("#int_division_result").value = parseInt(result);
  $("#floor_division_result").value = Math.floor(result);
  $("#ceiling_division_result").value = Math.ceil(result);
  $("#rounded_division_result").value = Math.round(result);
};

const modulo = () => {
  let mod1 = $("#modulo_1").value;
  let mod2 = $("#modulo_2").value;
  let modresult = mod1 % mod2;

  $("#modulo_result").value = modresult;
};

const forLoopIteration = () => {
  let limit = $("#for_limit").value;
  let increments = parseFloat($("#for_increment").value);
  let direction = $("#for_increment_direction").value;
  let counter = parseFloat($("#for_counter").value);

  if (direction === "negative") {
    increments = increments * -1;
  }

  for (let iterator = 0; iterator < limit; iterator++) {
    counter = counter + increments;
  }
  $("#for_result").value = counter;
};

//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {
  $("#division_btn").addEventListener("click", division);
});

document.addEventListener("DOMContentLoaded", () => {
  $("#modulo_btn").addEventListener("click", modulo);
  $("#for_loop_btn").addEventListener("click", forLoopIteration);
});
