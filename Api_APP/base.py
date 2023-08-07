import requests  
#endpoint = "https://httpbin.org/status/200/"
#url_base = "https://ins-rensecement-rdc.onrender.com/api" 
url_base = "http://127.0.0.1:8000/api"
endpoint_auth = f"{url_base}/auth/"
#password = getpass()
auth_response = requests.post(endpoint_auth,json={"username":"0258","password":"02580258"})
#get_reponse = requests.get(endpoint)
#endpoint = "https://httpbin.org/status/200/"

data = {
  'nom': 'kawama', 
  'prenom': 'leatitia',
   'postnom': 'kahulume',
    'sexe': 'F', 
    'date_de_naissance': '2022-03-09', 
    'province': 'Katanga', 
    'commune': 'Kenya',
     'quartier': 'Luapula', 
     'avenue': 'apotre johnathan ilunga', 
     'nationalite': 'congolaise', 
     'niveau_d_etude': 'liencee',
     "comprendreLire":"facilement", 
     'profession': 'economie', 
     'etat_civil': 'marie', 
     'numero_parcelle': '7',
      'menage': '1', 
      'zones': 5,
      "menager":4,
}
'''
data = {
    'province': 'haut-Katanga', 
    'commune': "Rwashi",
     'quartier': 'Matoleo', 
     'avenue': 'apotre johnathan ilunga',
     'numero_parcelle': 6554,
      'numero': 6, 
      'zones': 12,
      "nombre_ocupant":12, 
}'''
dat = {'etat':1}
if auth_response.status_code == 200:
    token = auth_response.json()["token"]
    print(token)
    headers = {
        "Authorization":f"Token {token}"
    }
    #endpoint =f"{url_base}/get_agents_user_info/0258/"
    endpoint = f"{url_base}/post_create_personnes_res/"
    #endpoint =  f"{url_base}/post__menage__for__creation/"
    #endpoint = f"{url_base}/get__manage__id/4/"
    
    #get_reponse = requests.get(endpoint,headers=headers) 
    get_reponse = requests.post(endpoint,headers=headers,json=data) 
    #get_reponse = requests.put(endpoint,headers=headers,json=dat)

    print(get_reponse.status_code)
    print(get_reponse.json())
else: 
  print("mot de passe incorrect")