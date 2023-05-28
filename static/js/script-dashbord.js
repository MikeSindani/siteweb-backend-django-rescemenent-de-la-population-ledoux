// var  for set interval
const time_set_interval = 500;

// for ajax  numbers

var visible = 3;

// load screen

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
/* ce code est pour le temps de slash sreen  */

setTimeout(() => {
  document.getElementById("slash-screen").style.display = "none";
}, time_set_interval);

/* ####################################################################*/
/* debut de side bar menu hamberger */

const hamburger = document.querySelector(".hamburger");
const siderbar = document.querySelector(".sidebar");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  siderbar.classList.toggle("close-sidebar-mobi");
  main.classList.toggle("close-main-mobi");
  siderbar.classList.toggle("close-sidebar");
  main.classList.toggle("close-main");
  hamburger.classList.toggle("is-active");
});
/*! code pour change le menu hamberger selon les tailles d'ecrans */
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    hamburger.classList.remove("is-active");
  } else {
    hamburger.classList.add("is-active");
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

/*! code pour gerer les submenu du sidebar */
/* BOUTON */
const btn_home = document.querySelector("#btn_home");
const sub_btn_stats = document.querySelector(".sub-btn-1");
const subMenuStats = document.querySelector(".sub-menu-1");
const sub_btn_agent = document.querySelector(".sub-btn-2");
const subMenuAgent = document.querySelector(".sub-menu-2");
const dropdown = document.querySelector(".dropdown");
//var btn_stats_population = document.querySelector("#btn_stats_population")
//var btn_stats_population_2 = document.querySelector("#btn_stats_population_2")
const btn_Suivi_de_Rescensement = document.querySelector(
  "#btn_Suivi_de_Rescensement"
);
const btn_Suivi_de_fiche = document.querySelector("#btn_Suivi_de_fiche");
const btn_gestion_agent = document.querySelector("#btn_gestion_agent");
const btn_gestion_zone = document.querySelector("#btn_gestion_zone");

/* SECTION */
const section_home = document.querySelector("#section_home");
const section_stats = document.querySelector("#section_stats");
const section_stats_element = document.querySelector("#section_stats_element");
const section_Suivi_de_Rescensement = document.querySelector(
  "#section_Suivi_de_Rescensement"
);
const section_Suivi_de_fiche = document.querySelector(
  "#section_Suivi_de_fiche"
);
const section_gestion_agent = document.querySelector("#section_agent");
const section_gestion_agent_element = document.querySelector(
  "#section_gestion_agent_element"
);
const section_gestion_zone = document.querySelector("#section_gestion_zone");

// FONCTION SECTION
function function_section(
  v_home,
  v_stats,
  v_ele_stats,
  v_suivi_r,
  v_suivi_f,
  v_gestion_agent,
  v_gestion_agent_ele,
  v_gestion_zone
) {
  section_home.style.display = v_home;
  section_stats.style.display = v_stats;
  section_stats_element.style.display = v_ele_stats;
  section_Suivi_de_Rescensement.style.display = v_suivi_r;
  section_Suivi_de_fiche.style.display = v_suivi_f;
  section_gestion_agent.style.display = v_gestion_agent;
  section_gestion_agent_element.style.display = v_gestion_agent_ele;
  section_gestion_zone.style.display = v_gestion_zone;
}

function function_sub_menu(sub_menu_stats, sub_menu_agent) {
  if (sub_menu_stats == true) {
    subMenuStats.classList.toggle("sub-menu-1");
    dropdown.classList.toggle("rotate");
  } else {
    subMenuStats.classList.add("sub-menu-1");
    dropdown.classList.add("rotate");
  }
  if (sub_menu_agent == true) {
    subMenuAgent.classList.toggle("sub-menu-2");
    dropdown.classList.toggle("rotate");
  } else {
    subMenuAgent.classList.add("sub-menu-2");
    dropdown.classList.add("rotate");
  }
}
function function_btn_section(
  v_btn_home,
  v_btn_sub_stats,
  v_btn_suivi_r,
  v_btn_suivi_f,
  v_btn_agent,
  v_btn_gestion_agent_ele,
  v_btn_gestion_zone
) {
  if (v_btn_home == true) {
    btn_home.classList.add("bg-primary-color");
  } else {
    btn_home.classList.remove("bg-primary-color");
  }
  if (v_btn_sub_stats == true) {
    sub_btn_stats.classList.add("bg-primary-color");
  } else {
    sub_btn_stats.classList.remove("bg-primary-color");
  }
  if (v_btn_suivi_r == true) {
    btn_Suivi_de_Rescensement.classList.add("bg-primary-color");
  } else {
    btn_Suivi_de_Rescensement.classList.remove("bg-primary-color");
  }
  if (v_btn_suivi_f == true) {
    btn_Suivi_de_fiche.classList.add("bg-primary-color");
  } else {
    btn_Suivi_de_fiche.classList.remove("bg-primary-color");
  }

  if (v_btn_agent == true || v_btn_gestion_agent_ele == true) {
    sub_btn_agent.classList.add("bg-primary-color");
  } else {
    sub_btn_agent.classList.remove("bg-primary-color");
  }

  if (v_btn_gestion_zone == true) {
    btn_gestion_zone.classList.add("bg-primary-color");
  } else {
    btn_gestion_zone.classList.remove("bg-primary-color");
  }
}

/* CODE BTN ET SECTION */
/* DEBUT BOUTON HOME */
btn_home.addEventListener("click", () => {
  on(); // overlay on
  setTimeout(() => {
    // SECTION THIS
    function_section(
      "grid",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none"
    );
    function_sub_menu(false, false);
    // BOUTO  AUTRE
    function_btn_section(true, false, false, false, false, false, false);
    off(); // overlay off
  }, time_set_interval);
});
/* FIN BOUTON HOME */
/* DEBUT BOUTON SUB MENU STATISTIQUE */
sub_btn_stats.addEventListener("click", () => {
  on();
  setTimeout(() => {
    // * BOTTON THIS

    function_sub_menu(true, false);
    // BOTTON AUTRE
    function_btn_section(false, true, false, false, false, false, false);

    // SECTION AUTRE
    function_section(
      "none",
      "grid",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none"
    );

    off();
  }, time_set_interval);
});

/* FIN BOUTON SUB MENU STATISTIQUE */
/*  DEBUT BOUTON SUB MENU AGENT */
sub_btn_agent.addEventListener("click", () => {
  function_section(
    "none",
    "none",
    "none",
    "none",
    "block",
    "none",
    "none",
    "none"
  );
  function_sub_menu(false, true);
  // BOTTON AUTRE
  function_btn_section(false, false, false, false, true, false, false);
});
/* FIN BOUTON SUB MENU AGENT */
/* DEBUT BOUTON  STATISTIQUE POPULATION  */

function function_chart_stats_element(data1) {
  const ctx4 = document.querySelector("#Chart-by-stat");
  new Chart(ctx4, {
    type: "pie",
    data: {
      labels: ["Homme", "Femme"],
      datasets: [
        {
          data: data1, // [120000, 190000],
          backgroundColor: ["#3098FF", "#F8DB34"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// BTN POUPULATION  STATS
function function_btn_stats_population() {
  // BOTTON AUTRE
  function_btn_section(false, true, false, false, false);
  // SECTION THIS
  function_section(
    "none",
    "none",
    "flex",
    "none",
    "none",
    "none",
    "none",
    "none"
  );

  section_stats.style.gap = "3px";
  document.querySelector(".stats-box-1").style.padding = "0";

  //* SECTION THIS
  //section_stats_element.style.display="flex"
}
/*function btn_change_style(element){
  
  if (element == 'Population'){
    
  }
      
}*/

// btn population
function btn_stats_element(element) {
  //.style.fontWeight="normal"
  $("." + element).css("font-weight", "bold");
  $("." + element).css("font-size", "16px");
  //this.style.fontSize="inherit"
  /*
  var resetCanvas = function(){
    
    canvas = document.querySelector('#results-graph');
    ctx = canvas.getContext('2d');
    ctx.canvas.width = $('#graph').width(); // resize to parent width
    ctx.canvas.height = $('#graph').height(); // resize to parent height
    var x = canvas.width/2;
    var y = canvas.height/2;
    ctx.font = '10pt Verdana';
    ctx.textAlign = 'center';
    ctx.fillText('This text is centered on the canvas', x, y);
  };*/

  $("#Chart-by-stat").remove(); // this is my <canvas> element
  $("#graph-container").append('<canvas id="Chart-by-stat"></canvas>');

  on();
  setTimeout(() => {
    function_btn_stats_population();
    function_chart_stats_element([120000, 180000]);
    off();
  }, time_set_interval);
}

/* FIN BOUTON STATISTIQUE POPULATION  */
/* DEBUT BOUTON SUIVI RESCENCEMENT  */
btn_Suivi_de_Rescensement.addEventListener("click", () => {
  on(); // overlay om
  setTimeout(() => {
    // * SECTION THIS
    function_section(
      "none",
      "none",
      "none",
      "block",
      "none",
      "none",
      "none",
      "none"
    );
    function_sub_menu(false, false);
    // BOTTON AUTRE
    function_btn_section(false, false, true, false, false, false, false);

    off(); // overlay off
  }, time_set_interval);
});
/* FIN BOUTON SUIVI RESCENCEMENT */
/* DEBUT BOUTON SUIVI FICHE  */
btn_Suivi_de_fiche.addEventListener("click", () => {
  on(); // overlay om
  setTimeout(() => {
    // * SECTION THIS
    function_section(
      "none",
      "none",
      "none",
      "none",
      "block",
      "none",
      "none",
      "none"
    );
    function_sub_menu(false, false);
    // BOTTON AUTRE
    function_btn_section(false, false, false, true, false, false, false);

    function_sub_menu(false, false);
    off(); // overlay off
  }, time_set_interval);
});
/* FIN BOUTON SUIVI FICHE */
/* DEBUT BOUTON GESTION AGENT  */
btn_gestion_agent.addEventListener("click", () => {
  on(); // overlay om
  setTimeout(() => {
    // * SECTION THIS
    function_section(
      "none",
      "none",
      "none",
      "none",
      "none",
      "block",
      "none",
      "none"
    );
    // BOTTON AUTRE
    function_btn_section(false, false, false, false, true, false, false);

    off(); // overlay off
  }, time_set_interval);
});
/* FIN BOUTON GESTION AGENT */
/* DEBUT BOUTON GESTION AGENT ELEMENT */

function btn_gestion_agent_element(element) {
  on(); // overlay om
  console.log(element);
  setTimeout(() => {
    // * SECTION THIS
    function_section(
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "block",
      "none"
    );
    // BOTTON AUTRE
    function_btn_section(false, false, false, false, false, true, false);

    document.querySelector("#agent-type").innerHTML = element + " :";
    // get and set data to the html element

    var data_modal_agent = document.getElementById("modal-agent");
    data_modal_agent.setAttribute("data-type-agent-click", element);
    $("#modal-agent").attr("data-type-agent-click", element);
    console.log(element);
    /*var nombres__agent__element = document.querySelector("#nbrs_agent");
    nombres__agent__element = ajax_agents_home_section(element);
    //requette ajax */
    ajax__agent.ajax_nombres_agent_section_element(element);
    ajax__agent.get__lists__of__agents(element)

    off(); // overlay off
  }, time_set_interval);
}

/* DEBUT BOUTON GESTION zONE  */
// bouton de chargement de la liste de la zone
const btn__load__section__zones = document.querySelector(
  "#btn__load__section__zones"
);
btn__load__section__zones.addEventListener("click", () => {
  //spinnerBox.classList.remove('not-visible')
  //chargementBox.textContent="CHARGEMENT DES COMMENTAIRES EN COURS ... "
  visible += 1;
  ajax__zone.get__lists__of__zones();
});

// bouton pour passe a la zone
btn_gestion_zone.addEventListener("click", () => {
  on(); // overlay om
  setTimeout(() => {
    // * SECTION THIS
    function_section(
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "block"
    );
    // BOTTON AUTRE
    function_btn_section(false, false, false, false, false, false, true);
    function_sub_menu(false, false);
    visible = 3;
    ajax__zone.get__lists__of__zones();

    off(); // overlay off
  }, time_set_interval);
});
/* fin de side bar menu hamberger */
/* ####################################################################*/
/* debut du code pour le message */
const close_msg = document.querySelector(".close-msg");
const msg = document.querySelector(".message");
const header = document.querySelector("header");
close_msg.addEventListener("click", () => {
  msg.style.display = "none";
  header.classList.toggle("close-msg-header");
});
/* fin  du code pour le message */
/* CODE DE CHART */
const ctx = document.getElementById("Chart-by-Commune");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Katuba", "Lubumbashi", "Kambeba", "Annexe", "Rwashi", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ["#3098FF"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// AJAX POUR CREE UNE ZONE
$(document).on("submit", "#zone__submit__from", function (e) {
  e.preventDefault();

  // on recupere les donnes
  console.log("zone");
  var nom_de_zone = $("#verifier__zones__modal").val();

  // on test
  $.ajax({
    type: "POST",
    url: "ajax/creations__zones/",
    data: {
      nom_de_zone: nom_de_zone,
      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
    },
    success: function (data) {
      // ON AFFICHE LA BOITE DE DIALOGE MESSAGE
      document.getElementById("popup-message_systeme").style.backgroundColor =
          "var(--bleu)";
      document.getElementById("popup-message_systeme").style.display = "flex";
      document.getElementById("message_systeme").textContent =
        data.message_systeme;
      ajax__zone.ajax_verifier__nom__zones();
      setInterval(function () {
        document.getElementById("popup-message_systeme").style.display = "none";
      }, 5000);
      //window.location.reload();
    },
  });
});

$(document).on("submit", "#agent_zone_type_form", function (e) {
  e.preventDefault();

  // on recupere les donnes
  console.log("AGENT");

  var data__agent__type = $("#modal-agent").attr("data-type-agent-click");
  console.log("DATA  ", data__agent__type);

  // ON ENVOI  LA VALEUR PAR AJAX
  $.ajax({
    type: "POST",
    url: `ajax/creations__agents/${data__agent__type}/`,
    data: {
      Matricule: $("#matricule").val(),
      phone_no: $("#N_Telephone").val(),
      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
      nom_complet: $("#nom_complet").val(),
      email: $("#email").val(),
    },
    success: function (data) {
      if (data.etat == "sucessed") {
        document.getElementById("part__modal__1").style.display = "none";
        document.getElementById("part__modal__2").style.display = "block";
        document.getElementById("message__creation__agent").textContent =
          data.message_systeme;
        document.getElementById("agent__user").textContent = data.agent__user;
        document.getElementById("agent__password").textContent =
          data.agent__password;
        document.getElementById("agent__zone").textContent = data.agent__zone;

        // ON AFFICHE LA BOITE DE DIALOGE MESSAGE
        document.getElementById("popup-message_systeme").style.display = "flex";
        document.getElementById("message_systeme").textContent =
          data.message_systeme;

          ajax__agent.ajax_nombres_agent_section_element();

      } else {
        // ON AFFICHE LA BOITE DE DIALOGE MESSAGE
        document.getElementById("popup-message_systeme").style.backgroundColor =
          "var(--jaune)";
        document.getElementById("message_systeme").textContent =
          data.message_systeme;
        document.getElementById("popup-message_systeme").style.display = "flex";
      }
      setInterval(function () {
        document.getElementById("popup-message_systeme").style.display = "none";
      }, 10000);
      //window.location.reload();
    },
  });

});
