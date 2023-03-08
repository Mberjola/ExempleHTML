function ChangeColor() {
let compteur = parseInt(document.getElementById("compteur").innerHTML)
let afficheCompteur = document.getElementById("compteur")
let Conteneur = document.getElementById("banner");
if(Conteneur.style.backgroundColor != "blue"){
Conteneur.style.backgroundColor="blue";}
else{Conteneur.style.backgroundColor="tomato";}
compteur = compteur+1
afficheCompteur.innerHTML = compteur


}