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
var visible = 3;
/*
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
*/
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
function is__null__and__undefine(valeur){
  if(valeur == null)
   return "Pas d'agent"
  else 
  return valeur

 }
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
              lists__zones.innerHTML =""
              lists__zones.innerHTML =`
              <tr class="tr1">
              <th>Nom de la Zone</th>
              <th>Agent Rescenseur</th>
              <th>Agent Controlleur</th>  
                        
            </tr>`
              //lists__zones.innerHTML =""
              data.forEach((el) => {
                lists__zones.innerHTML += `
                            <tr class="tr2">
                                  <td>${el.nom}</td>
                                  <td>${is__null__and__undefine(el.agent_rescenseur__username)}</td>     
                                  <td>${is__null__and__undefine(el.agent_controleur__username)}</td>
                                  
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

                  <td data-zone-id="${el.id}"><img src='{% static "svg/delete-filled-svgrepo-com.svg" %}' alt="" height="30" width="30"></td> 
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

          document.getElementById("nombre_homme_home_section").innerHTML=""
          document.getElementById("nombre_homme_home_section").innerHTML=`
          
          <div class="M sexe">Homme</div>
                <div class="stat-numbers" >
                    <span >
                        <h3 id="nombre_homme" class="counter" data-target="{{nbrs_m}}">
                            ${response.nombre_homme}
                          </h3>
                          <sup>(${(response.nombre_homme/response.nombre_population_total)*100} %)</sup>
                    </span>
                  
                </div>
          
          `
          document.getElementById("nombre_femme_home_section").innerHTML=""
          document.getElementById("nombre_femme_home_section").innerHTML=`
          
          <div class="F sexe">Femme</div>
          <div class="stat-numbers">
            <h3 id="nombre_femme" class="counter" data-target="{{nbrs_f}}">
            ${response.nombre_femme}
            </h3>
            <sup>( ${(response.nombre_femme/response.nombre_population_total)*100} %)</sup>
          </div>
          
          `

          //homme_chart.destroy();
          //femme_chart.destroy();

        /* homme_data = {
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
          femme_chart = new Chart(ctx3, femme_data);*/

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

          document.getElementById("Alphabetisation_home_section").innerHTML=""
          document.getElementById("Alphabetisation_home_section").innerHTML=`
          <div><strong>Alphabetisation</strong>  </div>
          <div><h3>${response.lire_et_comprendre}</h3></div>
          `
          
         
          document.getElementById("Analphabetisation_home_section").innerHTML=""
          document.getElementById("Analphabetisation_home_section").innerHTML=`
          <div><strong>Analphabetisation</strong>  </div>
          <div><h3>${response.lire_et_comprendre__non}</h3></div>
          `
          document.getElementById("homme_alpha_home_section").innerHTML=""
          document.getElementById("homme_alpha_home_section").innerHTML=`
          <div class="M sexe">Homme</div>
                <div class="stat-numbers">
                      <span>
                      <h3 id="nombre_homme" class="counter" data-target="{{nbrs_m}}">
                      ${response.lire_et_comprendre_homme_oui}
                      </h3>
                      <sup>(${response.lire_et_comprendre_homme_oui_pourcentage}%)</sup>
              </span>
          </div>
          `
          document.getElementById("homme_analpha_home_section").innerHTML=""
          document.getElementById("homme_analpha_home_section").innerHTML=`
          <div class="M sexe">Homme</div>
                <div class="stat-numbers">
                      <span>
                      <h3 id="nombre_homme" class="counter" data-target="{{nbrs_m}}">
                      ${response.lire_et_comprendre_homme_non}
                      </h3>
                      <sup>( ${(response.lire_et_comprendre_homme_non/response.nombre_population_total)*100} %)</sup>
              </span>
          </div>
          `

          document.getElementById("femme_alpha_home_section").innerHTML=""
          document.getElementById("femme_alpha_home_section").innerHTML=`
          <div class="F sexe">Femme</div>
                  <div class="stat-numbers">
                    <h3 id="nombre_femme" class="counter" data-target="{{nbrs_f}}">
                    ${response.lire_et_comprendre_femme_oui}
                    </h3>
                    <sup>( ${(response.lire_et_comprendre_femme_oui/response.nombre_population_total)*100} %)</sup>
                  </div>
          `
          document.getElementById("femme_analpha_home_section").innerHTML=""
          document.getElementById("femme_analpha_home_section").innerHTML=`
          <div class="F sexe">Femme</div>
                  <div class="stat-numbers">
                    <h3 id="nombre_femme" class="counter" data-target="{{nbrs_f}}">
                    ${response.lire_et_comprendre_femme_non}
                    </h3>
                    <sup>( ${(response.lire_et_comprendre_femme_non/response.nombre_population_total)*100} %)</sup>
                  </div>
          `
          document.getElementById("etat_civil_home_section").innerHTML=""
          document.getElementById("etat_civil_home_section").innerHTML=`
              <div>
              <div  style="color: gray">Celibataire</div>
              <div>
              <h3>${response.nombre_etat_civil_celibataire}</h3>
              <sup>( ${(response.nombre_etat_civil_celibataire/response.nombre_population_total)*100} %)</sup>
              </div>     
            </div>
            <div>
              <div style="color: gray">Marié(e)</div>
              <div><h3>${response.nombre_etat_civil_marie}</h3></div> 
              <sup>( ${(response.nombre_etat_civil_marie/response.nombre_population_total)*100} %)</sup>    
            </div>
            <div>
              <div style="color: gray">Union Libre</div>
              <div><h3>${response.nombre_etat_civil_Union_Libre}</h3></div>  
              <span>( ${(response.nombre_etat_civil_Union_Libre/response.nombre_population_total)*100} %)</span>   
            </div>
            <div>
              <div style="color: gray">Veuf</div>
              <div><h3>${response.nombre_etat_civil_veuve}</h3></div>  
              <span>( ${(response.nombre_etat_civil_veuve/response.nombre_population_total)*100} %)</span>      
            </div>
            <div>
              <div style="color: gray">Divorcé</div>
              <div><h3>${response.nombre_etat_civil_divorce}</h3></div>
              <span>( ${(response.nombre_etat_civil_divorce/response.nombre_population_total)*100} %)</span>      
            </div>
            <div>
              <div style="color: gray">Separé</div>
              <div><h3>${response.nombre_etat_civil_separe}</h3></div>
              <span>( ${(response.nombre_etat_civil_separe/response.nombre_population_total)*100} %)</span>      
            </div>
          `
          document.getElementById("Repartition_congolaise_non_home_section").innerHTML=""
          document.getElementById("Repartition_congolaise_non_home_section").innerHTML=`
          <div>
            <div  style="color: gray">Population Congolaise</div>
            <div>
            <h3>${response.Statistique__nationaux}</h3>
            <span>( ${(response.Statistique__nationaux/response.nombre_population_total)*100} %)</span>
            </div>     
          </div>
          <div>
            <div style="color: gray">Population Etrangere</div>
            <div>
              <h3>${response.Statistique__etrangere}</h3>
              <span>( ${(response.Statistique__etrangere/response.nombre_population_total)*100} %)</span>
            </div>     
          </div>
          `
          
          document.getElementById("effective_des_menages").innerHTML=""
          document.getElementById("effective_des_menages").innerHTML=`
            <span><span>Effective des menages admins:</span>${response.Effective__des__menages__admins}<span></span></span>
            <span><span>Taille moyens des menages:</span>${response.Taille__moyens__des__menages}<span></span></span>
          `

          

          document.getElementById("Activite_home_section").innerHTML=""
          document.getElementById("Activite_home_section").innerHTML=`
          <div>
          <div  style="color: gray">Travailleur Salarie</div>
          <div><h3>${(response.Statistique__by__aera__travail__oui/response.nombre_population_total)*100}%</h3></div>     
        </div>
        <div>
          <div style="color: gray">Travailleur Non Salarie</div>
          <div><h3>${(response.Statistique__by__aera__travail__non/response.nombre_population_total)*100} %</h3></div>     
        </div>
        <div>
          <div style="color: gray">Taux de chomage</div>
          <div><h3>${(response.Statistique__by__aera__chomeur/response.nombre_population_total)*100}%</h3></div>      
        </div>
        <div>
          <div style="color: gray">Retraite</div>
          <div><h3>${(response.Statistique__by__aera__Retraite/response.nombre_population_total)*100}%</h3></div>     
        </div>
          `
          //document.getElementById("message_systeme").textContent = data
          var data = response.list__result;
          var listes__of__communes__population = document.getElementById("listes__of__communes__population_home_section");
            console.log(data);

              listes__of__communes__population.style.display ="table"
              listes__of__communes__population.innerHTML =""
              listes__of__communes__population.innerHTML =`
                                        <tr class="tr" >
                                            <th colspan="4" >
                                            <h4  style="color:gray;border-bottom: 1px solid gray;" >
                                            Repartition Par commune
                                            </h4>
                                            </th>
                                        </tr>
                                        <tr class="tr1" width: 100%;">
                                          <th>Nom de commune</th>
                                          <th>Homme</th>
                                          <th>Femme</th>
                                          <th>Totals Populations</th>
                                        </tr>`
                
                data.forEach((el) => {
                  listes__of__communes__population.innerHTML += `
                              <tr class="tr2">
                                  <td><h5><strong>${el.name__aera}</strong></h5></td>
                                  <td><h4>${el.Statistique__by__aera__homme}</h4><span>( ${(el.Statistique__by__aera__homme/el.Statistique__by__aera)*100} %)</span></td>
                                  <td><h4>${el.Statistique__by__aera__femme}</h4><span>( ${(el.Statistique__by__aera__femme/el.Statistique__by__aera)*100} %)</span></td>
                                  <td><h4>${ el.Statistique__by__aera}</h4><span>( 100 %)</span></td>
                              </tr> 
                              `;
                });
        
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
        //console.log(response);
        var data = response.listes__agents;
        setTimeout(() => {
          //console.log(data);
            var lists__agents
            var lists__agents__rescenseur = document.getElementById("lists__agents__rescenseur");
            var lists__agents__controleur = document.getElementById("lists__agents__controleur");
          //const donnee = new Array(data);
          if (type__agent == "Controleur"){
            
            lists__agents__controleur.style.display = "table"
            lists__agents__rescenseur.style.display = "none"
            lists__agents__controleur.innerHTML =''
            lists__agents__controleur.innerHTML =`
            <tr class="tr1">
            <th>N Agents</th>
            <th>Nom Complet</th>
            <th>Matricule</th>
            <th>Mot de passe</th>
            <th>Zone</th>
            <th>Options</th>                           
          </tr>`
            data.forEach((el) => {
                lists__agents__controleur.innerHTML += `
                            <tr class="tr2">
                                  <td><strong>${el.agent_controleur__code_agent}</strong></td>
                                  <td>${el.agent_controleur__username}</td>
                                  <td>${el.agent_controleur__Matricule}</td>     
                                  <td>${el.agent_controleur__password}</td>
                                  <td>${el.nom}</td>
                                  <td onclick="funct__delete__agent('${el.agent_controleur__username}','${type__agent}')" style="cursor:pointeur;"><i class="fa-solid fa-trash"></i></td> 
                            </tr>  
                            `;
              });
          }else{
            
            lists__agents__controleur.style.display = "none"
            lists__agents__rescenseur.style.display = "table"
            lists__agents__rescenseur.innerHTML =''
            lists__agents__rescenseur.innerHTML =`
            <tr class="tr1">
            <th>N Agents</th>
            <th>Nom Complet</th>
            <th>Matricule</th>
            <th>Mot de passe</th>
            <th>Zone</th>
            <th>Options</th>                           
          </tr>`
            data.forEach((el) => {
                lists__agents__rescenseur.innerHTML += `
                            <tr class="tr2">
                                  <td><strong>${el.agent_rescenseur__code_agent}</strong></td>
                                  <td>${el.agent_rescenseur__username}</td>
                                  <td>${el.agent_rescenseur__Matricule}</td>     
                                  <td>${el.agent_rescenseur__password}</td>
                                  <td>${el.nom}</td>
                                  <td onclick="funct__delete__agent('${el.agent_rescenseur__username}','${type__agent}')" style="cursor:pointeur;"><i class="fa-solid fa-trash"></i></td>
                            </tr>  
                            `;
                            //<td data-zone-id="${el.id}"><img src='{% static "svg/delete-filled-svgrepo-com.svg" %}' alt="" height="30" width="30"></td> 
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
        //console.log(response);
        var data = response.listes__zones;
        setTimeout(() => {
          //console.log(data);
            
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

class class__ajax__suivi__de__resecensement{
  get__nombres__zones() {
    //var catid;
    //id = $(this).attr("data-id");
    $.ajax({
      type: "GET",
      url: `/ajax/get__nombres__zones_suivi/`,
      success: function (response) {
        console.log("nombres__zones" + response.nombres__totals__des__zones);
        var nombres__total__des__zones__suivi__1 = document.getElementById(
          "nombres__total__des__zones__suivi__1"
        );
        var nombres__total__des__zones__suivi__2 = document.getElementById(
          "nombres__total__des__zones__suivi__2"
        );
        var nombres__total__des__zones__valide = document.getElementById(
          "nombres__total__des__zones__valide"
        );
        var nombres__total__des__zones__non__valide = document.getElementById(
          "nombres__total__des__zones__non__valide"
        );
        //$('#btn-modal-follow-del').css("display","block");
        //$('#btn-modal-follow-add').css("display","none");
        nombres__total__des__zones__suivi__1.innerHTML = response.nombres__totals__des__zones;
        nombres__total__des__zones__suivi__2.innerHTML = response.nombres__totals__des__zones;
        nombres__total__des__zones__valide.innerHTML = response.nombres__totals__des__zones__valide
        nombres__total__des__zones__non__valide.innerHTML = response.nombres__totals__des__zones - response.nombres__totals__des__zones__valide 
      },
    })
  }
    get__lists__of__zones(visible) {
      $.ajax({
        type: "GET",
        url: `ajax/get__lists__of__zones_suivi/${visible}/`,
        success: function (response) {
          //console.log(response);
          var data = response.listes__zones;
          setTimeout(() => {
            //console.log(data);
            
            //const donnee = new Array(data);
            var lists__zones = document.getElementById("listes_of_suivi_by__zone");
            lists__zones.innerHTML =""
            lists__zones.innerHTML =`
            <tr class="tr">
            <th colspan="6" ><h2>Par Zones</h2></th>
              </tr>
              <tr class="tr1">
                <th>Nom de Zones</th>
                <th>Agent Resenceur</th>
                <th>Agent Controleur</th>
                <th>Status</th>
                <th>Progression</th>
                <th>Etat</th>                           
              </tr>`
            
            var etat__termine ='Termine' ;
            var etat__en__cour = 'en cours'


            data.forEach((el) => {
              lists__zones.innerHTML += `'
                              <tr class="tr2">
                              <td> <strong>${el.nom}</strong></td>
                              <td>${is__null__and__undefine(el.agent_rescenseur__username)}</td>
                              <td>${is__null__and__undefine(el.agent_controleur__username)}</td>
                              <td>${ el.etat==200?etat__termine : etat__en__cour}</td>
                              <td><progress id="file" value="${el.etat}" max="${ response.nombres__totals__par__zones}"></progress></td>
                              <td>${el.etat}/${ response.nombres__totals__par__zones}(${(el.etat*response.nombres__totals__par__zones)/100}%)</td>
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
  
                <td data-zone-id="${el.id}"><img src='{% static "svg/delete-filled-svgrepo-com.svg" %}' alt="" height="30" width="30"></td> 
              }*/
        },
        error: function (error) {
          console.log(error);
        },
      })
    }
  
}
class class__ajax__statistique {
      get__stats__of__commune__population(commune) {
        //var catid;
        //id = 
        var categorie = $("#section_stats_element").attr("data-categorie");
        console.log("cat",categorie)
        var commune = document.querySelector("#listes__of__communes").value
        $.ajax({
          type: "GET",
          url: `/ajax/get__stats__of__commune/${commune}/${categorie}/`,
          success: function (response) {
            //console.log("nombres__zones" + response.nombres__totals__des__zones);
            var element_stats = document.getElementById("element_stats")
            var categorie__name = document.getElementById("categorie__name");
            
            if (categorie == "Population"){
              categorie__name.innerHTML = categorie
              element_stats.innerHTML=""
              element_stats.innerHTML = ` 
              <div class="element-stats-box-2-part-1">
              <div class="total">
                  <div><img src="{% static 'img/person-team-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></div>
                  <div>
                      <div class="Ttl">Population total</div>
                      <div class="stat-numbers" ><h3 id="stat__population__totals">${response.stat__population__total}</h3></div>
                  </div>
                  
              </div>
            </div>
            <div id="graph-container" class="element-stats-box-2-part-2" style="height: 150px;display: none;">
              
            </div>
            <div class="element-stats-box-2-part-3">
              <div class="homme"> 
                  <span><img src="{% static 'img/man-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="M sexe">Homme</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__homme">${response.stat__population__total__homme}</h3></div>
                  </span>
                  
              </div>
              <div class="femme"> 
                  <span><img src="{% static 'img/woman-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="F sexe">Femme</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__femme">${response.stat__population__total__femme}</h3></div>
                  </span>   
              </div>
          </div>`
              
             
            }
            if (categorie == "Education"){
              categorie__name.innerHTML = categorie
              element_stats.innerHTML=""
              element_stats.innerHTML = ` 
              <div class="element-stats-box-2-part-1">
              <div class="total">
                  <div><img src="{% static 'img/person-team-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></div>
                  <div>
                      <div class="Ttl">Population total de la ${commune}</div>
                      <div class="stat-numbers" ><h3 id="stat__population__totals">${response.stat__population__total}</h3></div>
                  </div>  
              </div>
            </div>
            <div id="graph-container" class="element-stats-box-2-part-2" style="height: 150px;display: none;">
              <canvas id="Chart-by-stat"></canvas>
            </div>
            <div class="element-stats-box-2-part-3">
              <div class="homme"> 
                  <span style="display:none" ><img src="{% static 'img/man-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="M sexe">Alphabetisation</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__homme">${response.Statistique__by__aera__Alphabetisation}</h3></div>
                  </span>
                  
              </div>
              <div class="femme"> 
                  <span style="display:none"><img src="{% static 'img/woman-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="F sexe">Analphabetisation</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__femme">${response.Statistique__by__aera__Analphabetisation}</h3></div>
                  </span>   
              </div>
          </div>`
            
              
            }
            if (categorie == "Migration"){
              categorie__name.innerHTML =categorie
              element_stats.innerHTML=""
              element_stats.innerHTML = ` 
              <div class="element-stats-box-2-part-1">
              <div class="total">
                  <div><img src="{% static 'img/person-team-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></div>
                  <div>
                      <div class="Ttl">Population total</div>
                      <div class="stat-numbers" ><h3 id="stat__population__totals">${response.stat__population__total}</h3></div>
                  </div>
                  
              </div>
            </div>
            <div id="graph-container" class="element-stats-box-2-part-2" style="height: 150px;display: none;">
              <canvas id="Chart-by-stat"></canvas>
            </div>
            <div class="element-stats-box-2-part-3">
              <div class="homme"> 
                  <span style="display:none" ><img src="{% static 'img/man-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="M sexe">Congolais(e)</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__homme">${response.Statistique__by__aera__nationaux}</h3></div>
                  </span>
                  
              </div>
              <div class="femme"> 
                  <span style="display:none"><img src="{% static 'img/woman-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="F sexe">Etrangere</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__femme">${response.Statistique__by__aera__etrangere}</h3></div>
                  </span>   
              </div>
          </div>`
              
              //$('#btn-modal-follow-del').css("display","block");
              //$('#btn-modal-follow-add').css("display","none");
              
            }
            if (categorie =="Etat-Civil"){
              categorie__name.innerHTML =categorie
              element_stats.innerHTML=""
              element_stats.innerHTML = ` 
              <div class="element-stats-box-2-part-1">
              <div class="total">
                  <div><img src="{% 'static/img/person-team-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></div>
                  <div>
                    <div class="Ttl">Population total de la ${commune}</div>
                      <div class="stat-numbers" ><h3 id="stat__population__totals">${response.stat__population__total}</h3></div>
                  </div>
                  
              </div>
            </div>
            <div id="graph-container" class="element-stats-box-2-part-2" style="height: 150px;display: none;">
              <canvas id="Chart-by-stat"></canvas>
            </div>
            <div class="element-stats-box-2-part-3">
              <div class="homme"> 
                  <span style="display:none" ><img src="{% static 'img/man-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="M sexe">Célibataire</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__homme">${response.Statistique__by__aera__Celibataire}</h3></div>
                  </span>
                  
              </div>
              <div class="femme"> 
                  <span style="display:none"><img src="{% static 'img/woman-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="F sexe">Marié</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__femme">${response.Statistique__by__aera__Marie}</h3></div>
                  </span>   
              </div>
              <div class="femme"> 
                  <span style="display:none"><img src="{% static 'img/woman-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="F sexe">Divorcé</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__femme">${response.Statistique__by__aera__Divorce}</h3></div>
                  </span>   
              </div>
              <div class="femme"> 
                  <span style="display:none"><img src="{% static 'img/woman-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="F sexe">Veuf</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__femme">${response.Statistique__by__aera__Veuf}</h3></div>
                  </span>   
              </div>
              <div class="femme"> 
                  <span style="display:none"><img src="{% static 'img/woman-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="F sexe">Separé</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__femme">${response.Statistique__by__aera__Separe}</h3></div>
                  </span>   
              </div>
              <div class="femme"> 
                  <span style="display:none"><img src="{% static 'img/woman-svgrepo-com.svg' %}" alt="" height="100"
                width="100"></span>
                  <span>
                      <div class="F sexe">Union Libre</div>
                      <div class="stat-numbers"><h3 id="stat__population__total__femme">${response.Statistique__by__aera__Union_Libre}</h3></div>
                  </span>   
              </div>
          </div>`
              
            }
            
          
          },
        })}


