const userNameEl = document.getElementById('user-name');
const userKmEl = document.getElementById('user-km');
const userAgeEl = document.getElementById('user-age');
const okBtnEl = document.querySelector("#form-section .btn-primary");
const abortBtnEl = document.querySelector("#form-section .btn-secondary");

let userName = userNameEl.value;
let userKm = userKmEl.value;
let userAge = userAgeEl.value;

const priceByKm = .21;

abortBtnEl.addEventListener("click", function() {
    userNameEl.value = "";
    userKmEl.value = "";
    userAgeEl.value = 0;
});

