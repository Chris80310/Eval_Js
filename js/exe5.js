//======================================================//
//****************** EVALUATION JS *********************//
//======================================================//

console.log("Connecté !");

//******************* EXERCICE 5 ********************//

var validation = document.getElementById('btn_submit');


//******************* Ecouteur d'événement lors du click sur le bouton submit ********************//

validation.addEventListener('click', formValid);

//******************* Alimentation de variables pour rechercher les éléments grace aux id********************//

var nom = document.getElementById("nom");
var nom_m = document.getElementById("nom_manquant");

var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenom_manquant");

var sexe = document.getElementById("sexe_div");
var sexe_m = document.getElementById("sexe_manquant");

var ddn = document.getElementById("ddn");
var ddn_m = document.getElementById("ddn_manquante");

var cp = document.getElementById("cp");
var cp_m = document.getElementById("cp_manquant");
var regexCP = /[0-9]{5}/;

var adresse = document.getElementById("adresse");
var adresse_m = document.getElementById("adresse_manquante");
var regexAdressse = /^[1-9]{1-4}\p[a-zA-Z]$/;

var ville = document.getElementById("ville");
var ville_m = document.getElementById("ville_manquante");

var email = document.getElementById("email");
var email_m = document.getElementById("email_manquant");
var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var sujet = document.getElementById("sujet");
var sujet_m = document.getElementById("sujet_manquant");

var cgu = document.getElementById("cgu");
var cgu_m = document.getElementById("cgu_manquant");


//************************************************************//


function formValid(e) {

    if (nom.value === "") {
        e.preventDefault();
        nom_m.textContent = "Veuillez renseigner votre nom";
        nom_m.style.color = "red";
    }


    else {


        nom_m.textContent = "Champ valide";
        nom_m.style.color = "green";


    }

    if (prenom.value === "") {
        e.preventDefault();
        prenom_m.textContent = "Veuillez renseigner votre prénom";
        prenom_m.style.color = "red";
    }

    else {

        prenom_m.textContent = "Champ valide";
        prenom_m.style.color = "green"
    }

    if (sexe.value === "") {
        e.preventDefault();
        sexe_m.textContent = "Veuillez renseigner votre sexe";
        sexe_m.style.color = "red";
    }

    else {
        sexe_m.textContent = "";
    }

    if (ddn.value === "") {
        e.preventDefault();
        ddn_m.textContent = "Veuillez renseigner votre date de naissance";
        ddn_m.style.color = "red";
    }

    else {
        ddn_m.textContent = "";
    }

    if (cp.value === "") {
        e.preventDefault();
        cp_m.textContent = "Veuillez renseigner votre code postal";
        cp_m.style.color = "red";
    }

    else if (regexCP.test(cp.value) == false) {
        e.preventDefault();
        cp_m.textContent = "Format incorrect";
        cp_m.style.color = "orange";
    }

    else {

        cp_m.textContent = "Champ valide";
        cp_m.style.color = "green"
    }

    if (adresse.value === "") {
        e.preventDefault();
        adresse_m.textContent = "Veuillez renseigner votre adresse";
        adresse_m.style.color = "red";
    }

    else {

        adresse_m.textContent = "Champ valide";
        adresse_m.style.color = "green"
    }

    if (ville.value === "") {
        e.preventDefault();
        ville_m.textContent = "Veuillez renseigner votre ville";
        ville_m.style.color = "red";
    }

    else {

        ville_m.textContent = "Champ valide";
        ville_m.style.color = "green"
    }

    if (email.value === "") {
        e.preventDefault();
        email_m.textContent = "Veuillez renseigner votre email";
        email_m.style.color = "red";
    }

    else if (regexEmail.test(email.value) == false) {
        e.preventDefault();
        email_m.textContent = "Format incorrect";
        email_m.style.color = "orange";
    }

    else {

        email_m.textContent = "Champ valide";
        email_m.style.color = "green"
    }

    if (sujet.value === "") {
        e.preventDefault();
        sujet_m.textContent = "Veuillez renseigner un sujet";
        sujet_m.style.color = "red";
    }

    else {
        sujet_m.textContent = "";
    }

    // alert(cgu.checked);

    if (cgu.checked == false) {
        e.preventDefault();
        cgu_m.textContent = "Cochez pour accepter le traitement informatique de ce formulaire";
        cgu_m.style.color = "red";
    }

    else {

        // cgu_m.textContent = "";
        cgu_m.textContent = "√";
        cgu_m.style.color = "green";
    }

    return false;




};




