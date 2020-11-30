// Milestone 1
// Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e cliccando
// “invia” il testo viene aggiunto al thread sopra, come messaggio verde


// cliccare sull'icona con la "classe = vocal"
$('.right-footer-icon .fa-microphone').click(
    function(){
    invia_messaggio();

}
);

// Inviare il messaggio con "pulsante Invio" della tastiera
$('#new-message-inputs').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
     invia_messaggio();
     }
});
function invia_messaggio(){
     // Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e cliccando
    var testo_utente = $('#new-message-inputs').val();
    console.log(testo_utente);
    // cloniamo il div
    // var new_message = $('.template .message-received').clone();
    // new_message.find('.received').text(testo_utente);
    var new_message = $('#message-template').html();
    // preparo la funzione da utilizzare per utilizzare il template
    var template_function = Handlebars.compile(new_message);
    var messaggio = {
        'div': 'message-received',
        'paragrafo' : 'received',
        'testo' : testo_utente
    };

    var html_message = template_function(messaggio);

    // aggiungiamo alla pagina il nuovo messaggio
    $('.right-messages.active').append(html_message);
    $('#new-message-inputs').val('');
    var secondi = 1000;
    setTimeout(function() {
        invio_risposta();
        console.log(secondi);
    }, secondi);


}
$('#new-message-inputs').focus(function(){
   // tolgo la classe "fa-microphone" dall'icona di destra // aggiungo le classi "fa-paper-plane"
    $('.right-footer-icon i').removeClass('fa-microphone').addClass('fa-paper-plane');

}
);

$('#new-message-inputs').blur(function(){
// aggiungo la classe "fa-paper-plane" dall'icona di destra // aggiungo la classe "fa-microphone"
 $('.right-footer-icon i').removeClass('fa-paper-plane').addClass('fa-microphone');
}
);

// Milestone 2
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.

function invio_risposta(){
    // var risposta = $('.template .message-sent').clone().addClass('sent-due');
    // risposta.find('.sent').text('ok');
    // var risposta = $('.template .message-sent').clone();
    // risposta.text('ok').fadeIn(1000);
   // console.log(risposta);
    // $('.main-right.active').append(risposta);
    var new_message = $('#message-template').html();
    // preparo la funzione da utilizzare per utilizzare il template
    var template_function = Handlebars.compile(new_message);
    var messaggio = {
        'div': 'message-sent-due',
        'paragrafo' : 'sent',
        'testo' : 'ok'
    }
    var html_message = template_function(messaggio);

    // aggiungiamo alla pagina il nuovo messaggio
    $('.right-messages.active').append(html_message);

};

// MILESTONE 2
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)

// $('.search i').click(
$('#contacts-filter').keyup(
    function(){
    console.log('click');
    // sto recuperando il nome che l'utente ha cercato
    var nome_cercato = $('#contacts-filter').val().trim().toLowerCase();
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
    $('.contact').removeClass('active-contact');
    // aggiungo la classe active al contatto su cui ho cliccato
    $(this).addClass('active-contact');
    // recupero il nome del contatto su cui ho cliccato
    var nome_contatto = $(this).find('.contact-name').text();
    console.log(nome_contatto);
    // inserisco il nome del contatto nella parte di intestazione di destra
    $('#header-right-contact-name').text(nome_contatto);
    // recupero il percorso del file dell'immagine del contatto su cui ho cliccato
    var recupero_img = $(this).find('.contact-logo img').attr('src');
    console.log(recupero_img);
    // imposto il percorso del file dell'immagine nella parte di intestazione di destra
    $('.header-right-logo img').attr('src', recupero_img);

    $('.right-messages.active').removeClass('active');
    $('.right-messages').eq(indice_contatto).addClass('active');    
});
