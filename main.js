// Milestone 1
// Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e cliccando
// “invia” il testo viene aggiunto al thread sopra, come messaggio verde


// cliccare sull'icona con la "classe = vocal"
$('.vocal .fa-microphone').click(
    function(){
     console.log('click');
    // Aggiungere un messaggio che l'utente scrive nell'imput "id = fname-due"
     var testo_utente = $('#fname-due').val();
     console.log(testo_utente);
    var new_message = $('.template .message-received').clone();
    new_message.text(testo_utente);
// il messaggio dovrebbe comparire sopra in verde
    $('.main-right').append(new_message);
}
)

//Inviare il messaggio con "pulsante Invio" della tastiera
function keyCode(event) {
    var x = event.keyCode;
  if (x == 13) {
    $('.vocal .fa-microphone').click();
  }
}
