"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
  $("#name").value = "";
  $("#email").value = "";
  $("#password").value = "";
  $("#confirm_password").value = "";
  $("#date_of_birth").value = "";
};

const onSubmit = (evt) => {
  resetErrors();

  //TODO:: Use this boolean to keep track of any errors because you need to prevent the settings from updating if even one field is wrong
  let formErrors = false;

  //TODO:: Make sure name fields are not empty
  let name = $("#name").value;
  if (name === "") {
    $("#error_name").textContent = "Name is required";
    formErrors = true;
  }

  //TODO:: Validate email with the Regular Expression
  let email = $("#email").value;
  if (!emailRegEx.test(email)) {
    $("#error_email").textContent = "Email is not valid";
    formErrors = true;
  }

  //TODO:: Validate password with the Regular Expression
  let password = $("#password").value;
  if (!passwordRegEx.test(password)) {
    $("#error_password").textContent = "Password is not valid";
    formErrors = true;
  }

  //TODO:: Validate passwords to be matching
  let confirmPassword = $("#confirm_password").value;
  if (password !== confirmPassword) {
    $("#error_confirm_password").textContent = "Passwords do not match";
    formErrors = true;
  }

  //TODO:: Make sure date of birth is in the past.
  let dateOfBirth = $("#date_of_birth").value;
  let dateOfBirthDate = new Date(dateOfBirth);
  let today = new Date();
  if (dateOfBirthDate > today) {
    $("#error_date_of_birth").textContent = "Date of birth must be in the past";
    formErrors = true;
  }

  //TODO:: check you formErrors boolean and update the fields if still false
  if (!formErrors) {
    $("#setting_name").textContent = name;
    $("#setting_email").textContent = email;
    $("#setting_date_of_birth").textContent = dateOfBirth;
  }

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});