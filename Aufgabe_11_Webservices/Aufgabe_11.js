let name;
let password;
let email;
const regex = /[a-zA-Z0-9]{6,}/;
let availableSeats = [];
const URL = "https://my-json-server.typicode.com/proohit/webtechbackend/seats"

// Aufgabe 2
const fetchPromise = fetch(URL);
fetchPromise.then(response => {
  return response.json();
}).then(seats => {
  for(var i = 0; i < seats.length; i++){
  const names = seats.map(number => number.seat);
  availableSeats[i] = names[i];
  console.log(availableSeats[i]);
  }
  showTable();
});

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

//Speicherung der Ausgewählten Sitze:
function setReservation(value) {
  var row = document.getElementById("row");
  for (i = 0; i < row.children.length; i++) {
    if (row.children[i] == value) {
      let text = row.children[i].innerHTML;
      document.getElementById("seats").innerHTML += text + ",";
      row.deleteCell(i);
    }
  }
}

//Attribut löschen
document.getElementById("button").addEventListener("click", deleteReserverations);
function deleteReserverations() {
  let tag = document.querySelector("#seats");
  tag.outerHTML = "<h1>Inhalt gelöscht</h1>";
}
