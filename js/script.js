// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
// Iniziate stampando il countdown nella console e dopo stampatelo in pagina.

// Creo una variabile per i secondi del countdown (sono stati inseriti 11 sec per visualizzare concretamente i 10 secondi all' avvio della pagina)
let seconds = 11;
// Cerco l'elemento ad HTML
let newYear = document.getElementById("new-year");
// log alla console
console.log(newYear);
// messaggio al termine del countdown
let newYearMsg = "Buon anno!"


// Creo il clock invertito che esegue la funzione ad intervalli di 1 sec
const clock = setInterval(function () {
    // Se i secondi sono minori o uguali allora
    if (seconds <= 11) {
        //decrementa il valore dei secondi 
        seconds--;
    }
    // Log alla console
    console.log(seconds);
    // inseriamo il valore anche in pagina
    document.getElementById("second").innerText = seconds;

    // Se il clock raggiunge i 0 secondi
    if (seconds <= 0) {
        // log alla console
        console.log(newYearMsg);
        // aggiungi il messeggio all'elemento HTML
        newYear.append(newYearMsg)
        // Richiamo la funzione per il suono
        play()
    }
}, 1000);

// Creo la funzione di timeout che passati i secondi impostati (11 sec), ferma il countdown
setTimeout(function () {
    clearInterval(clock)
}, 11000);
