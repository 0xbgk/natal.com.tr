const langENG = document.getElementById('langENG');
const langTR = document.getElementById('langTR');

langENG.addEventListener('click', (e) => {
    $("[data-localize]").localize("application", { language: "en" });
    e.preventDefault();
})

langTR.addEventListener('click', (e) => {
    $("[data-localize]").localize("application", { language: "tr" });   
    e.preventDefault();

})