//uidannonce = $("#uidannonce").attr("data-uidannonce");
const ctx1 = document.getElementById("Chart-by-humain");
const ctx3 = document.getElementById("Chart-by-humain-2");
const nombre_homme = document.querySelector("#nombre_homme");
const nbrs_h = nombre_homme.getAttribute("data-target");
const nombre_femme = document.querySelector("#nombre_femme");
const nbrs_f = nombre_femme.getAttribute("data-target");
const Population_total_lushi_section_stats = document.querySelector(
  "#Population_total_lushi_section_stats"
);
const nbrs_Population = document.querySelector("#nbrs_Population");
const nbrs_migration = document.querySelector("#nbrs_migration");
const nbrs_education = document.querySelector("#nbrs_education");
const nbrs_civil = document.querySelector("#nbrs_education");
const etat_civil = document.querySelector("#nbrs_civil");
const nombres__agent__controlleur = document.querySelector(
  "#nombres__agent__controlleur"
);
const nombres__agent__total = document.querySelector("#nombres__agent__total");
const nombres__agent__rescenseur = document.querySelector(
  "#nombres__agent__rescenseur"
);
data_nbrs = [nbrs_h, nbrs_f];
var homme_data = {
  type: "pie",
  data: {
    labels: ["Homme", "Femme"],
    datasets: [
      {
        label: "Nombre des hommes  et des femmes",
        data: data_nbrs,
        borderWidth: 1,
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
};

var femme_data = {
  type: "bar",
  data: {
    labels: ["Homme", "Femme"],
    datasets: [
      {
        label: "Nombre des hommes  et des femmes",
        data: data_nbrs,
        borderWidth: 1,
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
};
var homme_chart = new Chart(ctx1, homme_data);

var femme_chart = new Chart(ctx3, femme_data);

// envoyer les formulaires

/*$(document).on('submit', '#agent_zone_type_form', function(e){
    e.preventDefault();
   
    // on recupere les donnes 
    var nom_complet = $('#nom_complet').val()
    var matricule = $('#matricule').val()
    var N_Telephone = $('#N_Telephone').val()
    uidannonce = $("#uidannonce").attr("data-uidannonce");
    idannonce = $("#idannonce").attr("data-idannonce");
    uid = $("#uid").attr("data-uid");

    // on test 
    
    $.ajax({
    type: 'POST',
    url: "{% url 'create_commentaire' %}",
    data: {
        nom_complet: nom_complet,
        matricule: matricule,
        
        
        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
    },
    success: function(data) {
        // ON AFFICHE LA BOITE DE DIALOGE MESSAGE 
        document.getElementById("modal-messsage-systeme").style.display = "block"
        document.getElementById("message_systeme").textContent = data
        setInterval(function(){
            document.getElementById("modal-messsage-systeme").style.display = "none"
        },5000);
        window.location.reload();
    },
    })
    document.getElementById("message_load_avis").textContent = "ENVOI TERMINE..."; 
    setInterval(function(){
        document.getElementById("message_load_avis").textContent = " "; 
        modalAvis.style.display = "none";
        get_commentaire()

    },5000)
    
});*/

// CLASS QUI REGROUPE FONCTIONNE AJAX ZONE
class class__ajax__zone {
  /*constructor(name, year) {
      this.name = name;
      this.year = year;
    }*/
  // recuoere le nombre des zones qu;on a deja cree
  ajax_get__nombres__zones() {
    //var catid;
    //id = $(this).attr("data-id");
    $.ajax({
      type: "GET",
      url: `/ajax/get__nombres__zones/`,
      success: function (response) {
        console.log("nombres__zones" + response.nombres__zones);
        var nombres__total__des__zones = document.getElementById(
          "nombres__total__des__zones"
        );
        //$('#btn-modal-follow-del').css("display","block");
        //$('#btn-modal-follow-add').css("display","none");
        nombres__total__des__zones.innerHTML = response.nombres__zones;
      },
    });
  }

  // pour recupere le nom de la zone lors de l'ouverture du modal pour cree la zone
  ajax_verifier__nom__zones() {
    //var catid;
    //id = $(this).attr("data-id");
    $.ajax({
      type: "GET",
      url: `/ajax/verifier__zones/`,
      success: function (response) {
        console.log("nom__de__la__zones" + response.nom__de__la__zones);
        var verifier__zones__modal = document.getElementById(
          "verifier__zones__modal"
        );
        //$('#btn-modal-follow-del').css("display","block");
        //$('#btn-modal-follow-add').css("display","none");
        verifier__zones__modal.innerHTML = response.nom__de__la__zones;
      },
    });
  }
  // recupere la liste de la zone lorsqu'on n'est sur la page zone.
  get__lists__of__zones() {
    $.ajax({
      type: "GET",
      url: `ajax/get__lists__of__zones/${visible}/`,
      success: function (response) {
        console.log(response);
        var data = response.listes__zones;
        setTimeout(() => {
          console.log(data);
          
          //const donnee = new Array(data);
          var lists__zones = document.getElementById("lists__zones");
          //lists__zones.innerHTML =""
          data.forEach((el) => {
            lists__zones.innerHTML += `
                        <tr class="tr2">
                              <td><strong>${el.id}</strong></td>
                              <td>${el.nom}</td>
                              <td>${el.agent_rescenseur_id}</td>     
                              <td>${el.agent_controleur_id}</td>
                              <td data-zone-id="${el.id}"><img src='{% static "svg/delete-filled-svgrepo-com.svg" %}' alt="" height="30" width="30"></td> 
                        </tr>  
                        `;
          });
        }, 1000);
        /*chargementBox.textContent = "";
            console.log(response.size);
            if (response.size === 0) {
              chargementBox.textContent = "Pas de commentaire";
            } else if (response.size <= visible) {
              loadBtn.classList.add("not-visible");
              chargementBox.textContent = "Il y a plus de commantaire...";
            }*/
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
}

// CLASS QUI REGROUPE FONCTIONNE AJAX HOME
class class__ajax__home {
  ajax_home_section() {
    //var catid;
    //id = $(this).attr("data-id");
    $.ajax({
      type: "GET",
      url: `/ajax/home_section/`,
      success: function (response) {
        console.log(
          "nombre_population_total" + response.nombre_population_total
        );
        //$('#btn-modal-follow-del').css("display","block");
        //$('#btn-modal-follow-add').css("display","none");

        nombre_population_total.setAttribute(
          "data-target",
          response.nombre_population_total
        );
        nombre_population_total.innerHTML = response.nombre_population_total;

        nombre_homme.setAttribute("data-target", response.nombre_homme);
        nombre_homme.innerHTML = response.nombre_homme;

        nombre_femme.setAttribute("data-target", response.nombre_femme);
        nombre_femme.innerHTML = response.nombre_femme;

        homme_chart.destroy();
        femme_chart.destroy();

        homme_data = {
          type: "pie",
          data: {
            labels: ["Homme", "Femme"],
            datasets: [
              {
                label: "Nombre des hommes  et des femmes",
                data: [response.nombre_homme, response.nombre_femme],
                borderWidth: 1,
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
        };
        femme_data = {
          type: "bar",
          data: {
            labels: ["Homme", "Femme"],
            datasets: [
              {
                label: "Nombre des hommes  et des femmes",
                data: [response.nombre_homme, response.nombre_femme],
                borderWidth: 1,
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
        };
        homme_chart = new Chart(ctx1, homme_data);
        femme_chart = new Chart(ctx3, femme_data);

        //document.getElementById("message_systeme").textContent = data
      },
    });
  }
// la fonction ajax qui actualise les statitiques de la partie statistique et poupulation '
  ajax_stats_home_section() {
    //var catid;
    //id = $(this).attr("data-id");
    $.ajax({
      type: "GET",
      url: `/ajax/stats_home_section/`,
      success: function (response) {
        console.log(
          "nombre_population_total" + response.nombre_population_total
        );
        //$('#btn-modal-follow-del').css("display","block");
        //$('#btn-modal-follow-add').css("display","none");

        Population_total_lushi_section_stats.innerHTML =
          response.nombre_population_total;
        nbrs_Population.innerHTML = response.nombre_population_total;
        nbrs_education.innerHTML = response.nbrs_education;
        nbrs_migration.innerHTML = response.nbrs_migration;
        etat_civil.innerHTML = response.etat_civil;

        //document.getElementById("message_systeme").textContent = data
      },
    });
  }

  ajax_agents_home_section(type) {
    //var catid;
    //id = $(this).attr("data-id");
    console.log(type);
    $.ajax({
      type: "GET",
      url: `/ajax/agent_home_section/`,
      success: function (response) {
        console.log("nombres__agent__total" + response.nombres__agent__total);
        //$('#btn-modal-follow-del').css("display","block");
        //$('#btn-modal-follow-add').css("display","none");
        nombres__agent__total.innerHTML = response.nombres__agent__total;
        nombres__agent__controlleur.innerHTML =
          response.nombres__agent__controlleur;
        nombres__agent__rescenseur.innerHTML =
          response.nombres__agent__rescenseur;
        //document.getElementById("message_systeme").textContent = data
        if ((type = "rescenseur")) {
          return response.nombres__agent__rescenseur;
        }
      },
    });
  }
}
// CLASS QUI REGROUPE FONCTIONNE AJAX AGENT
class class__ajax__agent {
  /*constructor(name, year) {
      this.name = name;
      this.year = year;
    }*/
  ajax_nombres_agent_section_element(type__agent) {
    //var catid;
    //id = $(this).attr("data-id");
    //var data__agent__type=  $("#modal-agent").attr("data-type-agent-click");
    console.log("DATA  ", type__agent);

    $.ajax({
      type: "GET",
      url: `ajax/get__nombres__agents__totals/${type__agent}/`,
      success: function (response) {
        document.getElementById("nbrs_agent").innerHTML =
          response.nombres__agents;

        //document.getElementById("message_systeme").textContent = data
        /* if(type="rescenseur"){
                        return response.nombres__agents
                    }*/
      },
    });
  }
//get__lists__of__zones__on__modal
  // reperation de la liste des agents 
  get__lists__of__agents(type__agent) {
    $.ajax({
      type: "GET",
      url: `ajax/get__lists__of__agents/${visible}/${type__agent}`,
      success: function (response) {
        console.log(response);
        var data = response.listes__agents;
        setTimeout(() => {
          console.log(data);
            var lists__agents
            var lists__agents__rescenseur = document.getElementById("lists__agents__rescenseur");
            var lists__agents__controleur = document.getElementById("lists__agents__controleur");
          //const donnee = new Array(data);
          if (type__agent == "Controleur"){
            
            lists__agents__controleur.style.display = "table"
            lists__agents__rescenseur.style.display = "none"
            //lists__agents__controleur.innerHTML =''
            data.forEach((el) => {
                lists__agents__controleur.innerHTML += `
                            <tr class="tr2">
                                  <td><strong>${el.code_agent}</strong></td>
                                  <td>${el.username}</td>
                                  <td>${el.Matricule}</td>     
                                  <td>${el.password}</td>
                                  <td>${el.password}</td>
                                  <td data-zone-id="${el.id}"><img src='{% static "svg/delete-filled-svgrepo-com.svg" %}' alt="" height="30" width="30"></td> 
                            </tr>  
                            `;
              });
          }else{
            
            lists__agents__controleur.style.display = "none"
            lists__agents__rescenseur.style.display = "table"
            //lists__agents__rescenseur.innerHTML =''
            data.forEach((el) => {
                lists__agents__rescenseur.innerHTML += `
                            <tr class="tr2">
                                  <td><strong>${el.code_agent}</strong></td>
                                  <td>${el.username}</td>
                                  <td>${el.Matricule}</td>     
                                  <td>${el.password}</td>
                                  <td>${el.password}</td>
                                  <td data-zone-id="${el.id}"><img src='{% static "svg/delete-filled-svgrepo-com.svg" %}' alt="" height="30" width="30"></td> 
                            </tr>  
                            `;
              });
          }
          
          
        }, 1000);
        /*chargementBox.textContent = "";
            console.log(response.size);
            if (response.size === 0) {
              chargementBox.textContent = "Pas de commentaire";
            } else if (response.size <= visible) {
              loadBtn.classList.add("not-visible");
              chargementBox.textContent = "Il y a plus de commantaire...";
            }*/
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

//get__lists__of__zones__on__modal
get__lists__of__zones__on__modal(type__agent) {
    $.ajax({
      type: "GET",
      url: `ajax/get__lists__of__zones__on__modals/${type__agent}/`,
      success: function (response) {
        console.log(response);
        var data = response.listes__zones;
        setTimeout(() => {
          console.log(data);
            
             var lists__agents = document.getElementById("list_zones_active");
          
          //const donnee = new Array(data);
          if (type__agent == "Controleur"){
            
          
            lists__agents.innerHTML =''
            data.forEach((el) => {
                lists__agents.innerHTML += `
                              <option value="${el.id}">${el.nom}</option> 
                            `;
              });
          }else{
            
            lists__agents.innerHTML =''
            data.forEach((el) => {
                lists__agents.innerHTML += `
                             <option value="${el.id}">${el.nom}</option>
                            `;
              });
          }
          
          
        }, 1000);
        /*chargementBox.textContent = "";
            console.log(response.size);
            if (response.size === 0) {
              chargementBox.textContent = "Pas de commentaire";
            } else if (response.size <= visible) {
              loadBtn.classList.add("not-visible");
              chargementBox.textContent = "Il y a plus de commantaire...";
            }*/
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
}

// appel a la fonction

const ajax__zone = new class__ajax__zone();
const ajax__home = new class__ajax__home();
const ajax__agent = new class__ajax__agent();
// set interval for all fonction
setInterval(() => {
  ajax__home.ajax_home_section();
  ajax__home.ajax_stats_home_section();
  ajax__home.ajax_agents_home_section();
  ajax__zone.ajax_get__nombres__zones();
  
 
}, 3000);
