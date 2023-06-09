document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi un'azione al click del pulsante di invio del modulo di contatto
  var contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita il comportamento predefinito dell'invio del modulo

    // Ottieni i valori dei campi del modulo di contatto
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Esegui una validazione semplice dei campi
    if (name === "" || email === "" || message === "") {
      alert("Per favore, completa tutti i campi del modulo.");
      return;
    }

    // Simula l'invio del modulo (puoi implementare la logica del backend qui)
    setTimeout(function() {
      alert("Il modulo è stato inviato con successo! Grazie, " + name + ", per il tuo messaggio.");
      contactForm.reset(); // Resettare il modulo dopo l'invio
    }, 1000);
  });

  // Aggiorna il nome e l'occupazione nella sezione "Home" utilizzando il JavaScript
  var nameElement = document.getElementById("name");
  var occupationElement = document.getElementById("occupation");

  nameElement.textContent = "Nome Cognome";
  occupationElement.textContent = "Sviluppatore Web";
});
