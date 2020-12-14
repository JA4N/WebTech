var name;
var password;
var mail;
const regex = /[a-zA-Z0-9]{6,}/;


function seatReservation(aSeat) { }

class Reservations { }

// Test
const list = new Reservations('peter@web.de');
list.addSeatReservation(new seatReservation('D3'));
list.addSeatReservation(new seatReservation('F6'));
list.printReservierungen();




//Aufgabe 2
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
        //Exception soll gefangen werden
        catch (error) {

        }
    }
}

function seatReservation(aSeat) {
    let seat = aSeat
    return function(){
        return seat;
    }
}

class Reservations {
    #aMailadress=null;
    #mySeatList=[];
    constructor(aMailadress){
        this.#aMailadress = aMailadress;
    }
    addSeatReservation(aSeat){
        this.#mySeatList.push(aSeat())
    }

    printReservierungen(){
        for(let i=0; i<this.#mySeatList.length;i++){
            console.log(this.#mySeatList[i]);
        }
    }
}