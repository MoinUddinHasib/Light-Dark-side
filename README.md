# Light-Dark

## Inizializzazione
1) Creare un database su MySQL(porta 3000) di nome: "my_db" ed aggiungere una tabella di nome: "Statistics" con attributi: (chiave primaria)id:int , Dati:longtext(JSON).

2) Inserire L'UNICO dato: id:1(default) , Dati:{"times":0, "last":false}.

3) Installare tutte le dipendeze presente nel file package.json

4) Avviare il server

5) Aprire il browser ed andare su http://localhost:4000/ù


###### Conessione database
```javascript
const mysql = require("mysql");

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_db',
    port : '3000'
  });
```
