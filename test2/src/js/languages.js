var language = localStorage.getItem('language');
var flagImg = document.getElementById('flag-img');

if(language === 'en')
{
    $("[data-localize]").localize("application", { language: "en" });    
    flagImg.classList.add('flag-gb');
    flagImg.classList.remove('flag-tr');
    flagImg.classList.remove('flag-de');
}
else if(language === 'tr')
{
    $("[data-localize]").localize("application", { language: "tr" });  
    flagImg.classList.add('flag-tr');
    flagImg.classList.remove('flag-gb');
    flagImg.classList.remove('flag-de');
}
else if(language === 'de')
{
    $("[data-localize]").localize("application", { language: "de" });  
    flagImg.classList.add('flag-de');
    flagImg.classList.remove('flag-gb');
    flagImg.classList.remove('flag-tr');
}

const langENG = document.getElementById('langENG');
const langTR = document.getElementById('langTR');
const langDE = document.getElementById('langDE');

langENG.addEventListener('click', (e) => {
    $("[data-localize]").localize("application", { language: "en" });
    localStorage.setItem('language', 'en');
    location.reload();
})

langTR.addEventListener('click', (e) => {
    $("[data-localize]").localize("application", { language: "tr" });   
    localStorage.setItem('language', 'tr');
    location.reload();
})

langDE.addEventListener('click', (e) => {
    $("[data-localize]").localize("application", { language: "de" });   
    localStorage.setItem('language', 'de');
    location.reload();
})