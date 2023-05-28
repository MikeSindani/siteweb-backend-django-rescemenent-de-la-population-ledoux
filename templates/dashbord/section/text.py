

# Importer le module MySQL Connector
import mysql.connector

# Créer une connexion à la base de données
conn = mysql.connector.connect(
    host="154.49.142.1", # Remplacer par le nom d'hôte ou l'adresse IP de votre serveur MySQL
    user="u965490356_chris", # Remplacer par le nom d'utilisateur de votre base de données
    password="CHri28@@", # Remplacer par le mot de passe de votre base de données
    database="u965490356_lacreche" # Remplacer par le nom de votre base de données
)

# Créer un objet curseur pour exécuter des requêtes SQL
cursor = conn.cursor()

# Exécuter une requête SQL pour sélectionner toutes les données de la table "users"
cursor.execute("SELECT * FROM users")

# Récupérer les résultats de la requête sous forme de liste de tuples
results = cursor.fetchall()

# Afficher les résultats
for row in results:
    print(row)

# Fermer le curseur et la connexion
cursor.close()
conn.close()
