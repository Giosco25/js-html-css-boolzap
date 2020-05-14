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
$('#write-text-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
     invia_messaggio();
     }
});
function invia_messaggio(){
     // Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e cliccando
    var testo_utente = $('#write-text-input').val();
    console.log(testo_utente);
    // cloniamo il div
    var new_message = $('.template .message-received').clone();
    new_message.find('.received').text(testo_utente);
    // aggiungiamo alla pagina il nuovo messaggio
    $('.main-right').append(new_message);
    $('#write-text-input').val('');
    var secondi = 1000;
    setTimeout(function() {
        invio_risposta();
        console.log(secondi);
    }, secondi);


}
$('#write-text-input').focus(function(){
   // tolgo la classe "fa-microphone" dall'icona di destra // aggiungo le classi "fa-paper-plane"
      $('.vocal i').removeClass('fa-microphone').addClass('fa-paper-plane');

}
);

$('#write-text-input').blur(function(){
// aggiungo la classe "fa-paper-plane" dall'icona di destra // aggiungo la classe "fa-microphone"
 $('.vocal i').removeClass('fa-paper-plane').addClass('fa-microphone');
}
);

// Milestone 2
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.

function invio_risposta(){
    var risposta = $('.template .message-sent').clone().addClass('sent-due');
    risposta.find('.sent').text('ok');
    // var risposta = $('.template .message-sent').clone();
    // risposta.text('ok').fadeIn(1000);
   console.log(risposta);
    $('.main-right').append(risposta);
};

// MILESTONE 2
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)

// $('.search i').click(
$('#new-chat-input').keyup(
    function(){
    console.log('click');
    // sto recuperando il nome che l'utente ha cercato
    var nome_cercato = $('#new-chat-input').val().trim().toLowerCase();
    console.log('nome_cercato');
    // controllo se l'utente digita qualcosa
    if (nome_cercato != '') {
        $('.contact').each(function(){
            var recupero_nome = $(this).find('h3').text().trim().toLowerCase();
            console.log(recupero_nome);
            if (recupero_nome.includes(nome_cercato) ) {
                $(this).show();
                console.log('giusto');

            }else{
                console.log('sbagliato');
                $(this).hide();
            }

        })
    } else {
        $('.contact').show();
    }
});


// Milestone 3
// ● Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire
// nuovi messaggi per ogni conversazione
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato

// Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire
// nuovi messaggi per ogni conversazione

// click sul primo contatto con classe visible
$('.contact').click(function(){
    console.log('click');
    var indice_contatto = $(this).index();
    console.log(indice_contatto);
    $('.main-right.active').removeClass('active')
    $('.main-right').eq(indice_contatto).addClass('active');
    var recupero_img = $(this).find('img').attr('src');
    console.log(recupero_img);
    $('.top-right img').attr('src', recupero_img);
});
