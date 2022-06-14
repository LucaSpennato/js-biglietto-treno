// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
//  secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// definiamo il prezzo per km
const pricePerKm = 0.21;

// chiediamo i km
let kmChoose = parseInt( prompt ('Quanti km dovrai viaggiare?') );
console.log (kmChoose);

// calcolo del prezzo per km
let paymentPerKm = pricePerKm * kmChoose;
console.log (paymentPerKm + ' euros' ) ;

// chiediamo l'età
let userAge = parseInt ( prompt ('Inserisci la tua età') );

let minorSale = parseInt ('20%');
let elderSale = parseInt ('40%');

if (userAge < 18) {
   let saledMinorTicket = ( ( paymentPerKm * minorSale )  / 100);
    console.log ('You\'ll pay: ' + saledMinorTicket + ' euros' );

} else if (userAge >= 65){
    let saledElderPrice = ( ( paymentPerKm * elderSale ) / 100);
    console.log ('You\'ll pay: ' + saledElderPrice + ' euros' );

} else{
    console.log ('You\'ll pay: ' + paymentPerKm  + ' euros');
}
