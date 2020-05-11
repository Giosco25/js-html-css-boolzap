// Milestone 1
// Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e cliccando
// “invia” il testo viene aggiunto al thread sopra, come messaggio verde


// cliccare sull'icona con la "classe = vocal"
$('.vocal .fa-microphone').click(
    function(){
    invia_messaggio();
}
)

// Inviare il messaggio con "pulsante Invio" della tastiera
$('#fname-due').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
     invia_messaggio();
     }
});
function invia_messaggio(){
     // Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e cliccando
    var testo_utente = $('#fname-due').val();
    console.log(testo_utente);
    // cloniamo il div
    var new_message = $('.template .message-received').clone();
    new_message.text(testo_utente);
    // aggiungiamo alla pagina il nuovo messaggio
    $('.main-right').append(new_message);
}
