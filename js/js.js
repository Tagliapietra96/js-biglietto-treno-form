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
let discount = 0;
let finalPrice;


abortBtnEl.addEventListener("click", function() {
    userNameEl.value = "";
    userKmEl.value = "";
    userAgeEl.value = 0;
    nameTitleEl.innerHTML = "Inserisci il tuo Nome";
    nameTitleEl.classList.remove("text-danger");
    kmTitleEl.innerHTML = "Inserisci la tratta";
    kmTitleEl.classList.remove("text-danger");
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
    } else if(parseInt(userAgeEl.value) === 0){
        alert("Seleziona una fascia d' età");
    } else{
        nameTitleEl.innerHTML = "Inserisci il tuo Nome";
        nameTitleEl.classList.remove("text-danger");
        kmTitleEl.innerHTML = "Inserisci la tratta";
        kmTitleEl.classList.remove("text-danger");

        userName = userNameEl.value;
        userKm = parseInt(userKmEl.value);
        userAge = parseInt(userAgeEl.value);
        price = userKm * priceByKm;

        if (userAge === 1){
            discount = price * .2;
        } else if(userAge === 3){
            discount = price * .4;
        }

        finalPrice = (Math.round((price - discount) * 100) / 100).toFixed(2);
        console.log(userName);
        console.log(userKm);
        console.log(userAge);
        console.log(price);
        console.log(discount);
        console.log(finalPrice);
    }
});

