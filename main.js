var Div = document.getElementById("Div1")

Div1.addEventListener("click",changerTexteEtClasse)

function changerTexteEtClasse(evenement){
    evenement.target.innerHTML = "On m'a cliqué dessus";

    evenement.target.className = "nouvelleClasse";

}
