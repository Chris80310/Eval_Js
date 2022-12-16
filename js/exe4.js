//======================================================//
//****************** EVALUATION JS *********************//
//======================================================//


var monLien4= document.getElementById("exe4");

monLien4.addEventListener("click",exe_4);

function exe_4(){


//******************* EXERCICE 4  ********************//

var pu = parseInt(window.prompt("Choisir l'article (P.U)"));
var qte = parseInt(window.prompt("Choisir la quantité (qte)"));
var tot = pu * qte;
console.log(tot);

//********** Calcul de remise ******************//

var rem;

if (100 >= tot <= 200) {
    rem = (tot * 5) / 100;
}
if (tot > 200) {
    rem = (tot * 10) / 100;
}
console.log(rem);

//********** Calcul de frais de port ***********//

var prix = tot - rem;
var port = prix - (prix * 0.98);

if (port < 6) {
    port = 6
}
console.log(rem);

if ((tot - rem) > 500) { port = 0 }

console.log(port);
var pap = (tot - rem) + port;
console.log(pap);

//************** Alerte **********************//

window.alert("Vous avez saisi " + qte + " article(s) d'un prix unitaire de : " + pu + "€\nCe qui vous fait un total de : " + tot + "€");
console.log("Vous avez saisi " + qte + " article(s) d'un prix unitaire de : " + pu + "€\nCe qui vous fait un total de : " + tot + "€");

if (tot >= 100) {
    window.alert("Surprise ! Vous beneficiez d'une remise de " + rem + "€ !");
    console.log("Surprise ! Vous beneficiez d'une remise de " + rem + "€ !");
}

if (tot - rem > 500) {
    window.alert("Les frais de ports vous sont offerts !");
    console.log("Les frais de ports vous sont offerts !");
}

window.alert("Total à payer : " + pap.toFixed(2) + "");
console.log("Total à payer : " + pap.toFixed(2) + "");

}