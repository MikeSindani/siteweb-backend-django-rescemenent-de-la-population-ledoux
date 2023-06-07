import requests  
#endpoint = "https://httpbin.org/status/200/"
endpoint_auth = "http://127.0.0.1:8000/api/auth/"
#password = getpass()
auth_response = requests.post(endpoint_auth,json={"username":"0258","password":"02580258"})
#get_reponse = requests.get(endpoint)
#endpoint = "https://httpbin.org/status/200/"

data = {
  'nom': 'kawama', 'prenom': 'leatitia', 'postnom': 'kahulume', 'sexe': 'M', 'date_de_naissance': '2022-03-09', 'province': 'bandundu', 'commune': 'kinserver', 'quartier': 'jolie site', 'avenue': 'apotre johnathan ilunga', 'nationalite': 'congolaise', 'niveau_d_etude': 'liencee', 'profession': 'informatique', 'etat_civil': 'celibataire', 'numero_parcelle': '7', 'menage': '1', 'zones': 13
}
dat = {'etat':1}
if auth_response.status_code == 200:
    token = auth_response.json()["token"]
    print(token)
    headers = {
        "Authorization":f"Token {token}"
    }
    endpoint = "http://127.0.0.1:8000/api/update_zone/43/"
    #endpoint = "http://127.0.0.1:8000/api/post_create_personnes_res/"
    
    #get_reponse = requests.get(endpoint,headers=headers)
    #get_reponse = requests.post(endpoint,headers=headers,json=data)
    get_reponse = requests.put(endpoint,headers=headers,json=dat)

    print(get_reponse.status_code)
    print(get_reponse.json())
else: 
  print("mot de passe incorrect")