//======================================================//
//****************** EVALUATION JS *********************//
//======================================================//

console.log("Connecté !");



//******************* EXERCICE 5 ********************//


var validation = document.getElementById('btn_submit');

//******************* Alimentation de variables pour rechercher les éléments grçace aux id********************//

var nom = document.getElementById("nom");
var nom_m = document.getElementById("erreur_nom");

//******************* Ecouteur d'événement lors du click sur le bouton submit ********************//

validation.addEventListener('click', formValid);

// btnsubmit=onClick=() => {validationFonct(formulaire)};

function formValid(e) {

    // var regexCP = /[0-9]{5}/g;
    // var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var nom = document.getElementById("nom");
    // var sexe_m = document.getElementById("sexe_div_m");
    // var sexe_f = document.getElementById("sexe_div_f");
    // var ddn = document.getElementById("ddn");
    // var cp = document.getElementById("cp");
    // var adresse = document.getElementById("adresse");
    // var ville = document.getElementById("ville");
    // var email = document.getElementById("email");
    // var sujet = document.getElementById("sujet");
    // var quest = document.getElementById("quest");
    // var cgu = document.getElementById("cgu");

    // alert(sexe.value);

    // alert(ddn.value);

    if (nom.value === "") {
        e.preventDefault();
        nom_m.textContent = "Nom manquant";
        nom_m.style.color = "red";
        // document.getElementById("erreur_nom").innerHTML = "Veuillez renseigner votre nom";
    }

    // if (!prenom.value) {
    //     document.getElementById("erreur_prenom").innerHTML = "Veuillez renseigner votre prénom";
    // }
    // // if (!sexe.value) {
    // //     document.getElementById("erreur_sexe_m").innerHTML = "Veuillez renseigner votre sexe";

    // if (!ddn.value) {
    //     document.getElementById("erreur_ddn").innerHTML = "Veuillez renseigner votre date de naissance";
    // }
    // if (!cp.value) {
    //     document.getElementById("erreur_cp").innerHTML = "Veuillez renseigner votre code postal";
    // }
    // if (!email.value) {
    //     document.getElementById("erreur_email").innerHTML = "Veuillez renseigner un email";
    // }
    // if (!sujet.value) {
    //     document.getElementById("erreur_sujet").innerHTML = "Veuillez renseigner un sujet";
    // }
    // if (!quest.value) {
    //     document.getElementById("erreur_quest").innerHTML = "Veuillez renseigner votre question";
    // }
    // if (!cgu.checked) {
    //     document.getElementById("erreur_cgu").innerHTML = "Cochez : J'accepte le traitement informatique de ce formulaire";
    // }
    // else {
    //
    //     alert("Formulaire envoyé !");
    // }

    
};

