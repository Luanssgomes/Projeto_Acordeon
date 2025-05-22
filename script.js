let paragrafo_One = document.getElementById("paragrafo_one");
let paragrafo_two = document.getElementById("paragrafo_two");
let paragrafo_three = document.getElementById("paragrafo_three");

let seta_cinza1 = document.getElementById("seta_cinza1");
let seta_cinza2 = document.getElementById("seta_cinza2");
let seta_cinza3 = document.getElementById("seta_cinza3");

let seta_laranja1 = document.getElementById("seta_laranja1");
let seta_laranja2 = document.getElementById("seta_laranja2");
let seta_laranja3 = document.getElementById("seta_laranja3");

seta_cinza1.addEventListener("click", function () {
    paragrafo_One.classList.toggle("paragrafo-on");
    if (seta_cinza1.src.includes("seta_cinza.png")) {
        seta_cinza1.src = "img/seta_laranja.png";
    } else {
        seta_cinza1.src = "img/seta_cinza.png";
    }
});

seta_cinza2.addEventListener("click", function () {
    paragrafo_two.classList.toggle("paragrafo-on");
    if (seta_cinza2.src.includes("seta_cinza.png")) {
        seta_cinza2.src = "img/seta_laranja.png";
    } else {
        seta_cinza2.src = "img/seta_cinza.png";
    }
});

seta_cinza3.addEventListener("click", function () {
    paragrafo_three.classList.toggle("paragrafo-on");
    if (seta_cinza3.src.includes("seta_cinza.png")) {
        seta_cinza3.src = "img/seta_laranja.png";
    } else {
        seta_cinza3.src = "img/seta_cinza.png";
    }}
);