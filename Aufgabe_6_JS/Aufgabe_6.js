var name;
var password;
var mail;
const regex = /[a-zA-Z0-9]{6,}/;

const newsletter = [
    {
        id: 1,
        name: "Heinz",
        mail: "heinz@web.com",
        password: "1234Ketchup"
    },
    {
        id: 2,
        name: "Karla",
        mail: "karla@gmail.com",
        password: "myPasswort"
    },
    {
        id: 3,
        name: "Simon",
        mail: "simon@gmail.com",
        password: "geheim123"
    },
    {
        id: 4,
        name: "Carl",
        mail: "carl@web.com",
        password: "lisbet2013"
    }
];

function addMe() {
    try{
            name = document.getElementById("name").value;
            password = document.getElementById("passwort").value;
            mail = document.getElementById("mail").value;
            
            if(this.mail != '' || this.mail == null){
                if (regex.test(password) == false) {
                alert("Passwort muss mindestens eine Länge von 6 Zeichen enthalten")
                }
                else {
                    alert("Nutzer \n Name: ${name} \n Passwort: ${password} \n Email: ${mail} \n wurde angelegt");
                }
            }else{
                throw "Mail darf nicht leer sein!";
            }
            
            
    }catch(error){
        console.log("Fehler: " + error);
    }


    
}

//Aufgabe 1
/*for(let abos of newsletter){
    console.log(abos)
}*/
console.log("Aufgabe 1:")
for(var i = 0; i < newsletter.length; i++){
    console.log(newsletter[i].id, newsletter[i].name, newsletter[i].mail, newsletter[i].password);
}

//Aufgabe 2
console.log("Aufgabe 2:")
var selection = newsletter.filter((obj) => {
    var flag = false;
    Object.values(obj).forEach((val) => {
      if(String(val).indexOf('web') > -1) {
        flag = true;
        return;
      }    
    });
    if(flag) return obj;
  });
  console.log(selection);

//Aufgabe 3
console.log("Aufgabe 3:")
const searchSort = newsletter.filter(function(abos){
    if(abos.name.indexOf('i') != -1){
        return abos.name;
    }
});
console.log(searchSort);

//Aufgabe 2.1 Exception
/*
 In JavaScript, all exceptions are simply objects. While the majority of exceptions are implementations of the global Error class, 
 any old object can be thrown. With this in mind, there are two ways to throw an exception: directly via an Error object, and through a custom object.
*/

//Aufgabe 2.2 Exception
/*
Error
EvalError
InternalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
*/

//Aufgabe 2.3 Exception
/*
try: "Führe das aus"
catch: Wenn in try ein Fehler passiert "springe" in catch und wirf Exception
finally: Wird immer zuletzt ausgeführt
throw: Wirf eine Exception
*/