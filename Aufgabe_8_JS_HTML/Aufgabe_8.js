/////
// JavaScript Einführung

var name;
var password;
var mail;
const regex = /[a-zA-Z0-9]{6,}/;

//Aufgabe 1
// Funktion zur Rückgabe der Sitzplatzreservierungen 
function seatReservation(aSeat) {
  let seat = aSeat;

  return function () {
    return aSeat;
  };
}

// Klasse zur Buchung einer Sitzplatzreservierung
class Reservations {

  #myMailAdress = null;
  #mySeatList = [];

  //mail der Reservierenden Person wird an Klasse übergeben
  constructor(aMailAdress) {
    this.#myMailAdress = aMailAdress;
  }

  //Reservierung wird zu platz-Array hinzugefügt
  addSeatReservation(aSeat) {
    this.#mySeatList.push(aSeat);
  }

  //Reservierungen werden angezeigt
  printReservations() {
    this.#mySeatList.forEach(seat => {
      console.log(seat());
    });
  }
}


// Test
const list = new Reservations('peter@web.de');
list.addSeatReservation(new seatReservation('D3'));
list.addSeatReservation(new seatReservation('F6'));
list.printReservations();


//A2
//Try Catch mit Error handling
function showMe() {
  name = document.getElementById("name").value;
  password = document.getElementById("passwort").value;
  mail = document.getElementById("mail").value;
  if (regex.test(password) == false) {
    alert("Passwort muss mindestens eine Länge von 6 Zeichen enthalten")
  }
  else {
    try {
      if (mail == "") {
        //Exception
        throw new Error(`Mailadresse darf nicht leer sein`);
      }
      else {
        alert(`Nutzer \n Name: ${name} \n Passwort: ${password} \n Email: ${mail} \n wurde angelegt`);
      }
    }
    catch (error) {
      alert("Email nicht definiert!")
    }
  }
}


/////
// JavaScript und HTML

const availableSeats = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"];

//Ausgabe der verfügbaren Plätze
var ausgabe;
var elem;

for (var i = 0; i < availableSeats.length; i++){
    elem = document.getElementById('platz' + i);  
    ausgabe = availableSeats[i];
    elem.innerHTML = ausgabe;
    }

//Auswahl eines Platzes
var newList;
var newContent;
//var selector;

//selector = document.getElementById('options');


for (var i = 0; i < availableSeats.length; i++){
  newList = document.createElement("option");
  newContent = document.createTextNode(availableSeats[i]); 
  newList.appendChild(newContent);
  document.getElementById("selector").appendChild(newList);
}