    get__stats__lists__of__quarter(visible) {
      var categorie = $("#section_stats_element").attr("data-categorie");
      var name__of__commune = document.querySelector("#listes__of__communes").value
     
      $.ajax({
        type: "GET",
        url: `ajax/get__statistique__otherwise__quartier/${categorie}/${name__of__commune}/`,
        success: function (response) {
          console.log(response);
          var data = response.list__result;
           
           var listes__of__communes__population = document.getElementById("listes__of__communes__population");
            console.log(data);
                if (categorie=="Population"){
              
                listes__of__communes__population.style.display ="table"
                listes__of__communes__population.innerHTML =""
                listes__of__communes__population.innerHTML =`
                                        <tr class="tr">
                                            <th colspan="4" ><h2>Par Quartier</h2></th>
                                        </tr>
                                        <tr class="tr1" width: 100%;">
                                          <th>Nom du Quatier</th>
                                          <th>Homme</th>
                                          <th>Femme</th>
                                          <th>Totals Populations</th>
                                        </tr>`
                
                data.forEach((el) => {
                  listes__of__communes__population.innerHTML += `
                              <tr class="tr2">
                                  <td><h5><strong>${el.name__aera}</strong></h5></td>
                                  <td><h5>${el.Statistique__by__aera__homme}</h5></td>
                                  <td><h5>${el.Statistique__by__aera__femme}</h5></td>
                                  <td><h5>${ el.Statistique__by__aera}</h5></td>
                              </tr> 
                              `;
                });}
                if (categorie=="Education"){
                  
              
                  listes__of__communes__population.innerHTML =""
                  listes__of__communes__population.innerHTML =`
                                          <tr class="tr">
                                              <th colspan="4" ><h2>Par Quartier</h2></th>
                                          </tr>
                                          <tr class="tr1" width: 100%;">
                                            <th>Nom du Quatier</th>
                                            <th>Alphabetisation</th>
                                            <th>Analphabetisation</th>
                                            <th>Totals Populations</th>
                                          </tr>`
                  
                  data.forEach((el) => {
                    listes__of__communes__population.innerHTML += `
                                <tr class="tr2">
                                    <td><h5><strong>${el.name__aera}</strong></h5></td>
                                    <td><h5>${el.Statistique__by__aera__Alphabetisation}</h5></td>
                                    <td><h5>${el.Statistique__by__aera__Analphabetisation}</h5></td>
                                    <td><h5>${ el.Statistique__by__aera}</h5></td>
                                </tr> 
                                `;
                  });}
              if (categorie=="Migration"){
                
                listes__of__communes__population.style.display ="table"
                listes__of__communes__population.innerHTML =""
                listes__of__communes__population.innerHTML =`
                                        <tr class="tr">
                                            <th colspan="4" ><h2>Par Quartier</h2></th>
                                        </tr>
                                        <tr class="tr1" width: 100%;">
                                          <th>Nom du Quatier</th>
                                          <th>Congolais(e)</th>
                                          <th>Etrangere</th>
                                          <th>Totals Populations</th>
                                        </tr>`
                
                data.forEach((el) => {
                  listes__of__communes__population.innerHTML += `
                              <tr class="tr2">
                                  <td><h5><strong>${el.name__aera}</strong></h5></td>
                                  <td><h5>${el.Statistique__by__aera__nationaux}</h5></td>
                                  <td><h5>${el.Statistique__by__aera__etrangere}</h5></td>
                                  <td><h5>${ el.Statistique__by__aera}</h5></td>
                              </tr> 
                              `;
                });}
                if (categorie=="Etat-Civil"){
                  var listes__of__communes__population = document.getElementById("listes__of__communes__population");
                  listes__of__communes__population.style.display ="table"
                  listes__of__communes__population.innerHTML =""
                  listes__of__communes__population.innerHTML =`
                                          <tr class="tr">
                                              <th colspan="8" ><h2>Par Quartier</h2></th>
                                          </tr>
                                          <tr class="tr1" width: 100%;">
                                            <th>Nom du Quatier</th>
                                            <th>Celibataire</th>
                                            <th>Marié</th>
                                            <th>Divorcé</th>
                                            <th>Veuf</th>
                                            <th>Separé</th>
                                            <th>Union Libre</th>
                                            <th>Totals Populations</th>
                                          </tr>`
                  
                  data.forEach((el) => {
                    listes__of__communes__population.innerHTML += `
                                <tr class="tr2">
                                    <td><h5><strong>${el.name__aera}</strong></h5></td>
                                    <td><h5>${el.Statistique__by__aera__Celibataire}</h5></td>
                                    <td><h5>${el.Statistique__by__aera__Marié}</h5></td>
                                    <td><h5>${ el.Statistique__by__aera__Divorcé}</h5></td>
                                    <td><h5>${ el.Statistique__by__aera__Veuf}</h5></td>
                                    <td><h5>${ el.Statistique__by__aera__Separé}</h5></td>
                                    <td><h5>${ el.Statistique__by__aera__Union_Libre}</h5></td> 
                                    <td><h5>${ el.Statistique__by__aera}</h5></td> 
                                </tr> 
                                `;
                  });}
                  if (categorie=="Pauvrete"){
                    var listes__of__communes__population = document.getElementById("listes__of__communes__population");
                    listes__of__communes__population.style.display ="table"
                    listes__of__communes__population.innerHTML =""
                    listes__of__communes__population.innerHTML =`
                                            <tr class="tr">
                                                <th colspan="8" ><h2>Par Quartier</h2></th>
                                            </tr>
                                            <tr class="tr1" width: 100%;">
                                              <th>Nom du Quatier</th>
                                              <th>Celibataire</th>
                                              <th>Marié</th>                  
                                              <th>Totals Populations</th>
                                            </tr>`
                    
                    data.forEach((el) => {
                      listes__of__communes__population.innerHTML += `
                                  <tr class="tr2">
                                      <td><h5><strong>${el.name__aera}</strong></h5></td>
                                      <td><h5>${el.Statistique__by__aera__Celibataire}</h5></td>
                                      <td><h5>${el.Statistique__by__aera__Marié}</h5></td>
                                      <td><h5>${ el.Statistique__by__aera__Divorcé}</h5></td>
                                      <td><h5>${ el.Statistique__by__aera__Veuf}</h5></td>
                                      <td><h5>${ el.Statistique__by__aera__Separé}</h5></td>
                                      <td><h5>${ el.Statistique__by__aera__Union_Libre}</h5></td> 
                                      <td><h5>${ el.Statistique__by__aera}</h5></td> 
                                  </tr> 
                                  `;
                    });}
      
  
        },
        error: function (error) {
          console.log(error);
        },
      })
    }

