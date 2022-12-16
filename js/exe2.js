//======================================================//
//****************** EVALUATION JS *********************//
//======================================================//

//******************* EXERCICE 2 ********************//

var monLien2= document.getElementById("exe2");

monLien2.addEventListener("click",exe_2);

function exe_2(){
    
var t = parseInt(window.prompt("choisissez une table de multiplication (1-10)"));
console.log("Table des multiples de " + t + ":"), console.log("========================");


for (var i = 0; i <= 10; i++) {
    var resultat = t * i;

    console.log(t + " * " + i + " = " + resultat);
}

}