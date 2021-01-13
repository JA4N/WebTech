let name;
let password;
let email;
const regex = /[a-zA-Z0-9]{6,}/;

let availableSeats = [];
const URL = "https://my-json-server.typicode.com/proohit/webtechbackend/seats";

//Aufgabe 2
//Sitze Laden
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);

xhr.addEventListener("readystatechange", function(){
  if (this.readyState === 4){
    console.log(this.responseText);
    const seats = JSON.parse(this.responseText);
    for (i=0; i<seats.length; i++){
      console.log(seats[i].seats);
    }
    showTable();
  }
});
xhr.send();


//Anzeige der Sitze
function showTable() {
  let table = document.createElement("table");
  table.setAttribute("border", "1");
  let row = table.insertRow(0);
  row.id = "row";
  for (j = 0; j < availableSeats.length; j++) {
    let text = document.createTextNode(availableSeats[j]);
    let cell = row.insertCell(j);
    cell.onclick = function () { setReservation(cell); };
    cell.appendChild(text);
  }
  document.getElementById("currentSeats").appendChild(table);
}
