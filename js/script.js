// definiamo il prezzo per km
const pricePerKm = 0.21;

// chiediamo i km
let kmChoose = parseInt( prompt ('Quanti km dovrai viaggiare?') );
console.log (kmChoose);

// calcolo del prezzo per km
let ticketPrice = pricePerKm * kmChoose;

// chiediamo l'età
let userAge = parseInt ( prompt ('Inserisci la tua età') );

// definiamo gli sconti 
let minorSale = 20;
let elderSale = 40;


if (userAge < 18) {
    // se minori
   let saledMinorTicket = ticketPrice - ( ( ticketPrice * minorSale )  / 100);
    // tofixed per i numeri decimali     
    saledMinorTicket = saledMinorTicket.toFixed(2);
    console.log ('Con lo sconto ragazzi paghi: ' + saledMinorTicket + ' euro' );

} else if (userAge >= 65){
    // se anziani
    let saledElderPrice = ticketPrice - ( ( ticketPrice * elderSale ) / 100);
    saledElderPrice = saledElderPrice.toFixed(2);
    console.log ('Con lo sconto anziani paghi: ' + saledElderPrice + ' euro' );

} else{
    // tutti gli altri poracci che pagano a prezzo pieno
    paymentPerKm = paymentPerKm.toFixed(2);
    console.log ('A prezzo pieno, poraccio, paghi: ' + ticketPrice  + ' euro');
}



