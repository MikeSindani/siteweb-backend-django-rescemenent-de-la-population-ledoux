# Create your views here.
class LubumbashiArea:
   def funct__list__of__commune():
      return [
         "Lubumbashi",
         "Annexe",
         "Katuba",
         "Kenya",
         "Kampemba",
         "Kamalondo",
         "Rwashi",
      ]
   
   def funct__list__of__aera(commune):
      if commune == "Lubumbashi":
         return [
              "Gambela",
              "Gambela",
              "Kalubwe",
              "Kiwele",
              "Lido-Golf",
              "Lumumba",
              "Makutano",
               "Mampala",
               "Baudoin",
               "Makomeno",
                "Golf-Tshiamalale",
                "Golf-Malela",
                " Golf-Plateau",
                "Golf-Faustin",
            ]
      if commune == "Katuba":
         return [
              "Bukama",
            "Kaponda",
            "Kinyama",
            "Kimilolo",
            "Kisale",
            "Lufira",
            "Musumba",
            "Mwana Shaba",
            "Nsele",
            "Upemba"
            ]
      if commune == "Kenya":
         return [
             "Lualaba",
            "Luapula",
            "Luvua"
            ]
      if commune == "Kampemba":
         return [
            "Bel-Air I",
            "Bel-Air II",
            "Bongonga",
            "Quartier Industriel",
            "Kafubu",
            "Kampemba",
            "Kigoma",
            "Hewa-Bora",
            "Megastore"
            ] 
      if commune == "Kamalondo":
         return [
            "Kitumaini",
            "Njanja"
            ]
      if commune == "Rwashi":
         return [
            "Bendera",
            "Kalukuluku",
            "Matoleo",
            "Shindaika",
            "Congo",
            "Radem"
            ]
      if commune == "Annexe":
         return [
            "Kalebuka",
            "Kasapa",
            "Kasungami",
            "Kimbembe",
            "Kisanga",
            "Luwowoshi",
            "Munua",
            "Naviundu",
            "Kilobelobe",
            "Kamisepe",
            "Joli-site",
            "Munama",
            "Kashamata",
            "Kasamba",
            "Kanyaka",
            "Katwatwa",
            "Makwatsha",
            "Kafubu village",
            "Kamasaka",
            "Zambia",
            ] 
     