    //get__lists__of__zones__on__modal
  get__lists__of__commune() {
  $.ajax({
    type: "GET",
    url: `ajax/get__lists__of__commune/`,
    success: function (response) {
      var data = response.list__of__commune;
        console.log(data);
          
          var listes__of__communes = document.getElementById("listes__of__communes");
          listes__of__communes.innerHTML =''
          data.forEach((el) => {
              listes__of__communes.innerHTML += `
                            <option value="${el.nom_commune}">${el.nom_commune}</option> 
                          `;
            });
      
    
    },
    error: function (error) {
      console.log(error);
    },
  });
}
}



const ajax__zone = new class__ajax__zone();
const ajax__home = new class__ajax__home();
const ajax__agent = new class__ajax__agent();
const ajax__suivi__de_res = new class__ajax__suivi__de__resecensement()
const ajax__stats = new class__ajax__statistique();
// set interval for all fonction
setInterval(() => {
  ajax__home.ajax_home_section();
  ajax__home.ajax_stats_home_section();
  ajax__home.ajax_agents_home_section();
  ajax__zone.ajax_get__nombres__zones();
  ajax__suivi__de_res.get__nombres__zones();
  ajax__suivi__de_res.get__lists__of__zones(visible)
  


 
}, 3000);

// appel a la fonction
function funct__delete__agent(agent,type__agent){
  $.ajax({
    type: "GET",
    url: `/ajax/delete__agent/${agent}/`,
    success: function (data) {
      document.getElementById("popup-message_systeme").style.display = "flex";
      document.getElementById("message_systeme").textContent = data.message_systeme;
      ajax__agent.get__lists__of__agents(type__agent)
      
    },
  })
}