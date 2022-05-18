let numeroKmDaPercorrere = prompt("Quanti Km deve percorrere?");
let etaPasseggero = prompt("Quanti anni ha?");
const prezzoAlKm = (0.21);
// const calcoloPrezzoBiglietto =(numeroKmDaPercorrere * prezzoAlKm)
const calcoloPerMinorenni = (prezzoAlKm * numeroKmDaPercorrere / 100 * 20)
const calcoloPerOver65 = (prezzoAlKm * numeroKmDaPercorrere / 100 * 40)

const attention = ("<span>Attenzione! Il prezzo del biglietto non e stato calcolato correttamente, per favore inserire correttamente i dati</span>")


const prezzoBigliettoStandard = (numeroKmDaPercorrere * prezzoAlKm).toFixed(2)
const prezzoBigliettoMinori = ( prezzoBigliettoStandard - calcoloPerMinorenni).toFixed(2)
const prezzoBigliettoOver65 = ( prezzoBigliettoStandard - calcoloPerOver65).toFixed(2)




console.log(calcoloPerMinorenni , calcoloPerOver65, prezzoBigliettoStandard, prezzoBigliettoMinori, prezzoBigliettoOver65);

if ((isNaN(numeroKmDaPercorrere)) || (isNaN(etaPasseggero))){
    document.getElementById("biglietto").innerHTML = (attention)
    
}


if (etaPasseggero <= 17){
    document.getElementById("eta-pass").innerHTML = (`Eta Passeggero ${etaPasseggero} anni`);
    document.getElementById("km-percorrere").innerHTML = (`Km ${numeroKmDaPercorrere}`);
    document.getElementById("prezzo-finale").innerHTML = (prezzoBigliettoMinori + "€");
    console.log(prezzoBigliettoMinori)
}else if( etaPasseggero >= 65){
    document.getElementById("eta-pass").innerHTML = (`Eta Passeggero ${etaPasseggero} anni`);
    document.getElementById("km-percorrere").innerHTML = (`Km ${numeroKmDaPercorrere}`);
    document.getElementById("prezzo-finale").innerHTML = (prezzoBigliettoOver65 + "€");
    console.log(prezzoBigliettoOver65)
}
else if(etaPasseggero){
    document.getElementById("eta-pass").innerHTML = (`Eta Passeggero ${etaPasseggero} anni`);
    document.getElementById("km-percorrere").innerHTML = (`Km ${numeroKmDaPercorrere}`);
    document.getElementById("prezzo-finale").innerHTML = (prezzoBigliettoStandard + "€");
    console.log(prezzoBigliettoStandard)
}

