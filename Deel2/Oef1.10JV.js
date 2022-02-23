let leeftijd = prompt("bent u ouder als 18");
let uitspraak;
uitspraak = (leeftijd == "ja") ? "gefeliciteerd u kunt naar het feest gaan" : "Helaas… Probeer de volgende editie maar opnieuw";
document.getElementById('alert').innerText = uitspraak;