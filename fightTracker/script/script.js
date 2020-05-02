
//Lancer de Dés
let des = document.getElementById('des');
let lancer = document.getElementById('lancer');
let result = document.getElementById('resultat');

lancer.addEventListener("click", () => {
    
	switch(des.selectedOptions[0].value){
            
		case"d4": result.value=Math.floor(Math.random()*5);
		break;

		case"d6":result.value=Math.floor(Math.random()*7);
		break;

		case"d8":result.value=Math.floor(Math.random()*9);
		break;

		case"d10":result.value=Math.floor(Math.random()*11);
		break;

		case"d12":result.value=Math.floor((Math.random()*10)+3);
		break;

		case"d20":result.value=Math.floor((Math.random()*20)+1);
		break;

		case"d100":result.value=Math.floor((Math.random()*100)+1);
		break;

	} 
})

/*...........................Calcul de l'initiative.............................*/

let init = document.getElementById("init");

init.addEventListener('click', () => {

	for(const itemPerso of perso){

		let initPerso=itemPerso.querySelector(".initPerso");
        
		initPerso.value=Math.floor((Math.random()*20)+1);
}
})

/*...........................Ajouter personnage.............................*/

const ajouter = document.getElementById('ajouter');
const persoList = document.getElementById('persoList');

let perso = persoList.children;
let supprimer;

ajouter.addEventListener('click', () => {

 	const newPerso = document.querySelector('.Perso.hidden').cloneNode(true);

 	newPerso.classList.remove('hidden');
 	persoList.appendChild(newPerso); 

	
 	for(const item of perso){

            supprimer = item.querySelector('.supprimer');

            supprimer.addEventListener('click',()=>{

            item.remove();

	});
    }
});

/*...........................Tri des personnage par l'initiative.............................*/

let trier = document.getElementById('trier');

trier.addEventListener('click', () => {

	let tabPerso = Array.from(perso);
    
	tabPerso.sort( function(a, b) {
        
        return b.querySelector('.initPerso').value - a.querySelector('.initPerso').value;
        
    })
    
	tabPerso.forEach( element => {
        
		let deleted = persoList.removeChild(element);
        
		persoList.appendChild(deleted);

	})
})

/*...........................Compteur de round.............................*/

const roundButton = document.getElementById('roundButton');
const roundInput = document.getElementById('roundInput');

    roundButton.addEventListener('click', () => {
       
        if(perso.length > 1 ){

            roundInput.value++;
            

        }else{
            
            alert('Il faut au moins 2 personnages pour commencer un combat');
        }
        
        
    });

/*...........................Réinitialisation des valeurs.............................*/

function reloadValues(){
    
    roundInput.value = 0;
    result.value = 0;
    document.querySelector('.initPerso').value = 0;
    
}
reloadValues();