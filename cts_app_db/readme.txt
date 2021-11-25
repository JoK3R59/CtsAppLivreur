------------------
db name:"cts_app_db"
------------------

------------------
User:"Cts_admin"     /*accès dev*/
Pwd:"Cad68mF309"
------------------
User:"Cts_app"       /*accès machine*/
Pwd:"Cab7pPd5c0"

------------------
collections
------------------
client
commande
produit
tracking_commande
livreur
entreprise
rep_incident

-------------------------------------------------
importer/exporter la base de données dans mongodb
-------------------------------------------------
mongodump --db cts_app_db --out <file>

mongorestore --db cts_app_db <directory_backup_where_mongodb_tobe_restored>

