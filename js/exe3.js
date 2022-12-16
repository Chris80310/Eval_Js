//======================================================//
//****************** EVALUATION JS *********************//
//======================================================//

//******************* EXERCICE 3  ********************//

var monLien3= document.getElementById("exe3");

monLien3.addEventListener("click",exe_3);

function exe_3(){


var p = ["audrey", "aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];


var saisie = window.prompt("Veuillez choisir un prénom parmi:\n" + p + "");
saisie = saisie.toLowerCase();
console.log(saisie);
if (p.includes(saisie)) {//********************/Methode//
    p.splice(p.indexOf(saisie), 1);//*********/trouvée//
    p.push(" ");//***************************/sur//
    console.log(p)//************************/internet//
}
else { alert("erreur") }

}