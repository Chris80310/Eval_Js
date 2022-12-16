//======================================================//
//****************** EVALUATION JS *********************//
//======================================================//

//******************* EXERCICE 1 **********************//

var monLien1= document.getElementById("exe1");

monLien1.addEventListener("click",exe_1);

function exe_1(){

    var j = 0;
    var a = 0;
    var v = 0;
    var personnes;
    do {
        personnes = window.prompt("Entrez votre age");

        if (personnes < 20) {
            j++;
            console.log(j);
        }
        else if ((personnes >= 20) && (personnes <= 40)) {
            a++;
            console.log(a);
        }
        else if ((personnes >= 40) && (personnes <= 100)) {
            v++;
            console.log(v);
        }
    }
    while (personnes < 100);

    console.log("Il y a" + " " + j + " " + "jeune(s),\n" + " " + a + " " + "adulte(s),\n" + " " + v + " " + "vieux\n dont" + " 1 " + "centenaire.");

    window.alert("Il y a" + " " + j + " " + "jeune(s),\n" + " " + a + " " + "adulte(s),\n" + " " + v + " " + "vieux\n dont" + " 1 " + "centenaire.");

}