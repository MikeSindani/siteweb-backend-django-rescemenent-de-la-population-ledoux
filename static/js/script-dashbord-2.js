const counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
        counter.innerText = '0'
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target')
            const c = +counter.innerText
            const increment = target / 1000
            if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 1)
        } else {
        counter.innerText = target
        }
        }
        updateCounter()
})

// Obtenir le bouton qui ouvre la fenêtre modale
var btn_modal_zone = document.getElementById("btn_modal_zone");

// Obtenir la fenêtre modale
var modal_zone = document.getElementById("modal-zone");

// Obtenir l'élément <span> qui ferme la fenêtre modale
var span_close_zone = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton, ouvrir la fenêtre modale 
btn_modal_zone.onclick = function() {
 modal_zone.style.display = "block";
}
// Lorsque l'utilisateur clique sur <span> (x), fermer la fenêtre modale
span_close_zone.onclick = function() {
    modal_zone.style.display = "none";
   }
   
   // Lorsque l'utilisateur clique n'importe où en dehors de la fenêtre modale, fermer celle-ci
   window.onclick = function(event) {
    if (event.target == modal_zone) {
      modal_zone.style.display = "none";
    }
}

// Obtenir le bouton qui ouvre la fenêtre modale
var btn_modal_agent = document.getElementById("btn_modal_agent");

// Obtenir la fenêtre modale
var modal_agent = document.getElementById("modal-agent");

// Obtenir l'élément <span> qui ferme la fenêtre modale
var span_close_agent = document.getElementsByClassName("close-agent")[0];

// Lorsque l'utilisateur clique sur le bouton, ouvrir la fenêtre modale 
btn_modal_agent.onclick = function() {
 modal_agent.style.display = "block";
}
// Lorsque l'utilisateur clique sur <span> (x), fermer la fenêtre modale
span_close_agent.onclick = function() {
    modal_agent.style.display = "none";
   }
   
   // Lorsque l'utilisateur clique n'importe où en dehors de la fenêtre modale, fermer celle-ci
   window.onclick = function(event) {
    if (event.target == modal_agent) {
      modal_agent.style.display = "none";
    }
}