/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = (Math.random()*20)
random = Math.floor(random);

console.log (random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {name : 'marco',
         surname : 'Petruzzella',
         age :32}
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["html", "css", "js"]
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Pyton');
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice (){let random = (Math.random()*6);
  random = Math.ceil(random);
  
  console.log (random)}
  dice();


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(x,y){if (x>y){console.log(x + " è maggiore di " + y) }
else if (x<y){console.log( x + " è minore di " + y )}
else (console.log( "i 2 numeri " + x + " e "+  y +" sono uguali "))}
whoIsBigger(20,20)

//OPPURE

function whoIsBigger2(x,y){if(x === y ){console.log("i 2 numeri sono uguali ")}
else{ let magg = Math.max(x,y);
console.log ("il numero piu grandè è : " + magg)}}

whoIsBigger2(10,15)



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/



/* function splitMe(x=prompt()){ let y=  x.split(' ');
console.log (y)};
splitMe() */






/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/



/* function deleteOne(inputString=prompt(), Valorebooleano) {
  if (Valorebooleano = true) {
   
    console.log ( inputString.slice(1))
  } else {
   
    console.log  (inputString.slice(0, -1))
  }
}
deleteOne()
 */




/* ESERCIZIO 5  
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs" */

  console.log("ESERCIZIO 5 ")
  let stringatest = "i have 4 dogs, 3 cat and 2 red fish"
  console.log(stringatest.replaceAll(/[123456789]/g,  ''));



  


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("Esercizio 6")
let indirizzoemail = "marcopetruzzella007@gmail.com"

function isThisAnEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}


let isValidEmail = isThisAnEmail(indirizzoemail);
console.log(isValidEmail); 



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('ESERCIZIO 7')
let oggi = new Date()
let sett = oggi.getDay()
console.log(sett)

switch (sett) {
  case 1: console.log('Oggi è Lunedi'); break;
  case 2: console.log('Oggi è Martedi'); break;
  case 3: console.log('Oggi è Mercoledi'); break;
  case 4: console.log('Oggi è Giovedi'); break;
  case 5: console.log('Oggi è Venerdi'); break;
  case 6: console.log('Oggi è Sabato'); break;
  case 7: console.log('Oggi è Domenica'); break;
  default:
      console.log('Valore Errato!!!');
      break;}

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().




  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/


console.log("ESERCIZIO 8 ")
function dice(){console.log ("ciao")}


let raccolta = {
  sum: 0,
  values: []}

function rollTheDices(x){
 

  for (let i = 0; i < x; i++) {
      let valoreracc = dice(x);
      raccolta.sum += valoreracc;
      raccolta.values.push(valoreracc);
  }

  return raccolta;
}
rollTheDices(3)
console.log (raccolta)







/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/



 function howManyDays (dataforn){
  let = dataforn= new Date(2023,10,11)
  let oggi = new Date();
  let differ=  Math.floor((oggi- dataforn )/(1000 * 60 * 60 * 24))
  console.log("la differenza tra le 2 date fornite è di "+ differ +" giorni")
  



}

howManyDays() 

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

/* function isTodayMyBirthday (){let oggi  = new Date();
let compl = new Date (1991, 7, 28)
console.log (Math.floor((compl - oggi  )/(1000 * 60 * 60 * 24)))
console.log(new Date (1991, 7, 28))
} */

// 28 AGOSTO 
function isTodayMyBirthday (){   
  let date = new Date()
  let giorno = date.getDay()
  let mese = date.getMonth()
 
  return giorno === 28 && mese === 7;
}

let risultato = isTodayMyBirthday();
console.log(risultato);
  






// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

 const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
 



/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/



function deleteProp(ogg, stringa) { 
    delete ogg[stringa];


  return ogg;}



/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {

  movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));

 
  return movies[0];
}

let filmPiuRecente = newestMovie(movies);
console.log("il film piu recente è " + filmPiuRecente.Title);


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies (){console.log("nell'array ci sono " +  movies.length + " film")}
countMovies ()

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
let  annidiuscita = []
function onlyTheYears(){ 
for (i=0; i< movies.length; i++){annidiuscita.push(movies[i].Year)}

}
onlyTheYears()
console.log(annidiuscita)

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
let secoloscorso = []
function onlyInLastMillennium(){
  for(i=0; i< movies.length; i++) if(
     parseInt(movies[i].Year) < 2000){secoloscorso.push(movies[i].Year)} 
}
 onlyInLastMillennium()
console.log(secoloscorso)
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  let sommiamo = 0;

  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    sommiamo += year;
  }

  return sommiamo;
}


let result = sumAllTheYears(movies);
console.log(result); 


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle (){}


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(searchString) {
  let match = [];
  let unmatch = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(searchString.toLowerCase())) {
     
      match.push(movies[i]);
    } else {
      
      unmatch.push(movies[i]);
    }
  }

  
  return { match, unmatch };
}


let searchString = "Lord of the Rings";
let result23 = searchAndDivide(searchString);
console.log(result23);


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(" ESERCIZIO 19")
function removeIndex(x){movies.splice(x-1 ,1)}
removeIndex()
console.log(movies)

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezioneID (){ let y = document.querySelector("#container");
return y;}
selezioneID()
let container = selezioneID()
console.log(container)



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selezionetd(){ let k = document.querySelectorAll('td');
return k}
selezionetd()
let selezione = selezionetd()
console.log(selezione)


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

                              
let td = document.querySelectorAll('td')
for (let i = 0; i < td.length; i++) {
  
  console.log(td[i].textContent);
}






/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function aggiungiclasse() {

  let links = document.querySelectorAll("a");

  for (let i = 0; i < links.length; i++) {
    links[i].classList.add('red');
  }
}

aggiungiclasse();

let links = document.querySelectorAll("a");
console.log(links);




/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
let li = document.createElement('li')
let ul =document.querySelector('#mylist')
ul.appendChild(li)



/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotare(){ let svuot = document.querySelectorAll("li");
for( i= 0; i< svuot.length; i++)

svuot[i].style.display = "none"
}
svuotare()


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addtr (){let addt = document.querySelectorAll('tr')
for(i=0; i< addt.length; i++){ addt[i].classList.add('test')}


}
addtr()




// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(){
  let n = prompt('Inserisci un numero: ');
  while (n < 0){
     n = prompt('Inserisci un numero: ');
  }
    
   let div = 1;
   let conta=0;
    
   while(conta <= 1 && div <= n/2) {
     if(n % div == 0)  {
    conta++;	
     }
     div++;
   }
    
   if (conta == 1){
     document.write('Il numero è primo ');
   }   
   else {
      document.write('Il numero non è primo ');
   }


}
let numeroprimo = isItPrime()
