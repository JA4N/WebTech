/*
Aufgabe 1:
Der aktuelle ECMAScript Standard definiert sieben Datentypen:
Sieben Datentypen sind primitives:
    Boolean
    Null
    Undefined
    Number
    String
    Symbol (new in ECMAScript 2015)
    BigInt
    (Object)

Aufgabe 2:
Mit async lädt der Browser das Script parallel zu anderen Ressourcen und beginnt derweil mit dem Aufbau der Seite. 
Sobald das Script geladen ist, entsteht eine Pause, weil der Browser das Script erst interpretieren muss.
Vorzugsweise sollten externe Scripts asynchron geladen werden. Für Third Party-Scripte ist async ein Muss – wenn deren Server gerade in die Knie geht, 
zieht das Script die eigene Seite in den Abgrund. Das asynchrone Laden von externen Scripten kürzt die Ladezeit und das Script kann sofort ausgeführt werden.
async kann aber auch ein Dilemma sein, denn es ist nicht vorhersehbar, wann das Script tatsächlich geladen und ausführbar ist.

(Mit async führt der Browser Scripte in der Reihenfolge zuerst geladen zuerst ausgeführt aus. Das zuerst geladene Script läuft zuerst, 
egal an welcher Stelle das Script im DOM erscheint.)

Das defer-Attribut im script-Tag verspricht dem Browser, dass die Webseite nicht durch Anweisungen wie document.write (was sowieso unerwünscht ist) geändert wird. 
Der Browser verschiebt das Laden und Ausführen des Scripts, bis alle anderen Komponenten geladen und die Seite geparst ist.
Es ist nicht einfach vorauszusehen, wann das Script tatsächlich vollständig geladen ist. Theoretisch sollte das der Fall sein, sobald das DOM geladen ist, 
direkt bevor DOMContentLoaded feuert.
Die Ladezeit der Seite wird immer noch durch das Laden des Scripts verlängert. Der Benutzer kann Links noch nicht benutzen und noch nicht scrollen.

(Mit defer führt der Browser die Script in der Reihenfolge aus, in der sie aufgeführt sind.)
*/
var name, passwordValue, passwordLength;

function showMe(){
    name = document.getElementById("name").value;
    passwordValue = document.getElementById("password").value;
    passwordLength = passwordValue.length 

    if(passwordLength < 6){
        alert("Passwort zu kurz!")
    }else{
       alert("Der Name lautet: " + name + "\n" + "Das Passwort lautet: " + passwordValue); 
    }
    
}
