/*
    Chiedete all'utente un cognome e aggiungetelo alla lista, poi ordinate, utilizzate una funzionalità di js per l'ordinamento.
    Dopo aver ordinato, l'esercizio chiede l'indice del nuovo elemento inserito.
*/

var btn = document.getElementById('btn');

var cognomi = ["Rossi", "Gialli", "Bianchi", "Pellegrino", "Ferrari", "Greco", "Conti", "Rossetti", "Leone"];

btn.addEventListener("click", function() {

    var cognome = document.getElementById('cognome').value;

    cognomi.push(cognome);

    // Log pre ordinamento
    console.log("Pre ordinamento",cognomi);

    // Ordinamento
    do {
        var successo = true;
        for (var i = 0; i < cognomi.length - 1; i++) {
            if (cognomi[i].localeCompare(cognomi[i+1]) == 1) {
                var temp = cognomi[i];
                cognomi[i] = cognomi[i+1];
                cognomi[i+1] = temp;
                successo = false;
            }
        }
    } while (!successo);

    console.log("Lista ordinata:", cognomi);

    // Ricerca elemento inserito
    var i = 0;
    while (cognomi[i] != cognome) {
        i++;
    }

    // Stampo la posizione "umana" (contando da 1)
    console.log("Posizione cognome inserito dopo ordinamento:", ++i);
});
