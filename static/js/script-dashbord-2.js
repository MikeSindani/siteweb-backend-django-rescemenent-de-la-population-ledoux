/*
  const counters = document.querySelectorAll('.counter')
    counters.forEach(counter => {
      counter.innerText = '100'
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 1000
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`
          setTimeout(updateCounter, 1)
        } else {
          counter.innerText = target
        }
      }
      
   
    });
*/



// overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// Obtenir le bouton qui ouvre la fenêtre modale
var btn_modal_zone = document.getElementById("btn_modal_zone");

// Obtenir la fenêtre modale
var modal_zone = document.getElementById("modal-zone");

// Obtenir l'élément <span> qui ferme la fenêtre modale
var span_close_zone = document.getElementsByClassName("close")[0];

btn_modal_zone.onclick = function () {
  on(); // overlay om
  setTimeout(() => {
    ajax__zone.ajax_verifier__nom__zones();
    // overlay off
    modal_zone.style.display = "block";
    off();
  }, 3000);
};
// Lorsque l'utilisateur clique sur <span> (x), fermer la fenêtre modale
span_close_zone.onclick = function () {
  modal_zone.style.display = "none";
};

// Lorsque l'utilisateur clique n'importe où en dehors de la fenêtre modale, fermer celle-ci
window.onclick = function (event) {
  if (event.target == modal_zone) {
    modal_zone.style.display = "none";
  }
};

// Obtenir le bouton qui ouvre la fenêtre modale
var btn_modal_agent = document.getElementById("btn_modal_agent");

// Obtenir la fenêtre modale
var modal_agent = document.getElementById("modal-agent");

// Obtenir l'élément <span> qui ferme la fenêtre modale
var span_close_agent = document.getElementsByClassName("close-agent")[0];

// bouton  pour fermer le modal
var btn__fermer__modal__agent = document.getElementById(
  "btn__fermer__modal__agent"
);
// bouton pour ouvrir un nouvelle utilisateur
var btn__nouvelle__agent__modal__agent = document.getElementById(
  "btn__nouvelle__agent__modal__agent"
);
// Lorsque l'utilisateur clique sur le bouton, ouvrir la fenêtre modale
btn_modal_agent.onclick = function () {
 
  var data_modal_agent = document.getElementById("modal-agent");
    var attrib = data_modal_agent.getAttribute("data-type-agent-click");
    ajax__zone.get__lists__of__zones__on__modal(attrib);
  modal_agent.style.display = "block";
};
// Lorsque l'utilisateur clique sur <span> (x), fermer la fenêtre modale
span_close_agent.onclick = function () {
  document.getElementById("nom_complet").value = "";
  document.getElementById("matricule").value = "";
  document.getElementById("N_Telephone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("part__modal__1").style.display = "block";
  document.getElementById("part__modal__2").style.display = "none";
  modal_agent.style.display = "none";
};

btn__fermer__modal__agent.onclick = function () {
  document.getElementById("nom_complet").value = "";
  document.getElementById("matricule").value = "";
  document.getElementById("N_Telephone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("part__modal__1").style.display = "block";
  document.getElementById("part__modal__2").style.display = "none";
  modal_agent.style.display = "none";
};
btn__nouvelle__agent__modal__agent.onclick = function () {
  document.getElementById("nom_complet").value = "";
  document.getElementById("matricule").value = "";
  document.getElementById("N_Telephone").value = "";
  document.getElementById("email").value = "";
  ajax__zone.get__lists__of__zones__on__modal();
  document.getElementById("part__modal__1").style.display = "block";
  document.getElementById("part__modal__2").style.display = "none";

};

// Lorsque l'utilisateur clique n'importe où en dehors de la fenêtre modale, fermer celle-ci
window.onclick = function (event) {
  if (event.target == modal_agent) {
    document.getElementById("nom_complet").value = "";
    document.getElementById("matricule").value = "";
    document.getElementById("N_Telephone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("part__modal__1").style.display = "block";
    document.getElementById("part__modal__2").style.display = "none";
    modal_agent.style.display = "none";
    modal_agent.style.display = "none";
  }
};

const myCar = new Car("Ford", 2014);
console.log(myCar.age(2020));
