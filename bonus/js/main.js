/* 

- Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

- Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)

- va applicato uno sconto del 20% per i minorenni

- va applicato uno sconto del 40% per gli over 65.

- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
  per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

- BONUS: introduzione della parte grafica con CSS 

*/

var km = parseInt(prompt("inserisci i kilometri che vuoi percorrere"));
console.log(km);

var eta = parseInt(prompt("inserisci la tua età"));
console.log(eta);

var Euro_km = 0.21;

var costo_biglietto_standard = (km * Euro_km).toFixed(2);
console.log(costo_biglietto_standard);

if (eta < 18) {
    var costo_biglietto_under_18 = (costo_biglietto_standard * 0.8).toFixed(2);
    console.log(costo_biglietto_under_18);
}

if (eta >= 65) {
    var costo_biglietto_over_65 = (costo_biglietto_standard * 0.6).toFixed(2);
    console.log(costo_biglietto_over_65);
}

var costo_biglietto = costo_biglietto_under_18 || costo_biglietto_over_65 || costo_biglietto_standard;
console.log(costo_biglietto);

document.getElementById("costo_biglietto").innerHTML = costo_biglietto + " €";


