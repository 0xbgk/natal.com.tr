var language = localStorage.getItem('language');
if(language === 'en')
{
    $("[data-localize]").localize("application", { language: "en" });    
}
else if(language === 'tr')
{
    $("[data-localize]").localize("application", { language: "tr" });   
}

const langENG = document.getElementById('langENG');
const langTR = document.getElementById('langTR');

langENG.addEventListener('click', (e) => {
    $("[data-localize]").localize("application", { language: "en" });

    localStorage.setItem('language', 'en');

    e.preventDefault();
})

langTR.addEventListener('click', (e) => {
    $("[data-localize]").localize("application", { language: "tr" });   
    localStorage.setItem('language', 'tr');

    e.preventDefault();

})