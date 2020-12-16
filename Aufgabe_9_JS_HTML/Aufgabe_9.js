let name;
let password;
let email;
const regex = /[a-zA-Z0-9]{6,}/;
let availableSeats = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"];

//Aufgabe 1

//Anzeige der Sitze
let table = document.createElement("table");
table.setAttribute("border", "1");
let row = table.insertRow(0);
row.id="row";
for (j = 0; j < availableSeats.length; j++) {
  let text = document.createTextNode(availableSeats[j]);
  let cell = row.insertCell(j);
  cell.onclick = function () {setReservation(cell);};
  cell.appendChild(text);
}
document.getElementById("currentSeats").appendChild(table);


//Speicherung der Ausgewählten Sitze:
function setReservation(value) {
  var row = document.getElementById("row");
  for (i = 0; i < row.children.length; i++) {
    if (row.children[i] == value) {
      let text = row.children[i].innerHTML;
      let reserviert = document.getElementById("sitze");
      if(reserviert.innerHTML==""){reserviert.innerHTML=text}
      else{reserviert.innerHTML+=",";
      reserviert.innerHTML+=text}
      row.deleteCell(i);
    }
  }
}
//Attribute löschen um einen Event-Listener erweitern!
//Attribute löschen um einen Event-Listener erweitern!
document.getElementById("button").onclick = function deleteReservation() {
  let reserviert = document.getElementById("sitze");
  reserviert.outerHTML ="<h1>Inhalt gelöscht</h1>"
}












//Lösungen aus vorherigen Aufgaben
function myReservierung(aPlatz) {
  let platz = aPlatz;

  return function () {
    return aPlatz;
  };
}

class Reservierungen {
  #myMail = null;
  #platzListe = [];
  constructor(mail) {
    this.#myMail = mail;
  }
  addPlatz(aPlatz) {
    this.#platzListe.push(aPlatz);
  }
  printReservierungen() {
    this.#platzListe.forEach(sitz => {
      console.log(sitz());
    });
  }
}

// Test
const list = new Reservierungen('peter@web.de');
list.addPlatz(new myReservierung('D3'));
list.addPlatz(new myReservierung('F6'));
list.printReservierungen();


function showMe() {
  name = document.getElementById("name").value;
  password = document.getElementById("passwort").value;
  email = document.getElementById("mail").value;
  if (regex.test(password) == false) {
    alert("Passwort muss mindestens eine Länge von 6 Zeichen enthalten")
  }
  else {
    try {
      if (email == "") {
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


