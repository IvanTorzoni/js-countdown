

/**
 * Descrizione : funzione per la gestione dei fuochi d'artificio alla fine del countdown
 * @returns {any}
 */

function play() {
    // Creo una variabile e associo il file mp3
    let audio = new Audio('audio/NewYear.mp3');
    // Faccio partire il suono
    audio.play();
  }