const userNameEl = document.getElementById('user-name');
const nameTitleEl = document.querySelector('h6.my-name-title');
const userKmEl = document.getElementById('user-km');
const kmTitleEl = document.querySelector('h6.my-km-title');
const userAgeEl = document.getElementById('user-age');
const ageTitleEl = document.querySelector('h6.my-age-title');
const okBtnEl = document.querySelector("#form-section .btn-primary");
const abortBtnEl = document.querySelector("#form-section .btn-secondary");
const priceByKm = .21;

let userName;
let userKm;
let userAge;
let price;
let discount;
let finalPrice;


abortBtnEl.addEventListener("click", function() {
    userNameEl.value = "";
    userKmEl.value = "";
    userAgeEl.value = 0;
    nameTitleEl.innerHTML = "Inserisci il tuo Nome";
    nameTitleEl.classList.remove("text-danger");
    kmTitleEl.innerHTML = "Inserisci la tratta";
    kmTitleEl.classList.remove("text-danger");
    ageTitleEl.innerHTML = "Seleziona la tua età";
    ageTitleEl.classList.remove("text-danger");
});

okBtnEl.addEventListener("click", function() {
    if (userNameEl.value === ""){
        alert("Inserisci il tuo nome nell' apposita casella");
    } else if(!isNaN(userNameEl.value)){
        alert("Inserisci il tuo nome correttamente nell' apposita casella");
        nameTitleEl.innerHTML = "Il tuo nome non può contenere caratteri numerici";
        nameTitleEl.classList.remove("text-danger");
        nameTitleEl.classList.add("text-danger");
    } else if(userNameEl.value.length <= 5){
        alert("Inserisci il tuo nome correttamente nell' apposita casella");
        nameTitleEl.innerHTML = "Il tuo nome è troppo breve";
        nameTitleEl.classList.remove("text-danger");
        nameTitleEl.classList.add("text-danger");
    } else if(parseInt(userKmEl.value) === 0 || userKmEl.value === ""){
        alert("Inserisci i chilometri che devi percorrere");
    } else if(parseInt(userKmEl.value) < 0){
        alert("Inserisci correttamente i chilometri che devi percorrere");
        kmTitleEl.innerHTML = "Non si accettano valori negativi";
        kmTitleEl.classList.remove("text-danger");
        kmTitleEl.classList.add("text-danger");
    } 
});

